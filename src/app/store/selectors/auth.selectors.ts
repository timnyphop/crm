import { createSelector } from '@ngrx/store';
import { IAppState } from '../../types/AppState';
import { AuthState } from '../reducers/auth.reducer';

export const selectAuthState = (state: IAppState) => state.auth;

export const selectIsAuthenticated = createSelector(
  selectAuthState,
  (authState: AuthState) => {
    return authState.isAuthenticated;
  },
);

export const selectToken = createSelector(
  selectAuthState,
  (authState: AuthState) => authState.token,
);
export const selectIsAdmin = createSelector(
  selectAuthState,
  (auth) => auth.isAdmin,
);
