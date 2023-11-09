'use client';

import { useSignUpForm } from './sign-up-form.model';
import { UISignUpForm } from './ui/ui-sign-up-form';

interface IProps {}

export const SignUpForm: React.FC<IProps> = () => {
  const { register, onSubmit } = useSignUpForm();

  return <UISignUpForm register={register} onSubmit={onSubmit} />;
};
