import {
  Bech32Address,
  Provider,
  Wallet,
  WalletLocked,
  WalletUnlocked,
} from "fuels";

import BN from "./utils/BN";
import { NETWORK_ERROR, NetworkError } from "./utils/NetworkError";
import {
  BETA_CONTRACT_ADDRESSES,
  DEFAULT_GAS_LIMIT_MULTIPLIER,
  DEFAULT_GAS_PRICE,
} from "./constants";
import { IndexerApi } from "./IndexerApi";
import {
  Asset,
  AssetType,
  GetMatchOrderEventsParams,
  GetOrdersParams,
  MarketCreateEvent,
  MatchOrderEvent,
  Options,
  OptionsSpark,
  Order,
  OrderType,
  SparkParams,
  SpotOrderWithoutTimestamp,
  Volume,
  WriteTransactionResponse,
} from "./interface";
import { ReadActions } from "./ReadActions";
import { WriteActions } from "./WriteActions";

export class SparkOrderbook {
  private read = new ReadActions();
  private write = new WriteActions();

  private providerPromise: Promise<Provider>;
  private options: OptionsSpark;

  private indexerApi: IndexerApi;

  constructor(params: SparkParams) {
    this.options = {
      contractAddresses: params.contractAddresses ?? BETA_CONTRACT_ADDRESSES,
      wallet: params.wallet,
      gasPrice: params.gasPrice ?? DEFAULT_GAS_PRICE,
      gasLimitMultiplier:
        params.gasLimitMultiplier ?? DEFAULT_GAS_LIMIT_MULTIPLIER,
    };

    this.indexerApi = new IndexerApi(params.indexerApiUrl);

    this.providerPromise = Provider.create(params.networkUrl);
  }

  setActiveWallet = (wallet?: WalletLocked | WalletUnlocked) => {
    const newOptions = { ...this.options };
    newOptions.wallet = wallet;
    this.options = newOptions;
  };

  createOrder = async (
    amount: string,
    token: Asset,
    tokenType: AssetType,
    price: string,
    type: OrderType,
  ): Promise<WriteTransactionResponse> => {
    return this.write.createOrder(
      amount,
      token,
      tokenType,
      price,
      type,
      this.getApiOptions(),
    );
  };

  cancelOrder = async (orderId: string): Promise<WriteTransactionResponse> => {
    return this.write.cancelOrder(orderId, this.getApiOptions());
  };

  matchOrders = async (
    sellOrderId: string,
    buyOrderId: string,
  ): Promise<WriteTransactionResponse> => {
    return this.write.matchOrders(
      sellOrderId,
      buyOrderId,
      this.getApiOptions(),
    );
  };

  mintToken = async (
    token: Asset,
    amount: string,
  ): Promise<WriteTransactionResponse> => {
    return this.write.mintToken(token, amount, this.getApiOptions());
  };

  deposit = async (
    token: Asset,
    amount: string,
  ): Promise<WriteTransactionResponse> => {
    return this.write.deposit(token, amount, this.getApiOptions());
  };

  /**
   * Not working! All data is hardcoded
   * TODO: FIX IT
   */
  fetchMarkets = async (limit: number): Promise<MarketCreateEvent[]> => {
    // return this.indexerApi.getMarketCreateEvents();
    return [
      {
        id: "1",
        assetId:
          "0xccceae45a7c23dcd4024f4083e959a0686a191694e76fa4fb76c449361ca01f7",
        decimal: 9,
      },
    ];
  };

  fetchMarketPrice = async (baseToken: Asset): Promise<BN> => {
    return this.read.fetchMarketPrice(baseToken.address);
  };

  fetchOrders = async (params: GetOrdersParams): Promise<Order[]> => {
    return this.indexerApi.getOrders(params);
  };

  getMatchOrderEvents = async (
    params: GetMatchOrderEventsParams,
  ): Promise<MatchOrderEvent[]> => {
    return this.indexerApi.getMatchOrderEvents(params);
  };

  fetchVolume = async (): Promise<Volume> => {
    return this.indexerApi.getVolume();
  };

  fetchOrderById = async (
    orderId: string,
  ): Promise<SpotOrderWithoutTimestamp | undefined> => {
    const options = await this.getFetchOptions();

    return this.read.fetchOrderById(orderId, options);
  };

  fetchWalletBalance = async (asset: Asset): Promise<string> => {
    // We use getApiOptions because we need the user's wallet
    return this.read.fetchWalletBalance(asset.address, this.getApiOptions());
  };

  fetchOrderIdsByAddress = async (trader: Bech32Address): Promise<string[]> => {
    const options = await this.getFetchOptions();

    return this.read.fetchOrderIdsByAddress(trader, options);
  };

  getProviderWallet = async () => {
    const provider = await this.providerPromise;
    return Wallet.generate({ provider });
  };

  getProvider = async () => {
    return this.providerPromise;
  };

  private getFetchOptions = async (): Promise<Options> => {
    const providerWallet = await this.getProviderWallet();
    const options: Options = { ...this.options, wallet: providerWallet };

    return options;
  };

  private getApiOptions = (): Options => {
    if (!this.options.wallet) {
      throw new NetworkError(NETWORK_ERROR.UNKNOWN_WALLET);
    }

    return this.options as Options;
  };
}
