import { combineReducers } from 'redux';

import { AppActionPayload } from '../store/types';
import auth from './data/auth/reducer';

export const rootReducer = combineReducers({
  auth,
});

export type ReturnState = ReturnType<typeof rootReducer>;

export default (state: ReturnState, action: any) => {
  let newState: ReturnState | undefined = state;
  if (action.type === 'persist/PURGE') {
    newState = undefined;
  }
  return rootReducer(newState, action);
};
