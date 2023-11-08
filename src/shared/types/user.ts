export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;
}

type UserWithoutName = Pick<IUser, 'avatar' | 'email'>;

export interface IUserView extends UserWithoutName {
  fullName: string;
}
