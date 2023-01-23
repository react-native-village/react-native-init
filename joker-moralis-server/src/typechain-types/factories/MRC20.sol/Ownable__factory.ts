/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { Ownable, OwnableInterface } from "../../MRC20.sol/Ownable";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506105da806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063715018a6146100465780638da5cb5b14610050578063f2fde38b1461006e575b600080fd5b61004e61008a565b005b6100586101dd565b604051610065919061041c565b60405180910390f35b61008860048036038101906100839190610468565b610206565b005b6100926102a7565b73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461011f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610116906104f2565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a360008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b61020e6102a7565b73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461029b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610292906104f2565b60405180910390fd5b6102a4816102af565b50565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361031e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161031590610584565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610406826103db565b9050919050565b610416816103fb565b82525050565b6000602082019050610431600083018461040d565b92915050565b600080fd5b610445816103fb565b811461045057600080fd5b50565b6000813590506104628161043c565b92915050565b60006020828403121561047e5761047d610437565b5b600061048c84828501610453565b91505092915050565b600082825260208201905092915050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60006104dc602083610495565b91506104e7826104a6565b602082019050919050565b6000602082019050818103600083015261050b816104cf565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b600061056e602683610495565b915061057982610512565b604082019050919050565b6000602082019050818103600083015261059d81610561565b905091905056fea2646970667358221220646490f5b7093cc79a7367434d2a73b73cf980bd4102c13acb54d76eb727cf9564736f6c63430008110033";

type OwnableConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: OwnableConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Ownable__factory extends ContractFactory {
  constructor(...args: OwnableConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Ownable> {
    return super.deploy(overrides || {}) as Promise<Ownable>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Ownable {
    return super.attach(address) as Ownable;
  }
  override connect(signer: Signer): Ownable__factory {
    return super.connect(signer) as Ownable__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OwnableInterface {
    return new utils.Interface(_abi) as OwnableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Ownable {
    return new Contract(address, _abi, signerOrProvider) as Ownable;
  }
}
