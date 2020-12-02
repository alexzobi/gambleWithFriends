import { Bet } from '../bets/initialState';

type WalletState = {
  wallet: {[currency: string]: number}
  pendingTransactions: Bet[]
}

const initialState: WalletState = {
  wallet: {},
  pendingTransactions: [],
}

export default initialState;

export type {
  WalletState,
}
