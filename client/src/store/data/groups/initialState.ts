export type Group = {
  id: string;
  name: string;
  description: string;
  currency: string;
  members: string[];
  bankValue: number;
  initialMemberValue: number;
  administrator: string;
  voteRequirement: number;
  allowNegativeBalance: boolean;
  createdAt: Date;
}

type GroupState = {
  groups: Group[],
  defaultGroup: string;
}

const initialState: GroupState = {
  groups: [],
  defaultGroup: '',
}

export default initialState;

export type {
  GroupState,
}
