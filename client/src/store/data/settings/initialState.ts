type SettingState = {
  theme: 'light' | 'dark';
}

const initialState: SettingState = {
  theme: 'light',
}

export default initialState;

export type {
  SettingState,
}
