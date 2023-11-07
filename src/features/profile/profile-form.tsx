'use client';

import { useProfileForm } from './profile-form.model';
import { UIProfileForm } from './ui/ui-profile-form';

interface IProps {}

export const ProfileForm: React.FC<IProps> = () => {
  const { onSubmit, onChange, firstName, lastName, email, avatar } =
    useProfileForm();

  return (
    <UIProfileForm
      onSubmit={onSubmit}
      onChange={onChange}
      firstName={firstName}
      lastName={lastName}
      email={email}
      avatar={avatar}
    />
  );
};
