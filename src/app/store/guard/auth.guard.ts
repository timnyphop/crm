import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import {
  selectIsAuthenticated,
  selectToken,
} from '../selectors/auth.selectors';
import { IAppState } from '../../types/AppState';
import { tokens } from '../../data/token';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private store: Store<IAppState>, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.store.select(selectIsAuthenticated).pipe(
      take(1),
      map((isAuthenticated) => {
        if (!isAuthenticated) {
          this.router.navigate(['/auth']);
          return false;
        }
        return true;
      }),
    );
  }
}
