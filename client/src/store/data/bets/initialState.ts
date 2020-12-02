export type Bet = {
  createdAt: Date;
  updatedAt: Date;
  better: string;
  bettee: string;
  status: "ACTIVE" | "PENDING" | "COMPLETE" | "DECLINED";
  value: number;
  currency: string;
  odds: number;
  title: string;
  description: string;
}

type BetState = {
  bets: Bet[]
}

const initialState: BetState = {
  bets: [],
}

export default initialState;

export type {
  BetState,
}
