import { IUser } from '@/src/shared/types';

type PhoneTemplateUser = Pick<IUser, 'avatar' | 'email'>;

export interface IPhoneTemplateUser extends PhoneTemplateUser {
  fullName: string;
}
