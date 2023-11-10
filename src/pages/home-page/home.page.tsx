import { PhoneTemplate } from '@/src/features/phone-template';
import { ProtectedPage } from '@/src/features/protected-page';
import { UIPageLayout } from '@/src/shared/ui/layouts/ui-page-layout';
import { Header } from '@/src/widgets/header';

import { HomeLinks } from './ui';

export const Home = () => {
  return (
    <ProtectedPage>
      <UIPageLayout
        header={<Header />}
        left={<PhoneTemplate />}
        right={<HomeLinks />}
      />
    </ProtectedPage>
  );
};

// export default protectedPage(Home);
