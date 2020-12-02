import {
  PASSWORD_UPDATE_FAIL,
  PASSWORD_UPDATE_REQUEST,
  PASSWORD_UPDATE_SUCCESS,
  SET_THEME,
} from './actions';

import initialState, { SettingState } from './initialState';
import { ReducerMap } from '../../types';
import createReducer from '../../../utils/createReducer';

const authReducer: ReducerMap<SettingState> = {
  [PASSWORD_UPDATE_REQUEST]: state => ({
    ...state,
  }),
  [PASSWORD_UPDATE_SUCCESS]: state => ({
    ...state,
  }),
  [PASSWORD_UPDATE_FAIL]: state => ({
    ...state,
  }),
  [SET_THEME]: (state, { payload }) => ({
    ...state,
    theme: payload.theme
  }),
}

export default createReducer(authReducer, initialState);
