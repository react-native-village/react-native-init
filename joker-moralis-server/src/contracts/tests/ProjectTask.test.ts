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
    const expectedShortTitle =
      'Сделать упрощенную версию apple заметок на Reactjs';
    const expectedDescriptionLink =
      'https://goldenart.com.ua/assets/files/Тестовое%20задание%20Reactjs.pdf';
    const expectedTaskCost = ethers.utils.parseEther('0.1');

    contract = await ProjectTask.deploy(
      expectedShortTitle,
      expectedDescriptionLink,
      {value: expectedTaskCost},
    );

    const status = await contract.status();
    const shortTitle = await contract.short_title();
    const descriptionLink = await contract.task_description_link();
    const taskCost = await contract.task_cost();
    const wishingPerformers = await contract.wishing_performers(owner.address);

    expect(status).to.equal(Status.PENDING_PERFORMER);
    expect(shortTitle).to.equal(expectedShortTitle);
    expect(descriptionLink).to.equal(expectedDescriptionLink);
    expect(taskCost).to.equal(expectedTaskCost);
    expect(wishingPerformers).to.equal(false);
    expect(await contract.employer()).to.equal(owner.address);
    await expect(contract.sendTaskToReview()).to.be.revertedWithCustomError(
      contract,
      'OnlyPerformerCanDoThis',
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

      freshContract = await ProjectTask.deploy('title', 'link', {
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
  });
});
