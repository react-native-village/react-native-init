import {ethers} from 'hardhat';

describe('Token contract', function () {
  it('Deployment should assign the total supply of tokens to the owner', async function () {
    expect.assertions(1);
    const [owner] = await ethers.getSigners();

    const Token = await ethers.getContractFactory('Token');

    const hardhatToken = await Token.deploy();

    const ownerBalance = await hardhatToken.balanceOf(owner.address);
    expect(await hardhatToken.totalSupply()).toEqual(ownerBalance);
  });
  it('Should transfer tokens between accounts', async function () {
    expect.assertions(2);
    const [, addr1, addr2] = await ethers.getSigners();

    const Token = await ethers.getContractFactory('Token');

    const hardhatToken = await Token.deploy();

    // Transfer 50 tokens from owner to addr1
    await hardhatToken.transfer(addr1.address, 50);
    expect(
      parseInt(await (await hardhatToken.balanceOf(addr1.address))._hex),
    ).toEqual(50);

    // // Transfer 50 tokens from addr1 to addr2
    await hardhatToken.connect(addr1).transfer(addr2.address, 50);
    expect(
      parseInt(await (await hardhatToken.balanceOf(addr2.address))._hex),
    ).toEqual(50);
  });
});
