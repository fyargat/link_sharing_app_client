import { PhoneTemplate } from '@/src/features/phone-template';
import { UIPageLayout } from '@/src/shared/ui/layouts/ui-page-layout';
import { Header } from '@/src/widgets/header';

import { ProfileDetails } from './ui';

export const Profile = () => {
  return (
    <UIPageLayout
      header={<Header />}
      left={<PhoneTemplate />}
      right={<ProfileDetails />}
    />
  );
};
