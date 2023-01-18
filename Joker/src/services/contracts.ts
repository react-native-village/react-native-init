import {EventEmitter} from 'events';

import {
  ALCHEMY_API_KEY,
  POLYGON_RPC_PROVIDER,
  POLYGON_TESTNET_RPC_PROVIDER,
  PRIVATE_SECRET_KEY,
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

  async deployProjectTaskContract(
    repoName: string,
    owner: string,
    issueId: number,
  ) {
    const wallet = new ethers.Wallet(PRIVATE_SECRET_KEY ?? '', this.provider);

    const ProjectTaskFactory = new ethers.ContractFactory(
      abiProjectTask,
      bytecodeProjectTask,
    );
    const res = await ProjectTaskFactory.connect(wallet).deploy(
      repoName,
      owner,
      issueId,
    );
    return res;
  }

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

  async getContract(address: string) {
    const contract = new ethers.Contract(
      address,
      abiProjectTask,
      this.provider,
    );
    return contract;
  }
}

export const contracts = new Contracts();

export interface NftsArrayItem {
  uri: string;
  name: string;
  id: string;
}
