import { PhoneTemplate } from '@/src/features/phone-template';
import { ProtectedPage } from '@/src/features/protected-page';
import { UIPageLayout } from '@/src/shared/ui/layouts/ui-page-layout';
import { Header } from '@/src/widgets/header';

import { ProfileDetails } from './ui';

export const Profile = () => {
  return (
    <ProtectedPage>
      <UIPageLayout
        header={<Header />}
        left={<PhoneTemplate />}
        right={<ProfileDetails />}
      />
    </ProtectedPage>
  );
};
