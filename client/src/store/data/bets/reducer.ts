import {
  UPSERT_BET_FAIL,
  UPSERT_BET_REQUEST,
  UPSERT_BET_SUCCESS,
  ACKNOWLEDGE_BET_FAIL,
  ACKNOWLEDGE_BET_REQUEST,
  ACKNOWLEDGE_BET_SUCCESS,
} from './actions';

import initialState, { BetState } from './initialState';
import { ReducerMap } from '../../types';
import createReducer from '../../../utils/createReducer';

const betsReducer: ReducerMap<BetState> = {
  [UPSERT_BET_REQUEST]: state => ({
    ...state,
  }),
  [UPSERT_BET_SUCCESS]: state => ({
    ...state,
  }),
  [UPSERT_BET_FAIL]: state => ({
    ...state,
  }),
  [ACKNOWLEDGE_BET_REQUEST]: state => ({
    ...state,
  }),
  [ACKNOWLEDGE_BET_SUCCESS]: state => ({
    ...state,
  }),
  [ACKNOWLEDGE_BET_FAIL]: state => ({
    ...state,
  }),
}

export default createReducer(betsReducer, initialState);
