import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { useSignInMutation } from '@/src/entities/auth';

export interface ISignInForm {
  email: string;
  password: string;
}

const regex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid Email')
    .required("Can't be empty")
    .matches(regex, 'Invalid Email'),
  password: yup.string().min(8, 'Minimum 8 symbols').required("Can't be empty"),
});

export function useSignInForm() {
  const { mutate: signIn, isPending: isLoading } = useSignInMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignInForm>({
    resolver: yupResolver(validationSchema),
    mode: 'onSubmit',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: ISignInForm) => {
    signIn(data);
  };

  return {
    register,
    onSubmit: handleSubmit(onSubmit),
    isLoading,
    errors,
  };
}
