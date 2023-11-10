import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { useResetSession } from '@/src/entities/session';
import { signOut } from '@/src/shared/api/auth';
import { Route } from '@/src/shared/config/routes';

export const useSignOut = () => {
  const resetSession = useResetSession();
  const router = useRouter();

  const signOutMutation = useMutation({
    mutationFn: signOut,
    onSuccess() {
      router.push(Route.SignIn);
      resetSession();
    },
  });

  const handleSignOut = () => {
    signOutMutation.mutate();
  };

  return {
    isLoading: signOutMutation.isPending,
    onSignOut: handleSignOut,
  };
};
