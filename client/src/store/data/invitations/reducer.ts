import {
  GROUPS_FAIL,
  GROUPS_REQUEST,
  GROUPS_SUCCESS,
  SET_ACTIVE_GROUP,
} from './actions';

import initialState, { GroupState } from './initialState';
import { ReducerMap } from '../../types';
import createReducer from '../../../utils/createReducer';

const authReducer: ReducerMap<GroupState> = {
  [GROUPS_REQUEST]: state => ({
    ...state,
  }),
  [GROUPS_SUCCESS]: state => ({
    ...state,
  }),
  [GROUPS_FAIL]: state => ({
    ...state,
  }),
  [SET_ACTIVE_GROUP]: (state, { payload }) => ({
    ...state,
    activeGroup: payload
  }),
}

export default createReducer(authReducer, initialState);
