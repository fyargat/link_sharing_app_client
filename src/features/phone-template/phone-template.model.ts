import { IShareLink, IUser } from '@/src/shared/types';

import { getLinkSkeletons } from './phone-template.lib';
import { IPhoneTemplateUser } from './phone-template.types';

export const usePhoneTemplate = () => {
  // temp
  const user = { avatar: '', firstName: '', lastName: '', email: '' } as IUser;
  const links = [] as IShareLink[];

  const { firstName = '', lastName = '', ...rest } = user;
  const fullName = (firstName + ' ' + lastName).trim();
  const linkSkeletons = getLinkSkeletons(links.length);

  return {
    user: {
      ...rest,
      fullName,
    } as IPhoneTemplateUser,
    links,
    linkSkeletons,
  };
};
