/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

export const abiProjectTask = [
  {
    inputs: [
      {
        internalType: 'string',
        name: '_repo',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_owner',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: '_issue_number',
        type: 'uint256',
      },
    ],
    stateMutability: 'payable',
    type: 'constructor',
  },
  {
    inputs: [],
    name: 'AssignedTaskCannotBeRejected',
    type: 'error',
  },
  {
    inputs: [],
    name: 'EmployerCannotBePerformer',
    type: 'error',
  },
  {
    inputs: [],
    name: 'OnlyEmployerCanDoThis',
    type: 'error',
  },
  {
    inputs: [],
    name: 'OnlyPerformerCanDoThis',
    type: 'error',
  },
  {
    inputs: [],
    name: 'PerformerAlreadyWish',
    type: 'error',
  },
  {
    inputs: [],
    name: 'PerformerIsNotWishingDoThis',
    type: 'error',
  },
  {
    inputs: [],
    name: 'TaskIsNotInProgress',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'enum Status',
        name: 'status',
        type: 'uint8',
      },
    ],
    name: 'TaskIsNotOnReview',
    type: 'error',
  },
  {
    inputs: [],
    name: 'TaskIsStillInProgress',
    type: 'error',
  },
  {
    inputs: [],
    name: 'TaskNotPendingPerformer',
    type: 'error',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'employerAddr',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'message',
        type: 'string',
      },
    ],
    name: 'RenounceTaskByPerformer',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'message',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'additionalLink',
        type: 'string',
      },
    ],
    name: 'RequestForChanges',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'performer',
        type: 'address',
      },
    ],
    name: 'assignPerformer',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'assignRequest',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'completeTask',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'employer',
    outputs: [
      {
        internalType: 'address payable',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'rejectTask',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'message',
        type: 'string',
      },
    ],
    name: 'renounceTaskWithMessage',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'message',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'additional_link',
        type: 'string',
      },
    ],
    name: 'requestChanges',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'revokeAssignRequest',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'selected_performer',
    outputs: [
      {
        internalType: 'address payable',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'sendTaskToReview',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'status',
    outputs: [
      {
        internalType: 'enum Status',
        name: '',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'task_cost',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'task_gh',
    outputs: [
      {
        internalType: 'string',
        name: 'repo',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'owner',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: 'issue_number',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'wishing_performers',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    stateMutability: 'payable',
    type: 'receive',
  },
] as const;

export const bytecodeProjectTask =
  '0x60806040526000600560006101000a81548160ff021916908360068111156200002d576200002c62000101565b5b021790555060405162001f8e38038062001f8e8339818101604052810190620000579190620002fe565b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060405180606001604052808481526020018381526020018281525060026000820151816000019081620000cb9190620005d9565b506020820151816001019081620000e39190620005d9565b506040820151816002015590505034600181905550505050620006c0565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b62000199826200014e565b810181811067ffffffffffffffff82111715620001bb57620001ba6200015f565b5b80604052505050565b6000620001d062000130565b9050620001de82826200018e565b919050565b600067ffffffffffffffff8211156200020157620002006200015f565b5b6200020c826200014e565b9050602081019050919050565b60005b83811015620002395780820151818401526020810190506200021c565b60008484015250505050565b60006200025c6200025684620001e3565b620001c4565b9050828152602081018484840111156200027b576200027a62000149565b5b6200028884828562000219565b509392505050565b600082601f830112620002a857620002a762000144565b5b8151620002ba84826020860162000245565b91505092915050565b6000819050919050565b620002d881620002c3565b8114620002e457600080fd5b50565b600081519050620002f881620002cd565b92915050565b6000806000606084860312156200031a57620003196200013a565b5b600084015167ffffffffffffffff8111156200033b576200033a6200013f565b5b620003498682870162000290565b935050602084015167ffffffffffffffff8111156200036d576200036c6200013f565b5b6200037b8682870162000290565b92505060406200038e86828701620002e7565b9150509250925092565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620003eb57607f821691505b602082108103620004015762000400620003a3565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026200046b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826200042c565b6200047786836200042c565b95508019841693508086168417925050509392505050565b6000819050919050565b6000620004ba620004b4620004ae84620002c3565b6200048f565b620002c3565b9050919050565b6000819050919050565b620004d68362000499565b620004ee620004e582620004c1565b84845462000439565b825550505050565b600090565b62000505620004f6565b62000512818484620004cb565b505050565b5b818110156200053a576200052e600082620004fb565b60018101905062000518565b5050565b601f8211156200058957620005538162000407565b6200055e846200041c565b810160208510156200056e578190505b620005866200057d856200041c565b83018262000517565b50505b505050565b600082821c905092915050565b6000620005ae600019846008026200058e565b1980831691505092915050565b6000620005c983836200059b565b9150826002028217905092915050565b620005e48262000398565b67ffffffffffffffff8111156200060057620005ff6200015f565b5b6200060c8254620003d2565b620006198282856200053e565b600060209050601f8311600181146200065157600084156200063c578287015190505b620006488582620005bb565b865550620006b8565b601f198416620006618662000407565b60005b828110156200068b5784890151825560018201915060208501945060208101905062000664565b86831015620006ab5784890151620006a7601f8916826200059b565b8355505b6001600288020188555050505b505050505050565b6118be80620006d06000396000f3fe6080604052600436106100e05760003560e01c806354bf4bc31161007f578063a26616aa11610059578063a26616aa1461024c578063ae1ee53314610275578063ae200e79146102a0578063e7793e37146102cb576100ff565b806354bf4bc3146101df57806358959ba1146101f65780638b1724c71461021f576100ff565b806333f17420116100bb57806333f174201461015d57806343bb8db5146101885780634a45110b1461019f5780634bf576cc146101b6576100ff565b80626a2590146101045780631ff705221461011b578063200d2ed214610132576100ff565b366100ff5734600160008282546100f79190611288565b925050819055005b600080fd5b34801561011057600080fd5b50610119610308565b005b34801561012757600080fd5b506101306104de565b005b34801561013e57600080fd5b506101476105ff565b6040516101549190611333565b60405180910390f35b34801561016957600080fd5b50610172610612565b60405161017f919061138f565b60405180910390f35b34801561019457600080fd5b5061019d610638565b005b3480156101ab57600080fd5b506101b46107fb565b005b3480156101c257600080fd5b506101dd60048036038101906101d891906113fc565b61095e565b005b3480156101eb57600080fd5b506101f4610bc7565b005b34801561020257600080fd5b5061021d6004803603810190610218919061156f565b610d9d565b005b34801561022b57600080fd5b50610234610f35565b60405161024393929190611675565b60405180910390f35b34801561025857600080fd5b50610273600480360381019061026e91906116ba565b61105d565b005b34801561028157600080fd5b5061028a611205565b6040516102979190611703565b60405180910390f35b3480156102ac57600080fd5b506102b561120b565b6040516102c2919061138f565b60405180910390f35b3480156102d757600080fd5b506102f260048036038101906102ed91906113fc565b61122f565b6040516102ff9190611739565b60405180910390f35b6000600681111561031c5761031b6112bc565b5b600560009054906101000a900460ff16600681111561033e5761033d6112bc565b5b14610375576040517fe743c7dc00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16036103fa576040517fd9c8693100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60001515600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151503610484576040517f1c98f22100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550565b600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610565576040517f8ce9aa0b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60016006811115610579576105786112bc565b5b600560009054906101000a900460ff16600681111561059b5761059a6112bc565b5b146105d2576040517f4b372cd100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6002600560006101000a81548160ff021916908360068111156105f8576105f76112bc565b5b0217905550565b600560009054906101000a900460ff1681565b600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146106bd576040517fb865db7000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600260068111156106d1576106d06112bc565b5b600560009054906101000a900460ff1660068111156106f3576106f26112bc565b5b1461072a576040517fc015b61f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6004600560006101000a81548160ff021916908360068111156107505761074f6112bc565b5b0217905550600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc6001549081150290604051600060405180830381858888f193505050501580156107bf573d6000803e3d6000fd5b50600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16ff5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610880576040517fb865db7000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006006811115610894576108936112bc565b5b600560009054906101000a900460ff1660068111156108b6576108b56112bc565b5b146108ed576040517f40baa63500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60036006811115610901576109006112bc565b5b600560009054906101000a900460ff166006811115610923576109226112bc565b5b505060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16ff5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146109e3576040517fb865db7000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600060068111156109f7576109f66112bc565b5b600560009054906101000a900460ff166006811115610a1957610a186112bc565b5b14610a50576040517fe743c7dc00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610ad5576040517fd9c8693100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600660008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610b58576040517f1c98f22100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001600560006101000a81548160ff02191690836006811115610b7e57610b7d6112bc565b5b021790555080600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60006006811115610bdb57610bda6112bc565b5b600560009054906101000a900460ff166006811115610bfd57610bfc6112bc565b5b14610c34576040517fe743c7dc00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1603610cb9576040517fd9c8693100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60011515600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151503610d43576040517f7faa57d400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610e22576040517fb865db7000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60026006811115610e3657610e356112bc565b5b600560009054906101000a900460ff166006811115610e5857610e576112bc565b5b14610ea957600560009054906101000a900460ff166040517f973ba226000000000000000000000000000000000000000000000000000000008152600401610ea09190611333565b60405180910390fd5b6006600560006101000a81548160ff02191690836006811115610ecf57610ece6112bc565b5b02179055507f1820008467fc0cf42493c0dc4ebb74b438ff75cd0e7365e13dae3b6a030aca35600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168383604051610f29939291906117b3565b60405180910390a15050565b6002806000018054610f4690611827565b80601f0160208091040260200160405190810160405280929190818152602001828054610f7290611827565b8015610fbf5780601f10610f9457610100808354040283529160200191610fbf565b820191906000526020600020905b815481529060010190602001808311610fa257829003601f168201915b505050505090806001018054610fd490611827565b80601f016020809104026020016040519081016040528092919081815260200182805461100090611827565b801561104d5780601f106110225761010080835404028352916020019161104d565b820191906000526020600020905b81548152906001019060200180831161103057829003601f168201915b5050505050908060020154905083565b600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146110e4576040517f8ce9aa0b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000600560006101000a81548160ff0219169083600681111561110a576111096112bc565b5b02179055506000600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055507f8e54b264bbfdf61e4ff7065574dac5aab1e0cd582ba96ddb097d32ce0e97eae260008054906101000a900473ffffffffffffffffffffffffffffffffffffffff16826040516111fa929190611858565b60405180910390a150565b60015481565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60066020528060005260406000206000915054906101000a900460ff1681565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006112938261124f565b915061129e8361124f565b92508282019050808211156112b6576112b5611259565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600781106112fc576112fb6112bc565b5b50565b600081905061130d826112eb565b919050565b600061131d826112ff565b9050919050565b61132d81611312565b82525050565b60006020820190506113486000830184611324565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006113798261134e565b9050919050565b6113898161136e565b82525050565b60006020820190506113a46000830184611380565b92915050565b6000604051905090565b600080fd5b600080fd5b60006113c98261134e565b9050919050565b6113d9816113be565b81146113e457600080fd5b50565b6000813590506113f6816113d0565b92915050565b600060208284031215611412576114116113b4565b5b6000611420848285016113e7565b91505092915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61147c82611433565b810181811067ffffffffffffffff8211171561149b5761149a611444565b5b80604052505050565b60006114ae6113aa565b90506114ba8282611473565b919050565b600067ffffffffffffffff8211156114da576114d9611444565b5b6114e382611433565b9050602081019050919050565b82818337600083830152505050565b600061151261150d846114bf565b6114a4565b90508281526020810184848401111561152e5761152d61142e565b5b6115398482856114f0565b509392505050565b600082601f83011261155657611555611429565b5b81356115668482602086016114ff565b91505092915050565b60008060408385031215611586576115856113b4565b5b600083013567ffffffffffffffff8111156115a4576115a36113b9565b5b6115b085828601611541565b925050602083013567ffffffffffffffff8111156115d1576115d06113b9565b5b6115dd85828601611541565b9150509250929050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611621578082015181840152602081019050611606565b60008484015250505050565b6000611638826115e7565b61164281856115f2565b9350611652818560208601611603565b61165b81611433565b840191505092915050565b61166f8161124f565b82525050565b6000606082019050818103600083015261168f818661162d565b905081810360208301526116a3818561162d565b90506116b26040830184611666565b949350505050565b6000602082840312156116d0576116cf6113b4565b5b600082013567ffffffffffffffff8111156116ee576116ed6113b9565b5b6116fa84828501611541565b91505092915050565b60006020820190506117186000830184611666565b92915050565b60008115159050919050565b6117338161171e565b82525050565b600060208201905061174e600083018461172a565b92915050565b6000819050919050565b600061177961177461176f8461134e565b611754565b61134e565b9050919050565b600061178b8261175e565b9050919050565b600061179d82611780565b9050919050565b6117ad81611792565b82525050565b60006060820190506117c860008301866117a4565b81810360208301526117da818561162d565b905081810360408301526117ee818461162d565b9050949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061183f57607f821691505b602082108103611852576118516117f8565b5b50919050565b600060408201905061186d60008301856117a4565b818103602083015261187f818461162d565b9050939250505056fea26469706673582212206e8cbb2aa016ba53e3e0618348ebfcba1c660443857be26221bce27391dcc35d64736f6c63430008110033';
