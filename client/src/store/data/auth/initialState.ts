type AuthState = {
  username: string,
  email: string,

}

const initialState: AuthState = {
  username: '',
  email: '',
}

export default initialState;

export type {
  AuthState,
}
