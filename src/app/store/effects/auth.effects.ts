import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import * as AuthActions from '../actions/auth.actions';

export abstract class Wrapper {
  constructor(protected readonly actions$: Actions) {}
}

@Injectable()
export class AuthEffects extends Wrapper {
  constructor(actions$: Actions, private router: Router) {
    super(actions$);
  }

  loginRedirect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.login),
        tap(() => this.router.navigate(['/main'])),
      ),
    { dispatch: false },
  );

  logoutRedirect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.logout),
        tap(() => {
          this.router.navigate(['/auth']);
        }),
      ),
    { dispatch: false },
  );
}
