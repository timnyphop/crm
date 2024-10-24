import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { logout } from '../../store/actions/auth.actions';
import { IAppState } from '../../types/AppState'; // Импортируем полное состояние приложения
import { selectIsAuthenticated } from '../../store/selectors/auth.selectors';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isAuthenticated$: Observable<boolean>;

  constructor(private store: Store<IAppState>) {
    this.isAuthenticated$ = this.store.select(selectIsAuthenticated); // Используем IAppState
  }

  logOut() {
    this.store.dispatch(logout());
  }
}
