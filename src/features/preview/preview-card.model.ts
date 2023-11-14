import { useProfile } from '@/src/entities/profile';
import { useShareLink } from '@/src/entities/share-link';
import { IUserView } from '@/src/shared/types';

export const usePreviewCard = () => {
  const { links } = useShareLink();

  const { profile } = useProfile();

  const { firstName = '', lastName = '', email = '', avatar } = profile ?? {};

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
