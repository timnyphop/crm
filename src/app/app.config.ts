import {
  ApplicationConfig,
  provideZoneChangeDetection,
  isDevMode,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { authReducer } from './store/reducers/auth.reducer';
import { organizationReducer } from './store/reducers/organization.reducer';
import { AuthEffects } from './store/effects/auth.effects';
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideEffects([AuthEffects]),
    provideStore({
      auth: authReducer,
      organizations: organizationReducer,
      // Подключаем редьюсер
    }),

    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  ],
};
