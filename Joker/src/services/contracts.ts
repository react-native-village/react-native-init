import {EventEmitter} from 'events';

import {POLYGON_RPC_PROVIDER, POLYGON_TESTNET_RPC_PROVIDER} from '@env';
import {ethers} from 'ethers';
import * as IPFS from 'ipfs-http-client';

import {captureException} from 'src/helpers';

import {
  abiProjectTask,
  bytecodeProjectTask,
} from './ready-contracts/ProjectTask';

export class Contracts extends EventEmitter {
  provider: ethers.providers.JsonRpcProvider;
  clientIPFS: IPFS.IPFSHTTPClient;

  constructor() {
    super();
    this.clientIPFS = IPFS.create({url: 'https://ipfs.io/ipfs'});
    if (__DEV__) {
      this.provider = new ethers.providers.JsonRpcProvider(
        POLYGON_TESTNET_RPC_PROVIDER,
      );
    } else {
      this.provider = new ethers.providers.JsonRpcProvider(
        POLYGON_RPC_PROVIDER,
      );
    }
  }

  async deployProjectTaskContract(title: string, taskLink: string) {
    // const wallet = new ethers.Wallet(
    //   MY_METAMASK_ACCOUNT_SECRET_KEY ?? '',
    //   this.provider,
    // );

    const ProjectTaskFactory = new ethers.ContractFactory(
      abiProjectTask,
      bytecodeProjectTask,
    );
    const res = await ProjectTaskFactory /*.connect(wallet)*/.deploy(
      title,
      taskLink,
    );
    console.log('🚀 - res', res);
  }
  async saveImageInIpfs(content: string, fileName: string) {
    try {
      const {cid} = await this.clientIPFS.add({path: fileName, content});
      return cid;
    } catch (error) {
      captureException(error);
    }
  }

  async getIpfsContentByCID(cid: string) {
    console.log('🚀 - cid', cid);
    const data = [];

    for await (const chunk of this.clientIPFS.cat(cid)) {
      data.push(chunk);
    }
    console.log('🚀 - data', data);
    return data;
  }

  async getContractData() {
    const testContractAddress = '0x434B2Efd9Bca486A5B16D792F2166AF510b4D729';
    const contract = new ethers.Contract(
      testContractAddress,
      abiProjectTask,
      this.provider,
    );
    console.log('🚀 - contract', await contract.status());
  }
}

export const contracts = new Contracts();
