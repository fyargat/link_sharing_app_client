import { useProfileInfoQuery, useProfileStore } from '@/src/entities/profile';
import { useShareLinksQuery } from '@/src/entities/share-link';
import { IUserView } from '@/src/shared/types';

export const usePreviewCard = () => {
  const { avatar } = useProfileStore();

  const { data: links = [] } = useShareLinksQuery();

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
