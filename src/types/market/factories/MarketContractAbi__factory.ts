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
import type { MarketContractAbi, MarketContractAbiInterface } from "../MarketContractAbi";

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
      "type": "(_, _)",
      "components": [
        {
          "name": "__tuple_element",
          "type": 38,
          "typeArguments": null
        },
        {
          "name": "__tuple_element",
          "type": 38,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 2,
      "type": "(_, _)",
      "components": [
        {
          "name": "__tuple_element",
          "type": 4,
          "typeArguments": null
        },
        {
          "name": "__tuple_element",
          "type": 4,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 3,
      "type": "(_, _, _, _, _, _, _)",
      "components": [
        {
          "name": "__tuple_element",
          "type": 20,
          "typeArguments": null
        },
        {
          "name": "__tuple_element",
          "type": 21,
          "typeArguments": null
        },
        {
          "name": "__tuple_element",
          "type": 37,
          "typeArguments": null
        },
        {
          "name": "__tuple_element",
          "type": 21,
          "typeArguments": null
        },
        {
          "name": "__tuple_element",
          "type": 37,
          "typeArguments": null
        },
        {
          "name": "__tuple_element",
          "type": 37,
          "typeArguments": null
        },
        {
          "name": "__tuple_element",
          "type": 21,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 4,
      "type": "b256",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 5,
      "type": "enum AccountError",
      "components": [
        {
          "name": "InsufficientBalance",
          "type": 1,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 6,
      "type": "enum AssetError",
      "components": [
        {
          "name": "InvalidAsset",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "InvalidFeeAsset",
          "type": 0,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 7,
      "type": "enum AssetType",
      "components": [
        {
          "name": "Base",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "Quote",
          "type": 0,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 8,
      "type": "enum AuthError",
      "components": [
        {
          "name": "Unauthorized",
          "type": 0,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 9,
      "type": "enum Identity",
      "components": [
        {
          "name": "Address",
          "type": 20,
          "typeArguments": null
        },
        {
          "name": "ContractId",
          "type": 24,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 10,
      "type": "enum LimitType",
      "components": [
        {
          "name": "IOC",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "FOK",
          "type": 0,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 11,
      "type": "enum MatchError",
      "components": [
        {
          "name": "CantMatch",
          "type": 2,
          "typeArguments": null
        },
        {
          "name": "CantMatchMany",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "CantFulfillMany",
          "type": 0,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 12,
      "type": "enum Option",
      "components": [
        {
          "name": "None",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "Some",
          "type": 17,
          "typeArguments": null
        }
      ],
      "typeParameters": [
        17
      ]
    },
    {
      "typeId": 13,
      "type": "enum OrderChangeType",
      "components": [
        {
          "name": "OrderOpened",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "OrderCancelled",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "OrderMatched",
          "type": 0,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 14,
      "type": "enum OrderError",
      "components": [
        {
          "name": "OrderNotFound",
          "type": 4,
          "typeArguments": null
        },
        {
          "name": "PriceTooSmall",
          "type": 1,
          "typeArguments": null
        },
        {
          "name": "ZeroOrderAmount",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "ZeroLockAmount",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "FailedToRemove",
          "type": 4,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 15,
      "type": "enum OrderType",
      "components": [
        {
          "name": "Buy",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "Sell",
          "type": 0,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 16,
      "type": "enum ValueError",
      "components": [
        {
          "name": "InvalidAmount",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "InvalidSlippage",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "InvalidArrayLength",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "InvalidFeeAmount",
          "type": 1,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 17,
      "type": "generic T",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 18,
      "type": "raw untyped ptr",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 19,
      "type": "struct Account",
      "components": [
        {
          "name": "liquid",
          "type": 22,
          "typeArguments": null
        },
        {
          "name": "locked",
          "type": 22,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 20,
      "type": "struct Address",
      "components": [
        {
          "name": "bits",
          "type": 4,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 21,
      "type": "struct AssetId",
      "components": [
        {
          "name": "bits",
          "type": 4,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 22,
      "type": "struct Balance",
      "components": [
        {
          "name": "base",
          "type": 38,
          "typeArguments": null
        },
        {
          "name": "quote",
          "type": 38,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 23,
      "type": "struct CancelOrderEvent",
      "components": [
        {
          "name": "order_id",
          "type": 4,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 24,
      "type": "struct ContractId",
      "components": [
        {
          "name": "bits",
          "type": 4,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 25,
      "type": "struct DepositEvent",
      "components": [
        {
          "name": "amount",
          "type": 38,
          "typeArguments": null
        },
        {
          "name": "asset",
          "type": 21,
          "typeArguments": null
        },
        {
          "name": "user",
          "type": 9,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 26,
      "type": "struct MatchOrderEvent",
      "components": [
        {
          "name": "order_id",
          "type": 4,
          "typeArguments": null
        },
        {
          "name": "asset",
          "type": 21,
          "typeArguments": null
        },
        {
          "name": "order_matcher",
          "type": 9,
          "typeArguments": null
        },
        {
          "name": "owner",
          "type": 9,
          "typeArguments": null
        },
        {
          "name": "counterparty",
          "type": 9,
          "typeArguments": null
        },
        {
          "name": "match_size",
          "type": 38,
          "typeArguments": null
        },
        {
          "name": "match_price",
          "type": 38,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 27,
      "type": "struct OpenOrderEvent",
      "components": [
        {
          "name": "amount",
          "type": 38,
          "typeArguments": null
        },
        {
          "name": "asset",
          "type": 21,
          "typeArguments": null
        },
        {
          "name": "asset_type",
          "type": 7,
          "typeArguments": null
        },
        {
          "name": "order_type",
          "type": 15,
          "typeArguments": null
        },
        {
          "name": "order_id",
          "type": 4,
          "typeArguments": null
        },
        {
          "name": "price",
          "type": 38,
          "typeArguments": null
        },
        {
          "name": "user",
          "type": 9,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 28,
      "type": "struct Order",
      "components": [
        {
          "name": "amount",
          "type": 38,
          "typeArguments": null
        },
        {
          "name": "asset_type",
          "type": 7,
          "typeArguments": null
        },
        {
          "name": "order_type",
          "type": 15,
          "typeArguments": null
        },
        {
          "name": "owner",
          "type": 9,
          "typeArguments": null
        },
        {
          "name": "price",
          "type": 38,
          "typeArguments": null
        },
        {
          "name": "block_height",
          "type": 37,
          "typeArguments": null
        },
        {
          "name": "matcher_fee",
          "type": 37,
          "typeArguments": null
        },
        {
          "name": "protocol_fee",
          "type": 38,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 29,
      "type": "struct OrderChangeInfo",
      "components": [
        {
          "name": "change_type",
          "type": 13,
          "typeArguments": null
        },
        {
          "name": "block_height",
          "type": 37,
          "typeArguments": null
        },
        {
          "name": "sender",
          "type": 9,
          "typeArguments": null
        },
        {
          "name": "tx_id",
          "type": 4,
          "typeArguments": null
        },
        {
          "name": "amount_before",
          "type": 38,
          "typeArguments": null
        },
        {
          "name": "amount_after",
          "type": 38,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 30,
      "type": "struct RawVec",
      "components": [
        {
          "name": "ptr",
          "type": 18,
          "typeArguments": null
        },
        {
          "name": "cap",
          "type": 38,
          "typeArguments": null
        }
      ],
      "typeParameters": [
        17
      ]
    },
    {
      "typeId": 31,
      "type": "struct SetMatcherRewardEvent",
      "components": [
        {
          "name": "amount",
          "type": 37,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 32,
      "type": "struct SetProtocolFeeEvent",
      "components": [
        {
          "name": "amount",
          "type": 37,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 33,
      "type": "struct TradeOrderEvent",
      "components": [
        {
          "name": "base_sell_order_id",
          "type": 4,
          "typeArguments": null
        },
        {
          "name": "base_buy_order_id",
          "type": 4,
          "typeArguments": null
        },
        {
          "name": "order_matcher",
          "type": 9,
          "typeArguments": null
        },
        {
          "name": "trade_size",
          "type": 38,
          "typeArguments": null
        },
        {
          "name": "trade_price",
          "type": 38,
          "typeArguments": null
        },
        {
          "name": "block_height",
          "type": 37,
          "typeArguments": null
        },
        {
          "name": "tx_id",
          "type": 4,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 34,
      "type": "struct Vec",
      "components": [
        {
          "name": "buf",
          "type": 30,
          "typeArguments": [
            {
              "name": "",
              "type": 17,
              "typeArguments": null
            }
          ]
        },
        {
          "name": "len",
          "type": 38,
          "typeArguments": null
        }
      ],
      "typeParameters": [
        17
      ]
    },
    {
      "typeId": 35,
      "type": "struct WithdrawEvent",
      "components": [
        {
          "name": "amount",
          "type": 38,
          "typeArguments": null
        },
        {
          "name": "asset",
          "type": 21,
          "typeArguments": null
        },
        {
          "name": "user",
          "type": 9,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 36,
      "type": "struct WithdrawProtocolFeeEvent",
      "components": [
        {
          "name": "amount",
          "type": 38,
          "typeArguments": null
        },
        {
          "name": "to",
          "type": 9,
          "typeArguments": null
        },
        {
          "name": "owner",
          "type": 9,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 37,
      "type": "u32",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 38,
      "type": "u64",
      "components": null,
      "typeParameters": null
    }
  ],
  "functions": [
    {
      "inputs": [
        {
          "name": "order_id",
          "type": 4,
          "typeArguments": null
        }
      ],
      "name": "cancel_order",
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
      "inputs": [],
      "name": "deposit",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "payable",
          "arguments": []
        },
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
          "name": "amount",
          "type": 38,
          "typeArguments": null
        },
        {
          "name": "asset_type",
          "type": 7,
          "typeArguments": null
        },
        {
          "name": "order_type",
          "type": 15,
          "typeArguments": null
        },
        {
          "name": "limit_type",
          "type": 10,
          "typeArguments": null
        },
        {
          "name": "price",
          "type": 38,
          "typeArguments": null
        },
        {
          "name": "slippage",
          "type": 38,
          "typeArguments": null
        },
        {
          "name": "orders",
          "type": 34,
          "typeArguments": [
            {
              "name": "",
              "type": 4,
              "typeArguments": null
            }
          ]
        }
      ],
      "name": "fulfill_order_many",
      "output": {
        "name": "",
        "type": 4,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "payable",
          "arguments": []
        },
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
          "name": "orders",
          "type": 34,
          "typeArguments": [
            {
              "name": "",
              "type": 4,
              "typeArguments": null
            }
          ]
        }
      ],
      "name": "match_order_many",
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
          "name": "order0_id",
          "type": 4,
          "typeArguments": null
        },
        {
          "name": "order1_id",
          "type": 4,
          "typeArguments": null
        }
      ],
      "name": "match_order_pair",
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
          "name": "amount",
          "type": 38,
          "typeArguments": null
        },
        {
          "name": "asset_type",
          "type": 7,
          "typeArguments": null
        },
        {
          "name": "order_type",
          "type": 15,
          "typeArguments": null
        },
        {
          "name": "price",
          "type": 38,
          "typeArguments": null
        }
      ],
      "name": "open_order",
      "output": {
        "name": "",
        "type": 4,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "payable",
          "arguments": []
        },
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
          "name": "amount",
          "type": 37,
          "typeArguments": null
        }
      ],
      "name": "set_matcher_fee",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "amount",
          "type": 37,
          "typeArguments": null
        }
      ],
      "name": "set_protocol_fee",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "amount",
          "type": 38,
          "typeArguments": null
        },
        {
          "name": "asset_type",
          "type": 7,
          "typeArguments": null
        }
      ],
      "name": "withdraw",
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
          "name": "to",
          "type": 9,
          "typeArguments": null
        }
      ],
      "name": "withdraw_protocol_fee",
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
          "name": "user",
          "type": 9,
          "typeArguments": null
        }
      ],
      "name": "account",
      "output": {
        "name": "",
        "type": 12,
        "typeArguments": [
          {
            "name": "",
            "type": 19,
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
      "name": "config",
      "output": {
        "name": "",
        "type": 3,
        "typeArguments": null
      },
      "attributes": null
    },
    {
      "inputs": [],
      "name": "matcher_fee",
      "output": {
        "name": "",
        "type": 37,
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
          "name": "order",
          "type": 4,
          "typeArguments": null
        }
      ],
      "name": "order",
      "output": {
        "name": "",
        "type": 12,
        "typeArguments": [
          {
            "name": "",
            "type": 28,
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
          "name": "order_id",
          "type": 4,
          "typeArguments": null
        }
      ],
      "name": "order_change_info",
      "output": {
        "name": "",
        "type": 34,
        "typeArguments": [
          {
            "name": "",
            "type": 29,
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
          "name": "asset_type",
          "type": 7,
          "typeArguments": null
        },
        {
          "name": "order_type",
          "type": 15,
          "typeArguments": null
        },
        {
          "name": "owner",
          "type": 9,
          "typeArguments": null
        },
        {
          "name": "price",
          "type": 38,
          "typeArguments": null
        },
        {
          "name": "block_height",
          "type": 37,
          "typeArguments": null
        }
      ],
      "name": "order_id",
      "output": {
        "name": "",
        "type": 4,
        "typeArguments": null
      },
      "attributes": null
    },
    {
      "inputs": [],
      "name": "protocol_fee",
      "output": {
        "name": "",
        "type": 37,
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
          "name": "amount",
          "type": 38,
          "typeArguments": null
        },
        {
          "name": "asset_type",
          "type": 7,
          "typeArguments": null
        }
      ],
      "name": "protocol_fee_amount",
      "output": {
        "name": "",
        "type": 38,
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
      "inputs": [],
      "name": "total_protocol_fee",
      "output": {
        "name": "",
        "type": 38,
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
          "name": "user",
          "type": 9,
          "typeArguments": null
        }
      ],
      "name": "user_orders",
      "output": {
        "name": "",
        "type": 34,
        "typeArguments": [
          {
            "name": "",
            "type": 4,
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
    }
  ],
  "loggedTypes": [
    {
      "logId": "999626799421532101",
      "loggedType": {
        "name": "",
        "type": 14,
        "typeArguments": []
      }
    },
    {
      "logId": "487470194140633944",
      "loggedType": {
        "name": "",
        "type": 8,
        "typeArguments": []
      }
    },
    {
      "logId": "15329379498675066312",
      "loggedType": {
        "name": "",
        "type": 5,
        "typeArguments": []
      }
    },
    {
      "logId": "14676650066558707344",
      "loggedType": {
        "name": "",
        "type": 23,
        "typeArguments": []
      }
    },
    {
      "logId": "4038555509566971562",
      "loggedType": {
        "name": "",
        "type": 16,
        "typeArguments": []
      }
    },
    {
      "logId": "16169998749359270814",
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": "12590297951544646752",
      "loggedType": {
        "name": "",
        "type": 25,
        "typeArguments": []
      }
    },
    {
      "logId": "7812135309850120461",
      "loggedType": {
        "name": "",
        "type": 27,
        "typeArguments": []
      }
    },
    {
      "logId": "2271581833574730066",
      "loggedType": {
        "name": "",
        "type": 26,
        "typeArguments": []
      }
    },
    {
      "logId": "18305104039093136274",
      "loggedType": {
        "name": "",
        "type": 33,
        "typeArguments": []
      }
    },
    {
      "logId": "15838754841496526215",
      "loggedType": {
        "name": "",
        "type": 11,
        "typeArguments": []
      }
    },
    {
      "logId": "649664855397936830",
      "loggedType": {
        "name": "",
        "type": 31,
        "typeArguments": []
      }
    },
    {
      "logId": "10772010129570911307",
      "loggedType": {
        "name": "",
        "type": 32,
        "typeArguments": []
      }
    },
    {
      "logId": "10918704871079408520",
      "loggedType": {
        "name": "",
        "type": 35,
        "typeArguments": []
      }
    },
    {
      "logId": "10165625215314906042",
      "loggedType": {
        "name": "",
        "type": 36,
        "typeArguments": []
      }
    }
  ],
  "messagesTypes": [],
  "configurables": [
    {
      "name": "BASE_ASSET",
      "configurableType": {
        "name": "",
        "type": 21,
        "typeArguments": []
      },
      "offset": 86752
    },
    {
      "name": "BASE_ASSET_DECIMALS",
      "configurableType": {
        "name": "",
        "type": 37,
        "typeArguments": null
      },
      "offset": 86784
    },
    {
      "name": "OWNER",
      "configurableType": {
        "name": "",
        "type": 20,
        "typeArguments": []
      },
      "offset": 86840
    },
    {
      "name": "PRICE_DECIMALS",
      "configurableType": {
        "name": "",
        "type": 37,
        "typeArguments": null
      },
      "offset": 86872
    },
    {
      "name": "QUOTE_ASSET",
      "configurableType": {
        "name": "",
        "type": 21,
        "typeArguments": []
      },
      "offset": 86880
    },
    {
      "name": "QUOTE_ASSET_DECIMALS",
      "configurableType": {
        "name": "",
        "type": 37,
        "typeArguments": null
      },
      "offset": 86912
    },
    {
      "name": "FUEL_ASSET",
      "configurableType": {
        "name": "",
        "type": 21,
        "typeArguments": []
      },
      "offset": 86808
    },
    {
      "name": "ETH_BASE_PRICE",
      "configurableType": {
        "name": "",
        "type": 38,
        "typeArguments": null
      },
      "offset": 86792
    },
    {
      "name": "ETH_QUOTE_PRICE",
      "configurableType": {
        "name": "",
        "type": 38,
        "typeArguments": null
      },
      "offset": 86800
    }
  ]
};

const _storageSlots: StorageSlot[] = [
  {
    "key": "3493c96d5901ca6a92009e6e8732dee2d274b75731fc3355e9888ea296e15c0c",
    "value": "0000000000000000000000000000000000000000000000000000000000000000"
  },
  {
    "key": "7dbef6dc4e365382940f04cc782498fa1eb5d35829c52c2ddeaa18df059c4910",
    "value": "000000000000000f000000000000000000000000000000000000000000000000"
  },
  {
    "key": "ed696908088d1de73a9af20eb7163b692ba0b94d25b1085650252370ae38a1e5",
    "value": "0000000000000000000000000000000000000000000000000000000000000000"
  }
];

export const MarketContractAbi__factory = {
  abi: _abi,

  storageSlots: _storageSlots,

  createInterface(): MarketContractAbiInterface {
    return new Interface(_abi) as unknown as MarketContractAbiInterface
  },

  connect(
    id: string | AbstractAddress,
    accountOrProvider: Account | Provider
  ): MarketContractAbi {
    return new Contract(id, _abi, accountOrProvider) as unknown as MarketContractAbi
  },

  async deployContract(
    bytecode: BytesLike,
    wallet: Account,
    options: DeployContractOptions = {}
  ): Promise<DeployContractResult<MarketContractAbi>> {
    const factory = new ContractFactory(bytecode, _abi, wallet);

    return factory.deployContract<MarketContractAbi>({
      storageSlots: _storageSlots,
      ...options,
    });
  },
}
