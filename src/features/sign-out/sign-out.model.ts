import { useSignOutMutation } from '@/src/entities/auth';
import { useResetSession } from '@/src/entities/session';

export const useSignOut = () => {
  const resetSession = useResetSession();

  const { mutate: signOut, isPending: isLoading } =
    useSignOutMutation(resetSession);

  return {
    isLoading,
    onSignOut: signOut,
  };
};
