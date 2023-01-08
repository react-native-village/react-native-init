import {expect} from 'chai';
import {ethers} from 'hardhat';

enum Status {
  PENDING_PERFORMER,
  IN_PROGRESS,
  ON_REVIEW,
  REJECTED,
  COMPLETED,
  CONFLICT,
}

let contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';

describe('Project task contract', function () {
  it('Testing initializing and deploying', async function () {
    const ProjectTask = await ethers.getContractFactory('ProjectTask');

    const [owner] = await ethers.getSigners();
    const expectedShortTitle =
      'Сделать упрощенную версию apple заметок на Reactjs';
    const expectedDescriptionLink =
      'https://goldenart.com.ua/assets/files/Тестовое%20задание%20Reactjs.pdf';
    const expectedTaskCost = ethers.utils.parseEther('0.1');

    const contract = await ProjectTask.deploy(
      expectedShortTitle,
      expectedDescriptionLink,
      {value: expectedTaskCost},
    );
    // Для других тестов
    contractAddress = contract.address;

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
  });
  it('Testing wishing performers list', async function () {
    const [owner, ...otherAddr] = await ethers.getSigners();
    const contract = await ethers.getContractAt('ProjectTask', contractAddress);

    expect(await contract.wishing_performers(owner.address)).to.equal(false);
    for (const addr of otherAddr) {
      expect(await contract.wishing_performers(addr.address)).to.equal(false);
      await contract.connect(addr).assignRequest();
      expect(await contract.wishing_performers(addr.address)).to.equal(true);
    }
    try {
      await contract.assignRequest();
      fail('Should not be able to assign request');
    } catch (error: any) {
      expect(error?.message).to.include('EmployerCannotBePerformer');
    }
  });
});
