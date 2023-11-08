import { useShareLinkStore } from '@/src/entities/share-link';
import { IUserView } from '@/src/shared/types';

import { useProfileForm } from '../profile/profile-form.model';

export const usePreviewCard = () => {
  const { links } = useShareLinkStore();
  const { firstName, lastName, email, avatar } = useProfileForm();

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
