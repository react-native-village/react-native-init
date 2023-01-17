import {EventEmitter} from 'events';

import {
  ALCHEMY_API_KEY,
  POLYGON_RPC_PROVIDER,
  POLYGON_TESTNET_RPC_PROVIDER,
} from '@env';
import {Alchemy, AlchemySettings, Network} from 'alchemy-sdk';
import {ethers} from 'ethers';

import {captureException} from 'src/helpers';

import {replaceUri} from './nft-helper';
import {
  abiProjectTask,
  bytecodeProjectTask,
} from './ready-contracts/ProjectTask';

const alchemySettings: AlchemySettings = {
  apiKey: ALCHEMY_API_KEY, // Replace with your Alchemy API key.
  network: Network.MATIC_MUMBAI, // Replace with your network.
};

export class Contracts extends EventEmitter {
  provider: ethers.providers.JsonRpcProvider;
  alchemy: Alchemy;

  constructor() {
    super();
    this.alchemy = new Alchemy(alchemySettings);

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
  // async saveImageInIpfs(content: string, fileName: string) {
  //   try {
  //     const {cid} = await this.clientIPFS.add({path: fileName, content});
  //     return cid;
  //   } catch (error) {
  //     captureException(error);
  //   }
  // }

  async getNftDataByAddress(address: string) {
    try {
      return await this.alchemy.nft.getNftsForOwner(address);
    } catch (error) {
      captureException(error);
    }
  }
  async getImageNftsByAddress(
    address: string,
  ): Promise<NftsArrayItem[] | undefined> {
    try {
      const data = await this.getNftDataByAddress(address);
      if (!data) {
        throw new Error('No data');
      }
      return (
        data?.ownedNfts
          .map(nft => ({
            uri: replaceUri(nft.rawMetadata?.image),
            name: nft.title,
            id: nft.tokenId,
          }))
          .filter(nft => {
            return !!nft.uri;
          }) as NftsArrayItem[]
      ).reduce((o, i: NftsArrayItem) => {
        if (!o.find(v => v.uri === i.uri)) {
          o.push(i);
        }
        return o;
      }, [] as NftsArrayItem[]);
    } catch (error) {
      captureException(error);
    }
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

export interface NftsArrayItem {
  uri: string;
  name: string;
  id: string;
}
