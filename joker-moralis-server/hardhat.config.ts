import '@nomicfoundation/hardhat-toolbox';
import {HardhatUserConfig} from 'hardhat/config';

const config: HardhatUserConfig = {
  solidity: '0.8.17',
  paths: {
    root: './src',
    artifacts: './hardhat',
    cache: './hardhat',
    sources: './contracts',
    tests: './contracts/tests',
  },
  networks: {
    polygon: {
      url: 'https://rpc-mumbai.maticvigil.com',
      accounts: ['METAMASK_PRIVATE_KEY'],
    },
  },
};
export default config;
