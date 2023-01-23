// import dotenv from 'dotenv';
// import {ethers, utils} from 'ethers';

// // Если есть
// import {ProjectTask__factory} from '../../typechain-types/factories/ProjectTask__factory';
// dotenv.config();

// const {bytecode, abi} = ProjectTask__factory;

// const provider = new ethers.providers.JsonRpcProvider(
//   process.env.POLYGON_TESTNET_RPC_PROVIDER,
// );

// const walletOne = new ethers.Wallet(
//   process.env.PRIVATE_SECRET_KEY_1 ?? '',
//   provider,
// );

// const walletTwo = new ethers.Wallet(
//   process.env.PRIVATE_SECRET_KEY_2 ?? '',
//   provider,
// );

// const deployContract = async () => {
//   const factory = new ethers.ContractFactory(abi, bytecode);
//   const contract = await factory
//     .connect(walletOne)
//     // repoName, owner, issueId, cost in matic
//     .deploy('repoName', 'owner', 1);
//   console.log('🚀 - contract address: ', contract.address);
//   return contract;
// };

// const testContractAddress = '0x2FdeFf872B50C231468662D0e3c4250714AEfc17';
// const getContract = async (address: string) => {
//   return new ethers.Contract(address, abi, provider);
// };

// async function main() {
//   try {
//     const feeData = await provider.getFeeData();
//     if (feeData.maxFeePerGas && feeData.gasPrice) {
//       const maxFeePerGas = utils.formatUnits(feeData.maxFeePerGas, 'wei');
//       const gasPrice = utils.formatUnits(feeData.gasPrice, 'wei');

//       // const contract = await deployContract();
//       const contract = await getContract(testContractAddress);

//       const tx: utils.Deferrable<ethers.providers.TransactionRequest> = {
//         to: testContractAddress,
//         value: 100000,
//         gasLimit: maxFeePerGas,
//         gasPrice,
//       };
//       const createReceipt = await walletOne.sendTransaction(tx);

//       await createReceipt.wait();
//       console.log('🚀 - createReceipt', createReceipt.hash);
//     }
//   } catch (error) {
//     console.log('🚀 - error', error);
//   }
// }

// function end(err?: any) {
//   console.log('🚀 - error: ', err);
//   process.exit(1);
// }

// main().catch(end);
