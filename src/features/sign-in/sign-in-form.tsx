'use client';

import { useSignInForm } from './sign-in-form.model';
import { UISignInForm } from './ui/ui-sign-in-form';

interface IProps {}

export const SignInForm: React.FC<IProps> = () => {
  const { register, onSubmit, isLoading, errors } = useSignInForm();

  return (
    <UISignInForm
      register={register}
      onSubmit={onSubmit}
      isLoading={isLoading}
      errors={errors}
    />
  );
};
