import { redirect } from 'next/navigation';

import { Route } from '@/src/shared/config/routes';
import { IUserView } from '@/src/shared/types';

import { getSharedInfo } from './shared-info.actions';
import { sortLinks } from './shared-info.lib';

export const useShareInfoCard = async (id: string) => {
  console.log('id', id);

  const sharedInfo = await getSharedInfo(id);

  console.log('sharedInfo', sharedInfo);

  if (!sharedInfo) {
    return redirect(Route.SignUp);
  }

  const {
    firstName = '',
    lastName = '',
    email = '',
    avatar,
  } = sharedInfo?.profile ?? {};

  const fullName = (firstName + ' ' + lastName).trim();

  const sortedLinks = sortLinks(sharedInfo.links, sharedInfo.order);

  return {
    user: {
      email,
      avatar,
      fullName,
    } as IUserView,
    links: sortedLinks,
  };
};
