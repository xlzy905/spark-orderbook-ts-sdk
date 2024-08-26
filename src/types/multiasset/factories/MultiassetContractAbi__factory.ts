/* Autogenerated file. Do not edit manually. */

/* tslint:disable */
/* eslint-disable */

/*
  Fuels version: 0.93.0
  Forc version: 0.62.0
  Fuel-Core version: 0.31.0
*/

import { Interface, Contract, ContractFactory } from "fuels";
import type { Provider, Account, AbstractAddress, BytesLike, DeployContractOptions, StorageSlot, DeployContractResult } from "fuels";
import type { MultiassetContractAbi, MultiassetContractAbiInterface } from "../MultiassetContractAbi";

const _abi = {
  "encoding": "1",
  "types": [
    {
      "typeId": 0,
      "type": "()",
      "components": [],
      "typeParameters": null
    },
    {
      "typeId": 1,
      "type": "b256",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 2,
      "type": "enum AccessError",
      "components": [
        {
          "name": "NotOwner",
          "type": 0,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 3,
      "type": "enum AssetError",
      "components": [
        {
          "name": "AssetNotFound",
          "type": 12,
          "typeArguments": null
        },
        {
          "name": "AssetAlreadyExists",
          "type": 12,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 4,
      "type": "enum Identity",
      "components": [
        {
          "name": "Address",
          "type": 11,
          "typeArguments": null
        },
        {
          "name": "ContractId",
          "type": 16,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 5,
      "type": "enum InitializationError",
      "components": [
        {
          "name": "CannotReinitialized",
          "type": 0,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 6,
      "type": "enum Option",
      "components": [
        {
          "name": "None",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "Some",
          "type": 9,
          "typeArguments": null
        }
      ],
      "typeParameters": [
        9
      ]
    },
    {
      "typeId": 7,
      "type": "enum State",
      "components": [
        {
          "name": "Uninitialized",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "Initialized",
          "type": 4,
          "typeArguments": null
        },
        {
          "name": "Revoked",
          "type": 0,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 8,
      "type": "enum ValueError",
      "components": [
        {
          "name": "ZeroStringLength",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "ZeroValue",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "BadIntValue",
          "type": 22,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 9,
      "type": "generic T",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 10,
      "type": "raw untyped ptr",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 11,
      "type": "struct Address",
      "components": [
        {
          "name": "bits",
          "type": 1,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 12,
      "type": "struct AssetId",
      "components": [
        {
          "name": "bits",
          "type": 1,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 13,
      "type": "struct AssetMinted",
      "components": [
        {
          "name": "recipient",
          "type": 4,
          "typeArguments": null
        },
        {
          "name": "asset",
          "type": 12,
          "typeArguments": null
        },
        {
          "name": "amount",
          "type": 21,
          "typeArguments": null
        },
        {
          "name": "minter",
          "type": 4,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 14,
      "type": "struct AssetNew",
      "components": [
        {
          "name": "asset",
          "type": 12,
          "typeArguments": null
        },
        {
          "name": "name",
          "type": 20,
          "typeArguments": null
        },
        {
          "name": "symbol",
          "type": 20,
          "typeArguments": null
        },
        {
          "name": "decimals",
          "type": 22,
          "typeArguments": null
        },
        {
          "name": "creator",
          "type": 4,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 15,
      "type": "struct Bytes",
      "components": [
        {
          "name": "buf",
          "type": 19,
          "typeArguments": null
        },
        {
          "name": "len",
          "type": 21,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 16,
      "type": "struct ContractId",
      "components": [
        {
          "name": "bits",
          "type": 1,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 17,
      "type": "struct OwnershipSet",
      "components": [
        {
          "name": "new_owner",
          "type": 4,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 18,
      "type": "struct OwnershipTransferred",
      "components": [
        {
          "name": "new_owner",
          "type": 4,
          "typeArguments": null
        },
        {
          "name": "previous_owner",
          "type": 4,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 19,
      "type": "struct RawBytes",
      "components": [
        {
          "name": "ptr",
          "type": 10,
          "typeArguments": null
        },
        {
          "name": "cap",
          "type": 21,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 20,
      "type": "struct String",
      "components": [
        {
          "name": "bytes",
          "type": 15,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 21,
      "type": "u64",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 22,
      "type": "u8",
      "components": null,
      "typeParameters": null
    }
  ],
  "functions": [
    {
      "inputs": [
        {
          "name": "asset",
          "type": 12,
          "typeArguments": null
        }
      ],
      "name": "decimals",
      "output": {
        "name": "",
        "type": 6,
        "typeArguments": [
          {
            "name": "",
            "type": 22,
            "typeArguments": null
          }
        ]
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "asset",
          "type": 12,
          "typeArguments": null
        }
      ],
      "name": "name",
      "output": {
        "name": "",
        "type": 6,
        "typeArguments": [
          {
            "name": "",
            "type": 20,
            "typeArguments": null
          }
        ]
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "asset",
          "type": 12,
          "typeArguments": null
        }
      ],
      "name": "symbol",
      "output": {
        "name": "",
        "type": 6,
        "typeArguments": [
          {
            "name": "",
            "type": 20,
            "typeArguments": null
          }
        ]
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [],
      "name": "total_assets",
      "output": {
        "name": "",
        "type": 21,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "asset",
          "type": 12,
          "typeArguments": null
        }
      ],
      "name": "total_supply",
      "output": {
        "name": "",
        "type": 6,
        "typeArguments": [
          {
            "name": "",
            "type": 21,
            "typeArguments": null
          }
        ]
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [],
      "name": "owner",
      "output": {
        "name": "",
        "type": 7,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "symbol",
          "type": 20,
          "typeArguments": null
        }
      ],
      "name": "asset_get",
      "output": {
        "name": "",
        "type": 6,
        "typeArguments": [
          {
            "name": "",
            "type": 12,
            "typeArguments": null
          }
        ]
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "name",
          "type": 20,
          "typeArguments": null
        },
        {
          "name": "symbol",
          "type": 20,
          "typeArguments": null
        },
        {
          "name": "decimals",
          "type": 22,
          "typeArguments": null
        }
      ],
      "name": "asset_new",
      "output": {
        "name": "",
        "type": 12,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "new_owner",
          "type": 4,
          "typeArguments": null
        }
      ],
      "name": "initialize_ownership",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "recipient",
          "type": 4,
          "typeArguments": null
        },
        {
          "name": "asset",
          "type": 12,
          "typeArguments": null
        },
        {
          "name": "amount",
          "type": 21,
          "typeArguments": null
        }
      ],
      "name": "mint",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "new_owner",
          "type": 4,
          "typeArguments": null
        }
      ],
      "name": "transfer_ownership",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    }
  ],
  "loggedTypes": [
    {
      "logId": "4038555509566971562",
      "loggedType": {
        "name": "",
        "type": 8,
        "typeArguments": []
      }
    },
    {
      "logId": "16169998749359270814",
      "loggedType": {
        "name": "",
        "type": 3,
        "typeArguments": []
      }
    },
    {
      "logId": "9067288324896016161",
      "loggedType": {
        "name": "",
        "type": 14,
        "typeArguments": []
      }
    },
    {
      "logId": "2161305517876418151",
      "loggedType": {
        "name": "",
        "type": 5,
        "typeArguments": []
      }
    },
    {
      "logId": "16280289466020123285",
      "loggedType": {
        "name": "",
        "type": 17,
        "typeArguments": []
      }
    },
    {
      "logId": "12361617830368813996",
      "loggedType": {
        "name": "",
        "type": 13,
        "typeArguments": []
      }
    },
    {
      "logId": "4571204900286667806",
      "loggedType": {
        "name": "",
        "type": 2,
        "typeArguments": []
      }
    },
    {
      "logId": "12970362301975156672",
      "loggedType": {
        "name": "",
        "type": 18,
        "typeArguments": []
      }
    }
  ],
  "messagesTypes": [],
  "configurables": []
};

const _storageSlots: StorageSlot[] = [
  {
    "key": "93b67ee4f0f76b71456fb4385c86aec15689e1ce5f6f6ac63b71716afa052998",
    "value": "0000000000000000000000000000000000000000000000000000000000000000"
  }
];

export const MultiassetContractAbi__factory = {
  abi: _abi,

  storageSlots: _storageSlots,

  createInterface(): MultiassetContractAbiInterface {
    return new Interface(_abi) as unknown as MultiassetContractAbiInterface
  },

  connect(
    id: string | AbstractAddress,
    accountOrProvider: Account | Provider
  ): MultiassetContractAbi {
    return new Contract(id, _abi, accountOrProvider) as unknown as MultiassetContractAbi
  },

  async deployContract(
    bytecode: BytesLike,
    wallet: Account,
    options: DeployContractOptions = {}
  ): Promise<DeployContractResult<MultiassetContractAbi>> {
    const factory = new ContractFactory(bytecode, _abi, wallet);

    return factory.deployContract<MultiassetContractAbi>({
      storageSlots: _storageSlots,
      ...options,
    });
  },
}
