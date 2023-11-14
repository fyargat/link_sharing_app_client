import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

import { signIn, signOut, signUp } from '@/src/shared/api/auth';
import { Route } from '@/src/shared/config/routes';

export const useSignUpMutation = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: signUp,
    onSuccess() {
      router.push(Route.Home);
    },
    onError(error: AxiosError<{ message?: string }>) {
      const message = error?.response?.data?.message ?? 'Error';
      toast.error(message, {
        autoClose: 5000,
      });
    },
  });
};

export const useSignInMutation = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: signIn,
    onSuccess() {
      router.push(Route.Home);
    },
    onError(error: AxiosError<{ message?: string }>) {
      const message = error?.response?.data?.message ?? 'Error';
      toast.error(message, {
        autoClose: 5000,
      });
    },
  });
};

export const useSignOutMutation = (onSuccess?: () => void) => {
  const router = useRouter();

  return useMutation({
    mutationFn: signOut,
    onSuccess() {
      router.push(Route.SignIn);
      onSuccess && onSuccess();
    },
  });
};
