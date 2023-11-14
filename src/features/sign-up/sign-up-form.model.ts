import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { useSignUpMutation } from '@/src/entities/auth';

export interface ISignUpForm {
  email: string;
  password: string;
  confirmPassword: string;
}

const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid Email')
    .required("Can't be empty")
    .matches(emailRegex, 'Invalid Email'),
  password: yup.string().min(8, 'Minimum 8 symbols').required("Can't be empty"),
  confirmPassword: yup
    .string()
    .required('Please confirm your password.')
    .oneOf([yup.ref('password')], 'Passwords must match'),
});

export const useSignUpForm = () => {
  const { mutate: signUp, isPending: isLoading } = useSignUpMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignUpForm>({
    resolver: yupResolver(validationSchema),
    mode: 'onSubmit',
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = ({ email, password }: ISignUpForm) => {
    signUp({
      email,
      password,
    });
  };

  return {
    register,
    onSubmit: handleSubmit(onSubmit),
    isLoading,
    errors,
  };
};
