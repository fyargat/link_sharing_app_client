import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

import { signIn } from '@/src/shared/api/auth';
import { Route } from '@/src/shared/config/routes';

export interface ISignInForm {
  email: string;
  password: string;
}

export function useSignInForm() {
  const router = useRouter();

  const { register, handleSubmit } = useForm<ISignInForm>();

  const signUpMutation = useMutation({
    mutationFn: signIn,
    onSuccess() {
      void router.push(Route.Home);
    },
  });

  const errorMessage = signUpMutation.error ? 'Sign up failed' : undefined;

  return {
    register,
    errorMessage,
    onSubmit: handleSubmit((data) => signUpMutation.mutate(data)),
    isLoading: signUpMutation.isPending,
  };
}
