import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  SIGNUP_FAIL,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
} from './actions';

import initialState, { AuthState } from './initialState';
import { ReducerMap } from '../../types';
import createReducer from '../../../utils/createReducer';

const authReducer: ReducerMap<AuthState> = {
  [LOGIN_REQUEST]: state => ({
    ...state,
  }),
  [LOGIN_SUCCESS]: state => ({
    ...state,
  }),
  [LOGIN_FAIL]: state => ({
    ...state,
  }),
  [SIGNUP_REQUEST]: state => ({
    ...state,
  }),
  [SIGNUP_SUCCESS]: state => ({
    ...state,
  }),
  [SIGNUP_FAIL]: state => ({
    ...state,
  }),
}

export default createReducer(authReducer, initialState);
