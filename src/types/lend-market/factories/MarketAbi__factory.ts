/* Autogenerated file. Do not edit manually. */

/* tslint:disable */
/* eslint-disable */

/*
  Fuels version: 0.84.0
  Forc version: 0.56.0
  Fuel-Core version: 0.26.0
*/

import { Interface, Contract, ContractFactory } from "fuels";
import type { Provider, Account, AbstractAddress, BytesLike, DeployContractOptions, StorageSlot } from "fuels";
import type { MarketAbi, MarketAbiInterface } from "../MarketAbi";

const _abi = {
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
          "type": 21,
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
      "typeId": 2,
      "type": "b256",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 3,
      "type": "bool",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 4,
      "type": "enum Error",
      "components": [
        {
          "name": "AlreadyInitialized",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "Paused",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "Unauthorized",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "InsufficientReserves",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "NotLiquidatable",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "NotForSale",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "TooMuchSlippage",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "SupplyCapExceeded",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "NotCollateralized",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "BorrowTooSmall",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "NotPermitted",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "InvalidPayment",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "UnknownAsset",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "DebuggingDisabled",
          "type": 0,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 5,
      "type": "enum Option",
      "components": [
        {
          "name": "None",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "Some",
          "type": 6,
          "typeArguments": null
        }
      ],
      "typeParameters": [
        6
      ]
    },
    {
      "typeId": 6,
      "type": "generic T",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 7,
      "type": "raw untyped ptr",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 8,
      "type": "struct Address",
      "components": [
        {
          "name": "value",
          "type": 2,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 9,
      "type": "struct CollateralConfiguration",
      "components": [
        {
          "name": "asset_id",
          "type": 2,
          "typeArguments": null
        },
        {
          "name": "price_feed",
          "type": 2,
          "typeArguments": null
        },
        {
          "name": "decimals",
          "type": 20,
          "typeArguments": null
        },
        {
          "name": "borrow_collateral_factor",
          "type": 21,
          "typeArguments": null
        },
        {
          "name": "liquidate_collateral_factor",
          "type": 21,
          "typeArguments": null
        },
        {
          "name": "liquidation_penalty",
          "type": 21,
          "typeArguments": null
        },
        {
          "name": "supply_cap",
          "type": 21,
          "typeArguments": null
        },
        {
          "name": "paused",
          "type": 3,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 10,
      "type": "struct CollateralConfigurationEvent",
      "components": [
        {
          "name": "configuration",
          "type": 9,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 11,
      "type": "struct I64",
      "components": [
        {
          "name": "value",
          "type": 21,
          "typeArguments": null
        },
        {
          "name": "negative",
          "type": 3,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 12,
      "type": "struct MarketBasics",
      "components": [
        {
          "name": "base_supply_index",
          "type": 21,
          "typeArguments": null
        },
        {
          "name": "base_borrow_index",
          "type": 21,
          "typeArguments": null
        },
        {
          "name": "tracking_supply_index",
          "type": 21,
          "typeArguments": null
        },
        {
          "name": "tracking_borrow_index",
          "type": 21,
          "typeArguments": null
        },
        {
          "name": "total_supply_base",
          "type": 21,
          "typeArguments": null
        },
        {
          "name": "total_borrow_base",
          "type": 21,
          "typeArguments": null
        },
        {
          "name": "last_accrual_time",
          "type": 21,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 13,
      "type": "struct MarketConfiguration",
      "components": [
        {
          "name": "governor",
          "type": 8,
          "typeArguments": null
        },
        {
          "name": "pause_guardian",
          "type": 8,
          "typeArguments": null
        },
        {
          "name": "base_token",
          "type": 2,
          "typeArguments": null
        },
        {
          "name": "base_token_decimals",
          "type": 20,
          "typeArguments": null
        },
        {
          "name": "base_token_price_feed",
          "type": 2,
          "typeArguments": null
        },
        {
          "name": "kink",
          "type": 21,
          "typeArguments": null
        },
        {
          "name": "supply_per_second_interest_rate_slope_low",
          "type": 21,
          "typeArguments": null
        },
        {
          "name": "supply_per_second_interest_rate_slope_high",
          "type": 21,
          "typeArguments": null
        },
        {
          "name": "borrow_per_second_interest_rate_slope_low",
          "type": 21,
          "typeArguments": null
        },
        {
          "name": "borrow_per_second_interest_rate_slope_high",
          "type": 21,
          "typeArguments": null
        },
        {
          "name": "borrow_per_second_interest_rate_base",
          "type": 21,
          "typeArguments": null
        },
        {
          "name": "store_front_price_factor",
          "type": 21,
          "typeArguments": null
        },
        {
          "name": "base_tracking_supply_speed",
          "type": 21,
          "typeArguments": null
        },
        {
          "name": "base_tracking_borrow_speed",
          "type": 21,
          "typeArguments": null
        },
        {
          "name": "base_min_for_rewards",
          "type": 21,
          "typeArguments": null
        },
        {
          "name": "base_borrow_min",
          "type": 21,
          "typeArguments": null
        },
        {
          "name": "target_reserves",
          "type": 21,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 14,
      "type": "struct PauseConfiguration",
      "components": [
        {
          "name": "supply_paused",
          "type": 3,
          "typeArguments": null
        },
        {
          "name": "withdraw_paused",
          "type": 3,
          "typeArguments": null
        },
        {
          "name": "absorb_paused",
          "type": 3,
          "typeArguments": null
        },
        {
          "name": "buy_paused",
          "type": 3,
          "typeArguments": null
        },
        {
          "name": "claim_paused",
          "type": 3,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 15,
      "type": "struct RawVec",
      "components": [
        {
          "name": "ptr",
          "type": 7,
          "typeArguments": null
        },
        {
          "name": "cap",
          "type": 21,
          "typeArguments": null
        }
      ],
      "typeParameters": [
        6
      ]
    },
    {
      "typeId": 16,
      "type": "struct UserBasic",
      "components": [
        {
          "name": "principal",
          "type": 11,
          "typeArguments": null
        },
        {
          "name": "base_tracking_index",
          "type": 21,
          "typeArguments": null
        },
        {
          "name": "base_tracking_accrued",
          "type": 21,
          "typeArguments": null
        },
        {
          "name": "reward_claimed",
          "type": 21,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 17,
      "type": "struct UserBasicEvent",
      "components": [
        {
          "name": "user_basic",
          "type": 16,
          "typeArguments": null
        },
        {
          "name": "address",
          "type": 8,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 18,
      "type": "struct UserCollateralEvent",
      "components": [
        {
          "name": "address",
          "type": 8,
          "typeArguments": null
        },
        {
          "name": "asset_id",
          "type": 2,
          "typeArguments": null
        },
        {
          "name": "amount",
          "type": 21,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 19,
      "type": "struct Vec",
      "components": [
        {
          "name": "buf",
          "type": 15,
          "typeArguments": [
            {
              "name": "",
              "type": 6,
              "typeArguments": null
            }
          ]
        },
        {
          "name": "len",
          "type": 21,
          "typeArguments": null
        }
      ],
      "typeParameters": [
        6
      ]
    },
    {
      "typeId": 20,
      "type": "u32",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 21,
      "type": "u64",
      "components": null,
      "typeParameters": null
    }
  ],
  "functions": [
    {
      "inputs": [
        {
          "name": "accounts",
          "type": 19,
          "typeArguments": [
            {
              "name": "",
              "type": 8,
              "typeArguments": null
            }
          ]
        }
      ],
      "name": "absorb",
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
          "name": "configuration",
          "type": 9,
          "typeArguments": null
        }
      ],
      "name": "add_collateral_asset",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "write",
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "account",
          "type": 8,
          "typeArguments": null
        }
      ],
      "name": "available_to_borrow",
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
          "type": 2,
          "typeArguments": null
        }
      ],
      "name": "balance_of",
      "output": {
        "name": "",
        "type": 21,
        "typeArguments": null
      },
      "attributes": null
    },
    {
      "inputs": [
        {
          "name": "asset_id",
          "type": 2,
          "typeArguments": null
        },
        {
          "name": "min_amount",
          "type": 21,
          "typeArguments": null
        },
        {
          "name": "recipient",
          "type": 8,
          "typeArguments": null
        }
      ],
      "name": "buy_collateral",
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
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [],
      "name": "claim",
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
          "name": "asset_id",
          "type": 2,
          "typeArguments": null
        },
        {
          "name": "collateral_amount",
          "type": 21,
          "typeArguments": null
        }
      ],
      "name": "collateral_value_to_sell",
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
      "inputs": [],
      "name": "debug_increment_timestamp",
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
          "name": "utilization",
          "type": 21,
          "typeArguments": null
        }
      ],
      "name": "get_borrow_rate",
      "output": {
        "name": "",
        "type": 21,
        "typeArguments": null
      },
      "attributes": null
    },
    {
      "inputs": [],
      "name": "get_collateral_configurations",
      "output": {
        "name": "",
        "type": 19,
        "typeArguments": [
          {
            "name": "",
            "type": 9,
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
          "name": "asset_id",
          "type": 2,
          "typeArguments": null
        }
      ],
      "name": "get_collateral_reserves",
      "output": {
        "name": "",
        "type": 11,
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
      "name": "get_configuration",
      "output": {
        "name": "",
        "type": 13,
        "typeArguments": null
      },
      "attributes": null
    },
    {
      "inputs": [],
      "name": "get_market_basics",
      "output": {
        "name": "",
        "type": 12,
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
      "name": "get_reserves",
      "output": {
        "name": "",
        "type": 11,
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
          "name": "account",
          "type": 8,
          "typeArguments": null
        }
      ],
      "name": "get_reward_owed",
      "output": {
        "name": "",
        "type": 21,
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
      "name": "get_reward_token_asset_id",
      "output": {
        "name": "",
        "type": 2,
        "typeArguments": null
      },
      "attributes": null
    },
    {
      "inputs": [
        {
          "name": "utilization",
          "type": 21,
          "typeArguments": null
        }
      ],
      "name": "get_supply_rate",
      "output": {
        "name": "",
        "type": 21,
        "typeArguments": null
      },
      "attributes": null
    },
    {
      "inputs": [
        {
          "name": "account",
          "type": 8,
          "typeArguments": null
        }
      ],
      "name": "get_user_basic",
      "output": {
        "name": "",
        "type": 16,
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
          "name": "address",
          "type": 8,
          "typeArguments": null
        },
        {
          "name": "asset_id",
          "type": 2,
          "typeArguments": null
        }
      ],
      "name": "get_user_collateral",
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
          "name": "account",
          "type": 8,
          "typeArguments": null
        }
      ],
      "name": "get_user_supply_borrow",
      "output": {
        "name": "",
        "type": 1,
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
      "name": "get_utilization",
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
          "name": "account",
          "type": 8,
          "typeArguments": null
        }
      ],
      "name": "is_liquidatable",
      "output": {
        "name": "",
        "type": 3,
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
          "name": "pause_config",
          "type": 14,
          "typeArguments": null
        }
      ],
      "name": "pause",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "write",
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "asset_id",
          "type": 2,
          "typeArguments": null
        }
      ],
      "name": "pause_collateral_asset",
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
          "name": "asset_id",
          "type": 2,
          "typeArguments": null
        },
        {
          "name": "base_amount",
          "type": 21,
          "typeArguments": null
        }
      ],
      "name": "quote_collateral",
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
          "name": "asset_id",
          "type": 2,
          "typeArguments": null
        }
      ],
      "name": "resume_collateral_asset",
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
      "name": "supply_base",
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
      "inputs": [],
      "name": "supply_collateral",
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
          "name": "asset_id",
          "type": 2,
          "typeArguments": null
        }
      ],
      "name": "totals_collateral",
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
          "name": "amount",
          "type": 21,
          "typeArguments": null
        }
      ],
      "name": "withdraw_base",
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
          "name": "asset_id",
          "type": 2,
          "typeArguments": null
        },
        {
          "name": "amount",
          "type": 21,
          "typeArguments": null
        }
      ],
      "name": "withdraw_collateral",
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
          "type": 8,
          "typeArguments": null
        },
        {
          "name": "amount",
          "type": 21,
          "typeArguments": null
        }
      ],
      "name": "withdraw_reserves",
      "output": {
        "name": "",
        "type": 0,
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
          "name": "recipient",
          "type": 8,
          "typeArguments": null
        },
        {
          "name": "amount",
          "type": 21,
          "typeArguments": null
        }
      ],
      "name": "withdraw_reward_token",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": null
    }
  ],
  "loggedTypes": [
    {
      "logId": 0,
      "loggedType": {
        "name": "",
        "type": 4,
        "typeArguments": []
      }
    },
    {
      "logId": 1,
      "loggedType": {
        "name": "",
        "type": 4,
        "typeArguments": []
      }
    },
    {
      "logId": 2,
      "loggedType": {
        "name": "",
        "type": 18,
        "typeArguments": []
      }
    },
    {
      "logId": 3,
      "loggedType": {
        "name": "",
        "type": 17,
        "typeArguments": []
      }
    },
    {
      "logId": 4,
      "loggedType": {
        "name": "",
        "type": 4,
        "typeArguments": []
      }
    },
    {
      "logId": 5,
      "loggedType": {
        "name": "",
        "type": 4,
        "typeArguments": []
      }
    },
    {
      "logId": 6,
      "loggedType": {
        "name": "",
        "type": 10,
        "typeArguments": []
      }
    },
    {
      "logId": 7,
      "loggedType": {
        "name": "",
        "type": 4,
        "typeArguments": []
      }
    },
    {
      "logId": 8,
      "loggedType": {
        "name": "",
        "type": 4,
        "typeArguments": []
      }
    },
    {
      "logId": 9,
      "loggedType": {
        "name": "",
        "type": 4,
        "typeArguments": []
      }
    },
    {
      "logId": 10,
      "loggedType": {
        "name": "",
        "type": 4,
        "typeArguments": []
      }
    },
    {
      "logId": 11,
      "loggedType": {
        "name": "",
        "type": 4,
        "typeArguments": []
      }
    },
    {
      "logId": 12,
      "loggedType": {
        "name": "",
        "type": 4,
        "typeArguments": []
      }
    },
    {
      "logId": 13,
      "loggedType": {
        "name": "",
        "type": 17,
        "typeArguments": []
      }
    },
    {
      "logId": 14,
      "loggedType": {
        "name": "",
        "type": 17,
        "typeArguments": []
      }
    },
    {
      "logId": 15,
      "loggedType": {
        "name": "",
        "type": 4,
        "typeArguments": []
      }
    },
    {
      "logId": 16,
      "loggedType": {
        "name": "",
        "type": 17,
        "typeArguments": []
      }
    },
    {
      "logId": 17,
      "loggedType": {
        "name": "",
        "type": 4,
        "typeArguments": []
      }
    },
    {
      "logId": 18,
      "loggedType": {
        "name": "",
        "type": 4,
        "typeArguments": []
      }
    },
    {
      "logId": 19,
      "loggedType": {
        "name": "",
        "type": 10,
        "typeArguments": []
      }
    },
    {
      "logId": 20,
      "loggedType": {
        "name": "",
        "type": 4,
        "typeArguments": []
      }
    },
    {
      "logId": 21,
      "loggedType": {
        "name": "",
        "type": 10,
        "typeArguments": []
      }
    },
    {
      "logId": 22,
      "loggedType": {
        "name": "",
        "type": 4,
        "typeArguments": []
      }
    },
    {
      "logId": 23,
      "loggedType": {
        "name": "",
        "type": 4,
        "typeArguments": []
      }
    },
    {
      "logId": 24,
      "loggedType": {
        "name": "",
        "type": 17,
        "typeArguments": []
      }
    },
    {
      "logId": 25,
      "loggedType": {
        "name": "",
        "type": 4,
        "typeArguments": []
      }
    },
    {
      "logId": 26,
      "loggedType": {
        "name": "",
        "type": 4,
        "typeArguments": []
      }
    },
    {
      "logId": 27,
      "loggedType": {
        "name": "",
        "type": 4,
        "typeArguments": []
      }
    },
    {
      "logId": 28,
      "loggedType": {
        "name": "",
        "type": 4,
        "typeArguments": []
      }
    },
    {
      "logId": 29,
      "loggedType": {
        "name": "",
        "type": 18,
        "typeArguments": []
      }
    },
    {
      "logId": 30,
      "loggedType": {
        "name": "",
        "type": 4,
        "typeArguments": []
      }
    },
    {
      "logId": 31,
      "loggedType": {
        "name": "",
        "type": 4,
        "typeArguments": []
      }
    },
    {
      "logId": 32,
      "loggedType": {
        "name": "",
        "type": 17,
        "typeArguments": []
      }
    },
    {
      "logId": 33,
      "loggedType": {
        "name": "",
        "type": 4,
        "typeArguments": []
      }
    },
    {
      "logId": 34,
      "loggedType": {
        "name": "",
        "type": 4,
        "typeArguments": []
      }
    },
    {
      "logId": 35,
      "loggedType": {
        "name": "",
        "type": 18,
        "typeArguments": []
      }
    },
    {
      "logId": 36,
      "loggedType": {
        "name": "",
        "type": 4,
        "typeArguments": []
      }
    },
    {
      "logId": 37,
      "loggedType": {
        "name": "",
        "type": 4,
        "typeArguments": []
      }
    },
    {
      "logId": 38,
      "loggedType": {
        "name": "",
        "type": 4,
        "typeArguments": []
      }
    },
    {
      "logId": 39,
      "loggedType": {
        "name": "",
        "type": 4,
        "typeArguments": []
      }
    }
  ],
  "messagesTypes": [],
  "configurables": [
    {
      "name": "PYTH_CONTRACT_ADDRESS",
      "configurableType": {
        "name": "",
        "type": 8,
        "typeArguments": []
      },
      "offset": 355688
    },
    {
      "name": "MARKET_CONFIGURATION",
      "configurableType": {
        "name": "",
        "type": 5,
        "typeArguments": [
          {
            "name": "",
            "type": 13,
            "typeArguments": []
          }
        ]
      },
      "offset": 355336
    },
    {
      "name": "DEBUG_STEP",
      "configurableType": {
        "name": "",
        "type": 5,
        "typeArguments": [
          {
            "name": "",
            "type": 21,
            "typeArguments": null
          }
        ]
      },
      "offset": 355584
    }
  ]
};

