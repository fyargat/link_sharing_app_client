import { PhoneTemplate } from '@/src/features/phone-template';
import { ProtectedPage } from '@/src/features/protected-page';
import { UIPageLayout } from '@/src/shared/ui/layouts/ui-page-layout';
import { UIFooter } from '@/src/shared/ui/ui-footer';
import { Header } from '@/src/widgets/header';

import { HomeLinks } from './ui';

export const Home = () => {
  return (
    <ProtectedPage>
      <UIPageLayout
        header={<Header />}
        left={<PhoneTemplate />}
        right={<HomeLinks />}
        footer={<UIFooter />}
      />
    </ProtectedPage>
  );
};

// export default protectedPage(Home);
