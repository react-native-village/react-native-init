import {anyValue} from '@nomicfoundation/hardhat-chai-matchers/withArgs';
import {expect} from 'chai';
import {ethers} from 'hardhat';

import {ProjectTask} from 'src/typechain-types';

enum Status {
  PENDING_PERFORMER,
  IN_PROGRESS,
  ON_REVIEW,
  REJECTED,
  COMPLETED,
  CONFLICT,
  REQUESTED_CHANGES,
}

// Для использования в основных тестах
let contract: ProjectTask;

const emptyAddress = '0x0000000000000000000000000000000000000000';

describe('Project task contract', () => {
  it('Testing initializing and deploying', async () => {
    const ProjectTask = await ethers.getContractFactory('ProjectTask');

    const [owner] = await ethers.getSigners();
    const expectedRepoName = 'leela';
    const expectedOwner = 'gHashTag';
    const expectedIssueId = 2;
    const expectedTaskCost = ethers.utils.parseEther('0.1');

    contract = await ProjectTask.deploy(
      expectedRepoName,
      expectedOwner,
      expectedIssueId,
      {
        value: expectedTaskCost,
      },
    );

    const status = await contract.status();
    const {repo, owner: owner_gh, issue_number} = await contract.task_gh();
    const taskCost = await contract.task_cost();
    const wishingPerformers = await contract.wishing_performers(owner.address);

    expect(repo).to.equal(expectedRepoName);
    expect(owner_gh).to.equal(expectedOwner);
    expect(issue_number).to.equal(expectedIssueId);
    expect(await contract.employer()).to.equal(owner.address);
    expect(taskCost).to.equal(expectedTaskCost);
    expect(status).to.equal(Status.PENDING_PERFORMER);
    expect(wishingPerformers).to.equal(false);

    await expect(contract.sendTaskToReview()).to.be.revertedWithCustomError(
      contract,
      'OnlyPerformerCanDoThis',
    );
  });
  it('Testing sending money to contract', async () => {
    const weiCount = ethers.utils.parseEther('5');
    const payload = {value: weiCount, to: contract.address};

    const prevContractCost = await contract.task_cost();
    const [owner, signer] = await ethers.getSigners();

    await owner.sendTransaction(payload);
    expect(await contract.task_cost()).to.equal(prevContractCost.add(weiCount));

    await signer.sendTransaction(payload);
    expect(await contract.task_cost()).to.equal(
      prevContractCost.add(weiCount.mul(2)),
    );
  });
  it('Testing wishing performers list', async () => {
    const [owner, , ...otherSigners] = await ethers.getSigners();

    expect(await contract.wishing_performers(owner.address)).to.equal(false);
    for (const addr of otherSigners) {
      expect(await contract.wishing_performers(addr.address)).to.equal(false);
      await contract.connect(addr).assignRequest();
      expect(await contract.wishing_performers(addr.address)).to.equal(true);
    }
    await expect(
      contract.connect(otherSigners[0]).assignRequest(),
    ).to.be.revertedWithCustomError(contract, 'PerformerAlreadyWish');
    await expect(contract.assignRequest()).to.be.revertedWithCustomError(
      contract,
      'EmployerCannotBePerformer',
    );
  });
  it('Testing revoke assign request', async () => {
    const [, notWishingSigner, ...wishingSigners] = await ethers.getSigners();

    await expect(
      contract.connect(notWishingSigner).revokeAssignRequest(),
    ).to.be.revertedWithCustomError(contract, 'PerformerIsNotWishingDoThis');

    await contract.connect(wishingSigners[3]).revokeAssignRequest();

    expect(
      await contract.wishing_performers(wishingSigners[3].address),
    ).to.equal(false);
  });
  it('Testing assign performer', async () => {
    const [owner, notWishingSigner, ...wishingSigners] =
      await ethers.getSigners();

    const checkNothingBeChanged = async () => {
      expect(await contract.status()).to.equal(Status.PENDING_PERFORMER);
      expect(await contract.selected_performer()).to.hexEqual(emptyAddress);
    };
    await expect(
      contract.assignPerformer(notWishingSigner.address),
    ).to.be.revertedWithCustomError(contract, 'PerformerIsNotWishingDoThis');

    await checkNothingBeChanged();
    await expect(
      contract.assignPerformer(owner.address),
    ).to.be.revertedWithCustomError(contract, 'EmployerCannotBePerformer');
    await checkNothingBeChanged();
    await contract.assignPerformer(wishingSigners[0].address);

    expect(await contract.selected_performer()).to.hexEqual(
      wishingSigners[0].address,
    );
    expect(await contract.status()).to.equal(Status.IN_PROGRESS);
  });
  it('Testing methods before assign performer', async () => {
    const [, ...signers] = await ethers.getSigners();

    await expect(
      contract.assignPerformer(signers[0].address),
    ).to.be.revertedWithCustomError(contract, 'TaskNotPendingPerformer');
    await expect(
      contract.connect(signers[2]).assignRequest(),
    ).to.be.revertedWithCustomError(contract, 'TaskNotPendingPerformer');
  });
  it('Testing methods after assign performer', async () => {
    const [, ...signers] = await ethers.getSigners();

    await expect(
      contract.assignPerformer(signers[0].address),
    ).to.be.revertedWithCustomError(contract, 'TaskNotPendingPerformer');
    await expect(
      contract.connect(signers[0]).assignRequest(),
    ).to.be.revertedWithCustomError(contract, 'TaskNotPendingPerformer');

    await expect(contract.rejectTask()).to.be.revertedWithCustomError(
      contract,
      'AssignedTaskCannotBeRejected',
    );
    await expect(contract.completeTask()).to.be.revertedWithCustomError(
      contract,
      'TaskIsStillInProgress',
    );
  });
  it('Testing reviewing task', async () => {
    const [, , assignedSigner] = await ethers.getSigners();
    await expect(contract.sendTaskToReview()).to.be.revertedWithCustomError(
      contract,
      'OnlyPerformerCanDoThis',
    );
    expect(await contract.status()).to.equal(Status.IN_PROGRESS);
    await contract.connect(assignedSigner).sendTaskToReview();
    expect(await contract.status()).to.equal(Status.ON_REVIEW);
  });
  describe('Testing task resolutions', () => {
    let freshContract: ProjectTask;
    beforeEach(async () => {
      const ProjectTask = await ethers.getContractFactory('ProjectTask');

      freshContract = await ProjectTask.deploy('repoName', 'owner', 2, {
        value: ethers.utils.parseEther('0.1'),
      });

      const [, assignedSigner] = await ethers.getSigners();
      await freshContract.connect(assignedSigner).assignRequest();
      await freshContract.assignPerformer(assignedSigner.address);
    });
    test('Testing task request changes', async () => {
      const [, assignedSigner] = await ethers.getSigners();
      await freshContract.connect(assignedSigner).sendTaskToReview();

      const comment = 'Pls fix bugs';
      const additionalLink = 'https://doc.com/fix-bugs/description-file';

      await expect(
        freshContract
          .connect(assignedSigner)
          .requestChanges(comment, additionalLink),
      ).to.be.revertedWithCustomError(freshContract, 'OnlyEmployerCanDoThis');
      expect(await freshContract.status()).to.equal(Status.ON_REVIEW);

      await expect(freshContract.requestChanges(comment, additionalLink))
        .to.emit(freshContract, 'RequestForChanges')
        .withArgs(assignedSigner.address, comment, additionalLink);
      expect(await freshContract.status()).to.equal(Status.REQUESTED_CHANGES);

      await expect(
        freshContract.requestChanges(comment, additionalLink),
      ).to.be.revertedWithCustomError(freshContract, 'TaskIsNotOnReview');

      expect(await freshContract.status()).to.equal(Status.REQUESTED_CHANGES);
    });
    test('Testing task reject', async () => {
      const [, assignedSigner] = await ethers.getSigners();
      await expect(
        freshContract.connect(assignedSigner).rejectTask(),
      ).to.be.revertedWithCustomError(freshContract, 'OnlyEmployerCanDoThis');

      const expectCannotBeRejected = async () => {
        await expect(freshContract.rejectTask()).to.be.revertedWithCustomError(
          freshContract,
          'AssignedTaskCannotBeRejected',
        );
      };
      await expectCannotBeRejected();
      expect(await freshContract.status()).to.equal(Status.IN_PROGRESS);

      await freshContract.connect(assignedSigner).sendTaskToReview();
      await expectCannotBeRejected();
      expect(await freshContract.status()).to.equal(Status.ON_REVIEW);

      const message = 'Sorry, I cannot do it';
      await expect(
        freshContract.connect(assignedSigner).renounceTaskWithMessage(message),
      )
        .to.be.emit(freshContract, 'RenounceTaskByPerformer')
        .withArgs(anyValue, message);

      await freshContract.rejectTask();
      await expect(freshContract.employer()).to.be.revertedWithoutReason();
    });
    test('Testing task complete', async () => {
      const [, assignedSigner] = await ethers.getSigners();
      await expect(
        freshContract.connect(assignedSigner).completeTask(),
      ).to.be.revertedWithCustomError(freshContract, 'OnlyEmployerCanDoThis');

      const expectCannotBeCompleted = async () => {
        await expect(
          freshContract.completeTask(),
        ).to.be.revertedWithCustomError(freshContract, 'TaskIsStillInProgress');
      };
      await expectCannotBeCompleted();
      expect(await freshContract.status()).to.equal(Status.IN_PROGRESS);

      await freshContract.connect(assignedSigner).renounceTaskWithMessage('');
      await expectCannotBeCompleted();
      const taskCost = await freshContract.task_cost();

      await expect(
        freshContract.assignPerformer(assignedSigner.address),
      ).to.be.revertedWithCustomError(
        freshContract,
        'PerformerIsNotWishingDoThis',
      );
      await freshContract.connect(assignedSigner).assignRequest();
      await freshContract.assignPerformer(assignedSigner.address);
      await freshContract.connect(assignedSigner).sendTaskToReview();
      await expect(freshContract.completeTask()).to.changeEtherBalance(
        assignedSigner.address,
        taskCost,
      );
    });
  });
});
