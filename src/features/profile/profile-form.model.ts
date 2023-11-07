import { useProfileStore } from '@/src/entities/profile';
import { IUser } from '@/src/shared/types';

export const useProfileForm = () => {
  const { update, firstName, lastName, email, avatar } = useProfileStore();

  const handleChange = (prop: keyof IUser) => (value: string) => {
    update(prop, value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submit');
  };

  return {
    onSubmit: handleSubmit,
    onChange: handleChange,
    firstName,
    lastName,
    email,
    avatar,
  };
};
