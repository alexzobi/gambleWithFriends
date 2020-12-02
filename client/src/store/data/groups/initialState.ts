export type Group = {
  id: string;
  name: string;
  description: string;
  currency: string;
  members: string[];
}

type GroupState = {
  groups: Group[],
  activeGroup: string;
}

const initialState: GroupState = {
  groups: [],
  activeGroup: '',
}

export default initialState;

export type {
  GroupState,
}
