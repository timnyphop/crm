import { createSelector } from '@ngrx/store';
import { IAppState } from '../../types/AppState';
import { IOrganization } from '../../types/Organization';

export const selectOrganizations = createSelector(
  (state: IAppState) => state.organizations,
  (organizations: IOrganization[]) => organizations,
);
