import { createAction, props } from '@ngrx/store';

export const login = createAction(
  '[Auth] Login',
  props<{ token: string; isAdmin: boolean }>(),
);

export const logout = createAction('[Auth] Logout');
