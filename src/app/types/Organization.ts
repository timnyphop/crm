import { IFillials } from './Fillials';

export interface IOrganization {
  fullname: string;
  shortname: string;
  inn: string;
  kpp: string;
  uchreditel: string;
  adresse: string;
  phone: string;
  fillialas: IFillials[];
}
