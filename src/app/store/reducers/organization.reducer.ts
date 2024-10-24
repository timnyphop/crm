import { createReducer, on } from '@ngrx/store';
import {
  loadOrganizations,
  addOrganization,
  editOrganization,
} from '../actions/organization.actions';
import { IOrganization } from '../../types/Organization';
import { organization } from '../../data/organization';

export const initialState: IOrganization[] = [];

const _organizationReducer = createReducer(
  initialState,
  on(loadOrganizations, (state) => organization),
  on(addOrganization, (state, { organization }) => [...state, organization]),
  on(editOrganization, (state, { index, organization }) => {
    const updatedOrganizations = [...state];
    updatedOrganizations[index] = organization;
    return updatedOrganizations;
  }),
);

export function organizationReducer(state: any, action: any) {
  return _organizationReducer(state, action);
}
