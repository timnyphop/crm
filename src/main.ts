import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { StoreModule } from '@ngrx/store';
import { authReducer } from './app/store/reducers/auth.reducer';
import { provideStore } from '@ngrx/store';
import { appConfig } from './app/app.config';
enableProdMode();

bootstrapApplication(AppComponent, appConfig);
