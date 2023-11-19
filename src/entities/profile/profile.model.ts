import { useProfileInfoMutation, useProfileInfoQuery } from './profile.queries';

export const useProfile = () => {
  const { data: profile, isLoading, isSuccess } = useProfileInfoQuery();
  const { mutate: updateProfile } = useProfileInfoMutation();

  return {
    profile,
    updateProfile,
    isLoading,
    isSuccess,
  };
};
