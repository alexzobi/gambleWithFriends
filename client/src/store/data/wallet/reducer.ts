import {
  WALLET_FAIL,
  WALLET_REQUEST,
  WALLET_SUCCESS,
} from './actions';

import initialState, { WalletState } from './initialState';
import { ReducerMap } from '../../types';
import createReducer from '../../../utils/createReducer';

const walletReducer: ReducerMap<WalletState> = {
  [WALLET_REQUEST]: state => ({
    ...state,
  }),
  [WALLET_SUCCESS]: state => ({
    ...state,
  }),
  [WALLET_FAIL]: state => ({
    ...state,
  }),
}

export default createReducer(walletReducer, initialState);
