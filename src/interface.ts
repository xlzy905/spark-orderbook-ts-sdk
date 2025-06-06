import { WalletLocked, WalletUnlocked } from "fuels";

import BN from "./utils/BN";

export interface OrderbookContracts {
  proxyMarket: string;
  registry: string;
  multiAsset: string;
}

export interface LastPriceReturn {
  TradeOrderEvent: {
    tradePrice: string;
  }[];
}

export interface Asset {
  assetId: string;
  symbol: string;
  decimals: number;
}

interface BaseOptions {
  contractAddresses: OrderbookContracts;
  gasPrice: string;
  gasLimitMultiplier: string;
}

export interface Options extends BaseOptions {
  wallet: WalletLocked | WalletUnlocked;
}

export interface OptionsSpark extends BaseOptions {
  wallet?: WalletLocked | WalletUnlocked;
}

export interface GraphClientConfig {
  httpUrl: string;
  wsUrl: string;
}

export interface SparkParams {
  networkUrl: string;
  contractAddresses: Omit<OrderbookContracts, "proxyMarket">;
  wallet?: WalletLocked | WalletUnlocked;
  gasPrice?: string;
  gasLimitMultiplier?: string;
}

export interface SpotOrderWithoutTimestamp {
  id: string;
  orderType: OrderType;
  trader: string;
  baseSize: BN;
  orderPrice: BN;
}

export interface UserMarketBalance {
  liquid: {
    base: string;
    quote: string;
  };
  locked: {
    base: string;
    quote: string;
  };
}

export type WriteTransactionResponse = {
  transactionId: string;
  value: unknown;
};

export interface GraphQLResponse<T> {
  result: T;
  errors?: { message: string }[];
}

export enum OrderType {
  Buy = "Buy",
  Sell = "Sell",
}

export enum AssetType {
  Base = "Base",
  Quote = "Quote",
}

export enum LimitType {
  IOC = "IOC",
  FOK = "FOK",
  GTC = "GTC",
  MKT = "MKT",
}

export type Status = "Active" | "Canceled" | "Closed";

export interface WithdrawAllType {
  amount: string;
  assetType: AssetType;
}

export interface GetOrdersParams {
  limit: number;
  market?: string[];
  orderType?: OrderType;
  status?: Status[];
  user?: string;
  asset?: string;
  offset?: number;
}

type SortBy = "desc" | "asc";

export interface GetOrdersSort {
  amount?: SortBy;
  asset?: SortBy;
  id?: SortBy;
  initialAmount?: SortBy;
  market?: SortBy;
  orderType?: SortBy;
  price?: SortBy;
  status?: SortBy;
  timestamp?: SortBy;
}

export interface GetActiveOrdersParams {
  limit: number;
  market: string[];
  orderType: OrderType;
  user?: string;
  asset?: string;
  offset?: number;
}

export type ActiveOrderReturn<T extends OrderType> = T extends OrderType.Buy
  ? { ActiveBuyOrder: Order[] }
  : { ActiveSellOrder: Order[] };

export interface CreateOrderParams {
  amount: string;
  price: string;
  type: OrderType;
}

export interface CreateOrderWithDepositParams {
  amount: string;
  amountToSpend: string;
  amountFee: string;
  price: string;
  type: OrderType;
}

export interface FulfillOrderManyParams {
  amount: string;
  orderType: OrderType;
  limitType: LimitType;
  price: string;
  slippage: string;
  orders: string[];
}

export interface FulfillOrderManyWithDepositParams {
  amount: string;
  amountToSpend: string;
  amountFee: string;
  orderType: OrderType;
  limitType: LimitType;
  price: string;
  slippage: string;
  orders: string[];
}

export interface Order {
  id: string;
  asset: string;
  amount: string;
  initialAmount: string;
  orderType: OrderType;
  price: string;
  status: Status;
  user: string;
  timestamp: string;
  avrPrice: string;
  market: string;
}

export interface GetTradeOrderEventsParams {
  limit: number;
  market: string[];
}

export interface TradeOrderEvent {
  id: string;
  timestamp: string;
  tradePrice: string;
  tradeSize: string;
  sellerIsMaker: boolean;
}

