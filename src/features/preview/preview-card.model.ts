import { useProfileInfoQuery, useProfileStore } from '@/src/entities/profile';
import { useShareLinkStore } from '@/src/entities/share-link';
import { IUserView } from '@/src/shared/types';

export const usePreviewCard = () => {
  const { links } = useShareLinkStore();
  const { avatar } = useProfileStore();

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
