import { useProfileInfoMutation, useProfileInfoQuery } from './profile.queries';

export const useProfile = () => {
  const { data: profile } = useProfileInfoQuery();
  const { mutate: updateProfile } = useProfileInfoMutation();

  return {
    profile,
    updateProfile,
  };
};
