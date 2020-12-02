export const PASSWORD_UPDATE_REQUEST = 'settings/PASSWORD_UPDATE_REQUEST';
export const PASSWORD_UPDATE_SUCCESS = 'settings/PASSWORD_UPDATE_SUCCESS';
export const PASSWORD_UPDATE_FAIL = 'settings/PASSWORD_UPDATE_FAIL';
export const SET_THEME = 'settings/SET_THEME';

import { SettingState } from './initialState';

export const setTheme = (theme: SettingState['theme']) => ({ type: SET_THEME, payload: theme })