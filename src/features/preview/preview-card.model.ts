import { useProfile, useProfileInfoQuery } from '@/src/entities/profile';
import { useShareLink } from '@/src/entities/share-link';
import { IUserView } from '@/src/shared/types';

export const usePreviewCard = () => {
  const { avatar } = useProfile();

  const { links } = useShareLink();

  const { data: profile } = useProfileInfoQuery();

  const { firstName = '', lastName = '', email = '' } = profile ?? {};

  const fullName = (firstName + ' ' + lastName).trim();

  return {
    user: {
      email,
      avatar,
      fullName,
    } as IUserView,
    links,
  };
};
