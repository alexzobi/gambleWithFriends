export const GROUPS_REQUEST = 'groups/GROUPS_REQUEST';
export const GROUPS_SUCCESS = 'groups/GROUPS_SUCCESS';
export const GROUPS_FAIL = 'groups/GROUPS_FAIL';
export const SET_ACTIVE_GROUP = 'groups/SET_ACTIVE_GROUP';

export const setActiveGroup = (activeGroup: string) => ({
  type: SET_ACTIVE_GROUP,
  payload: activeGroup,
})