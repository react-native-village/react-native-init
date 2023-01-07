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
};
export default config;
