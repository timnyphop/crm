import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { login } from '../../store/actions/auth.actions';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {
  selectIsAuthenticated,
  selectToken,
} from '../../store/selectors/auth.selectors';
import { IAppState } from '../../types/AppState';
import { tokens } from '../../data/token';
@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  checked = false;
  errorMessage: string = '';
  form: FormGroup;
  isAuthenticated$: Observable<boolean>;

  constructor(private store: Store<IAppState>, private router: Router) {
    this.isAuthenticated$ = this.store.select(selectIsAuthenticated);

    this.form = new FormGroup({
      token: new FormControl('', [Validators.required]),
    });

    this.isAuthenticated$.subscribe((isAuthenticated) => {
      if (isAuthenticated) {
        this.router.navigate(['/main']);
      }
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const token = this.form.value.token;
      const matchedToken = tokens.find((t) => t.token === token);

      if (matchedToken) {
        const isAdmin = matchedToken.admin;
        this.store.dispatch(login({ token, isAdmin }));
      } else {
        this.errorMessage = 'Неверный токен';
      }
    }
  }
}
