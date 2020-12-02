import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { Action, AnyAction } from 'redux';
import { AuthState } from './data/auth/initialState';

export type AppState = {
  auth: AuthState;
}

export interface AppActionPayload extends AnyAction {
  type: string;
}

export type AppThunkAction<ReturnType> = ThunkAction<ReturnType,
  AppState,
  undefined,
  AppActionPayload
>;

export type AppDispatch = ThunkDispatch<AppState, undefined, Action>

export type ReducerMap<State, Actions = AppActionPayload> = {
  [key: string]: (state: State, action: Actions) => State,
}

export type AppEffect = {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  data?: any;
};
