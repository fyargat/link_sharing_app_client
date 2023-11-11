export interface IAuthBody {
  email: string;
  password: string;
}

export interface IProfileResponseData {
  id: number;
  firstName: string;
  lastName: string;
  ownerId: number;
  email: string;
}

export interface IProfileRequestData {
  firstName?: string;
  lastName?: string;
}
