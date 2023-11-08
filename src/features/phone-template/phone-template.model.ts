import { useShareLinkStore } from '@/src/entities/share-link';
import { IUserView } from '@/src/shared/types';

import { useProfileForm } from '../profile/profile-form.model';
import { getLinkSkeletons } from './phone-template.lib';

export const usePhoneTemplate = () => {
  const { links } = useShareLinkStore();
  const { firstName, lastName, email, avatar } = useProfileForm();

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
