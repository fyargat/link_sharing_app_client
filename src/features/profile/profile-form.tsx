'use client';

import { useProfileForm } from './profile-form.model';
import { UIProfileForm } from './ui/ui-profile-form';

interface IProps {}

export const ProfileForm: React.FC<IProps> = () => {
  const { onChange, register, avatar, errors } = useProfileForm();

  return (
    <UIProfileForm
      onChange={onChange}
      register={register}
      avatar={avatar}
      errors={errors}
    />
  );
};
