import { beforeEach, describe, expect, it, jest } from "@jest/globals";
import { Provider, Wallet } from "fuels";

import {
  DEFAULT_GAS_LIMIT_MULTIPLIER,
  DEFAULT_GAS_PRICE,
} from "../src/constants";
import { ReadActions } from "../src/ReadActions";

describe("ReadActions", () => {
  let readActions: ReadActions;

  beforeEach(async () => {
    // Reset mocks before each test
    jest.clearAllMocks();

    const provider = await Provider.create(
      "https://mainnet.fuel.network/v1/graphql",
    );

    const wallet = Wallet.generate({
      provider,
    });

    readActions = new ReadActions({
      wallet,
      contractAddresses: {
        market:
          "0x009010a055ab636c38caa0e4c7cf9eb4ad8d6f44ff6e094f23b3dcdd291ee093",
        multiAsset: "multiasset_address",
        registry: "registry_address",
        proxy:
          "0xbbe3a8eeea77082864c5553e06df3bce440688f89ce538efa67d38b1a470f334",
      },
      gasLimitMultiplier: DEFAULT_GAS_LIMIT_MULTIPLIER,
      gasPrice: DEFAULT_GAS_PRICE,
    });
  });

  it("should fetch protocol fee for user", async () => {
    const result = await readActions.fetchProtocolFee();

    expect(result).toEqual({ makerFee: "0", takerFee: "0" });
  });
});
