import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { Store } from '@ngrx/store';
import { selectIsAuthenticated } from './store/selectors/auth.selectors';
import { Observable } from 'rxjs';
import { IAppState } from './types/AppState'; // Импортируйте ваш интерфейс состояния

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isAuthenticated$: Observable<boolean>;

  constructor(private store: Store<IAppState>) {
    // Используйте правильный тип состояния
    this.isAuthenticated$ = this.store.select(selectIsAuthenticated);
  }
}