export type Volume = {
  volume24h: string;
  high24h: string;
  low24h: string;
};

export type Markets = Record<string, string>;

export interface MarketInfo {
  baseAssetId: string;
  baseAssetDecimals: number;
  quoteAssetId: string;
  quoteAssetDecimals: number;
  owner: string;
  priceDecimals: number;
  version: number;
}

export interface CompactMarketInfo {
  contractId: string;
  baseAssetId: string;
  quoteAssetId: string;
}

export interface ProtocolFee {
  takerFee: string;
  makerFee: string;
  volumeThreshold: string;
}

export interface UserProtocolFee {
  takerFee: string;
  makerFee: string;
}

export interface UserInfoParams {
  id: string;
}

export interface UserInfo {
  id: string;
  active: number;
  canceled: number;
  closed: number;
  timestamp: string;
}

export interface GetUserScoreSnapshotParams {
  userAddress: string;
  toTimestamp: number;
  fromTimestamp: number;
}

export interface GetTotalStatsTableDataParams {
  side: string;
}

export interface GetCompetitionParams {
  side: string;
  limit: number;
  page: number;
  search?: string;
  startTime: number;
  endTime: number;
  minimumTradingVolume: number;
}

export interface GetTradeEventQueryParams {
  userAddress: string;
  toTimestamp: number;
  fromTimestamp: number;
}

export interface GetSortedLeaderboardQueryParams {
  page: number;
  limit: number;
  search?: string;
  currentTimestamp: number;
  interval: number;
  side: string;
}

export interface GetLeaderboardQueryParams
  extends GetSortedLeaderboardQueryParams {
  wallets: string[];
}
export interface GetLeaderboardPnlQueryParams {
  wallets: string[];
}

export interface GetUserPointQueryParams {
  userAddress: string;
  toTimestamp: number;
  fromTimestamp: number;
  excluded: string[];
}

export interface UserPointsResponse {
  user: string;
  user_volume: string;
  points: string;
  total_points: string;
}

export interface GetTotalStatsResponse {
  total_volume: string;
  total_trades: string;
}

export interface GetTotalStatsTableData {
  market: string;
  total_volume_24h: string;
  total_volume_7d: string;
  last_price: string;
  price_24h_ago: string;
  price_change_24h: string;
}

export interface GetCompetitionResponse {
  user: string;
  total_pnlComp1: string;
  total_quoteAmount: string;
  position: number;
  total_volume: string;
}

export interface GetSortedLeaderboardPnlQueryParams {
  side: string;
  timeline: string;
  page: number;
  limit: number;
}

export interface GetBalancePnlByUserParams {
  user: string;
}

export interface BalancePnlByUserResponse {
  pnl1: string;
  pnl31: string;
  pnl7: string;
  pnlAllTime: string;
  pnlInPersent1: string;
  pnlInPersent31: string;
  pnlInPersent7: string;
  pnlInPersentAllTime: string;
  market: string;
}

export interface LeaderboardPnlResponse {
  user: string;
  total_pnl1: string;
  total_pnl7: string;
  total_pnl31: string;
}

export interface SentioApiParams {
  url: string;
  apiKey: string;
}

export interface GetSentioResponse<T> {
  runtimeCost: string;
  result: Result<T>;
  computeStats: ComputeStats;
}

interface ComputeStats {
  computedAt: string;
  computeCostMs: string;
  binaryVersionHash: string;
  computedBy: string;
  isCached: boolean;
  isRefreshing: boolean;
}

export interface Result<T> {
  columns: string[];
  columnTypes: ColumnTypes;
  rows: T[];
  generatedAt: string;
  cursor: string;
}

export interface RowSnapshot {
  block_date: string;
  tvl: number;
  market: string;
  timestamp: string;
  records_in_hour: string[];
  hour: string;
}

export interface RowTradeEvent {
  timestamp: string;
  volume: number;
}

export interface TraderVolumeResponse {
  walletId: string;
  traderVolume: number;
  id: number | string;
  totalCount: number;
  isYour: boolean;
}

interface ColumnTypes {
  block_date: string;
  total_value_locked_score: string;
  tradeVolume: string;
}
