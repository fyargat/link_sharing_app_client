import { IShareLink } from '../types';

export interface IAuthBody {
  email: string;
  password: string;
}

export interface IProfileData {
  id: number;
  firstName: string;
  lastName: string;
  avatar: string;
  ownerId: number;
  email: string;
}

export interface IProfileRequestData {
  firstName?: string;
  lastName?: string;
  avatar?: string;
}

export interface IShareLinksResponseData {
  data: IShareLink[];
}

export interface IOrderResponseData {
  data: number[];
}

export interface ICreateShareLinkResponseData extends IShareLink {}