const _storageSlots: StorageSlot[] = [
  {
    "key": "7f91d1a929dce734e7f930bbb279ccfccdb5474227502ea8845815c74bd930a7",
    "value": "0de0b6b3a76400000de0b6b3a76400000de0b6b3a76400000de0b6b3a7640000"
  },
  {
    "key": "7f91d1a929dce734e7f930bbb279ccfccdb5474227502ea8845815c74bd930a8",
    "value": "0000000000000000000000000000000000000000000000000000000000000000"
  },
  {
    "key": "8a89a0cce819e0426e565819a9a98711329087da5a802fb16edd223c47fa44ef",
    "value": "0000000000000000000000000000000000000000000000000000000000000000"
  },
  {
    "key": "b48b753af346966d0d169c0b2e3234611f65d5cfdb57c7b6e7cd6ca93707bee0",
    "value": "0000000000000000000000000000000000000000000000000000000000000000"
  },
  {
    "key": "b48b753af346966d0d169c0b2e3234611f65d5cfdb57c7b6e7cd6ca93707bee1",
    "value": "0000000000000000000000000000000000000000000000000000000000000000"
  }
];

export class MarketAbi__factory {
  static readonly abi = _abi;

  static readonly storageSlots = _storageSlots;

  static createInterface(): MarketAbiInterface {
    return new Interface(_abi) as unknown as MarketAbiInterface
  }

  static connect(
    id: string | AbstractAddress,
    accountOrProvider: Account | Provider
  ): MarketAbi {
    return new Contract(id, _abi, accountOrProvider) as unknown as MarketAbi
  }

  static async deployContract(
    bytecode: BytesLike,
    wallet: Account,
    options: DeployContractOptions = {}
  ): Promise<MarketAbi> {
    const factory = new ContractFactory(bytecode, _abi, wallet);

    const { storageSlots } = MarketAbi__factory;

    const contract = await factory.deployContract({
      storageSlots,
      ...options,
    });

    return contract as unknown as MarketAbi;
  }
}
