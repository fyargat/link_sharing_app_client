import { useShareLinkStore } from '@/src/entities/share-link';

import { useProfileForm } from '../profile/profile-form.model';
import { getLinkSkeletons } from './phone-template.lib';
import { IPhoneTemplateUser } from './phone-template.types';

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
    } as IPhoneTemplateUser,
    links,
    linkSkeletons,
  };
};
