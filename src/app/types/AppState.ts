import { AuthState } from '../store/reducers/auth.reducer';
import { IOrganization } from './Organization';

export interface IAppState {
  auth: AuthState;
  organizations: IOrganization[];
}
