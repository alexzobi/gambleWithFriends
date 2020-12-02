export type Award = {
  createdAt: Date;
  updatedAt: Date;
  awarder: string;
  awardee: string;
  value: number;
  currency: string;
  title: string;
  description: string;
  status: "PENDING" | "COMPLETE" | "DECLINED";
}

type AwardState = {
  generalAwards: Award[];
  userAwards: Award[];
}

const initialState: AwardState = {
  generalAwards: [],
  userAwards: [],
}

export default initialState;

export type {
  AwardState,
}
