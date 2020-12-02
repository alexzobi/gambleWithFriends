import { combineReducers } from 'redux';

import auth from './data/auth/reducer';
import bets from './data/bets/reducer';
import awards from './data/awards/reducer';
import groups from './data/groups/reducer';
import settings from './data/settings/reducer';
import wallet from './data/wallet/reducer';

export const rootReducer = combineReducers({
  auth,
  bets,
  awards,
  groups,
  settings,
  wallet,
});

export type ReturnState = ReturnType<typeof rootReducer>;

export default (state: ReturnState, action: any) => {
  let newState: ReturnState | undefined = state;
  if (action.type === 'persist/PURGE') {
    newState = undefined;
  }
  return rootReducer(newState, action);
};
