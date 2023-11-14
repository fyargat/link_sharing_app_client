import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { fetchProfileInfo, updateProfileInfo } from '@/src/shared/api/profile';

const profileInfoKey = ['profile-info'];

export const useProfileInfoQuery = () => {
  return useQuery({
    queryKey: profileInfoKey,
    queryFn: fetchProfileInfo,
    retry: 0,
    staleTime: 5 * 60 * 1000,
  });
};

export const useProfileInfoMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateProfileInfo,
    onSuccess: (data) => {
      queryClient.setQueryData(profileInfoKey, data);
    },
  });
};
