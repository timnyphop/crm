import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from '../../types/AppState';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { PreloaderComponent } from '../../components/preloader/preloader.component';
import { IOrganization } from '../../types/Organization';
import { FormsModule } from '@angular/forms';
import {
  addOrganization,
  editOrganization,
  loadOrganizations,
} from '../../store/actions/organization.actions';
import { selectOrganizations } from '../../store/selectors/organization.selectors';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, PreloaderComponent, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  isAdmin$: Observable<boolean>;
  loading = true;
  organizations$: Observable<IOrganization[]>;
  dropStates: boolean[] = [];
  newOrganization: IOrganization = {
    fullname: '',
    shortname: '',
    inn: '',
    kpp: '',
    uchreditel: '',
    adresse: '',
    phone: '',
    fillialas: [],
  };
  editingIndex: number | null = null;

  constructor(private store: Store<IAppState>) {
    this.isAdmin$ = this.store.select((state) => state.auth.isAdmin);
    this.organizations$ = this.store.select(selectOrganizations);
  }

  ngOnInit() {
    this.store.dispatch(loadOrganizations());
    this.organizations$.subscribe((organizations) => {
      this.loading = false;
    });
  }

  addOrganization() {
    if (this.newOrganization.fullname && this.newOrganization.inn) {
      this.store.dispatch(
        addOrganization({ organization: { ...this.newOrganization } }),
      );
      this.resetForm();
    }
  }

  editOrganization() {
    if (
      this.editingIndex !== null &&
      this.newOrganization.fullname &&
      this.newOrganization.inn
    ) {
      this.store.dispatch(
        editOrganization({
          index: this.editingIndex,
          organization: { ...this.newOrganization },
        }),
      );
      this.resetForm();
      this.editingIndex = null;
    }
  }

  showDropMenu(index: number) {
    this.dropStates[index] = !this.dropStates[index];
  }

  startEditing(index: number) {
    this.editingIndex = index;
    this.organizations$.subscribe((organizations) => {
      this.newOrganization = { ...organizations[index] };
    });
  }

  resetForm() {
    this.newOrganization = {
      fullname: '',
      shortname: '',
      inn: '',
      kpp: '',
      uchreditel: '',
      adresse: '',
      phone: '',
      fillialas: [],
    };
    this.editingIndex = null;
  }
}
