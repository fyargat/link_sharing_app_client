import { useForm } from 'react-hook-form';

export interface ISignInForm {
  email: string;
  password: string;
  test: string;
}

export const useSignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignInForm>();

  const onSubmit = handleSubmit((data) => {
    console.log('data', data);
  });

  return {
    register,
    onSubmit,
  };
};
