import { useProfile, useProfileInfoQuery } from '@/src/entities/profile';
import { useShareLink } from '@/src/entities/share-link';
import { IUserView } from '@/src/shared/types';

import { getLinkSkeletons } from './phone-template.lib';

export const usePhoneTemplate = () => {
  const { avatar } = useProfile();

  const { links } = useShareLink();

  const { data: profile } = useProfileInfoQuery();

  const { firstName = '', lastName = '', email = '' } = profile ?? {};

  const fullName = (firstName + ' ' + lastName).trim();
  const linkSkeletons = getLinkSkeletons(links.length);

  return {
    user: {
      email,
      avatar,
      fullName,
    } as IUserView,
    links,
    linkSkeletons,
  };
};
