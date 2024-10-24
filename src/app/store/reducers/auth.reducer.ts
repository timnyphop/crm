import { createReducer, on } from '@ngrx/store';
import { login, logout } from '../actions/auth.actions';

export interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  isAdmin: boolean;
}

export const initialState: AuthState = {
  isAuthenticated: false,
  token: null,
  isAdmin: false,
};

export const authReducer = createReducer(
  initialState,
  on(login, (state, { token, isAdmin }) => ({
    ...state,
    isAuthenticated: true,
    token: token,
    isAdmin: isAdmin,
  })),
  on(logout, (state) => {
    console.log('Logging out, resetting state');
    return {
      ...state,
      isAuthenticated: false,
      token: null,
      isAdmin: false,
    };
  }),
);
