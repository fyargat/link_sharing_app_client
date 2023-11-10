import { useQuery, useQueryClient } from '@tanstack/react-query';

import { fetchSessionInfo } from '@/src/shared/api/auth';

const sessionKey = ['session'];

export const useSessionQuery = () => {
  return useQuery({
    queryKey: sessionKey,
    queryFn: fetchSessionInfo,
    retry: 0,
    staleTime: 5 * 60 * 1000,
  });
};

export const useResetSession = () => {
  const queryClient = useQueryClient();
  return () => queryClient.removeQueries();
};
