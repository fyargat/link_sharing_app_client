'use client';

import { usePhoneTemplate } from './phone-template.model';
import { UIPhoneTemplate } from './ui';

interface IProps {}

export const PhoneTemplate: React.FC<IProps> = () => {
  const { user, links, linkSkeletons } = usePhoneTemplate();

  return (
    <UIPhoneTemplate user={user} linkSkeletons={linkSkeletons} links={links} />
  );
};
