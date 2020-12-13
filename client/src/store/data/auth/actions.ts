export const LOGIN_REQUEST = 'auth/LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
export const LOGIN_FAIL = 'auth/LOGIN_FAIL';
export const SIGNUP_REQUEST = 'auth/SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'auth/SIGNUP_SUCCESS';
export const SIGNUP_FAIL = 'auth/SIGNUP_FAIL';

export const signup = (
  username: string,
  email: string,
  password: string,
) => {
  const config = {
    method: 'POST',
    url: 'v1/auth/signup',
    data: {
      username,
      email,
      password
    }
  }

  return {
    type: 'SIGNUP_REQUEST',
    payload: { username, email },
    meta: {
      offline: {
        effect: config,
        commit: { type: 'SIGNUP_SUCCESS', meta: { username, email } },
        rollback: { type: 'SIGNUP_FAIL', meta: { username, email } }
      }
    }
  }
};

export const login = (
  username: string,
  password: string,
) => {
  const config = {
    method: 'POST',
    url: 'v1/auth/login',
    data: {
      username,
      password
    }
  }

  return { type: LOGIN_SUCCESS, payload: { username }};
};