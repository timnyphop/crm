import { createAction, props } from '@ngrx/store';
import { IOrganization } from '../../types/Organization';

export const loadOrganizations = createAction(
  '[Organization] Load Organizations',
);
export const addOrganization = createAction(
  '[Organization] Add Organization',
  props<{ organization: IOrganization }>(),
);
export const editOrganization = createAction(
  '[Organization] Edit Organization',
  props<{ index: number; organization: IOrganization }>(),
);
