import { PhoneTemplate } from '@/src/features/phone-template';
import { UIPageLayout } from '@/src/shared/ui/layouts/ui-page-layout';
import { Header } from '@/src/widgets/header';

import { HomeLinks } from './ui';

export const Home = () => {
  return (
    <UIPageLayout
      header={<Header />}
      left={<PhoneTemplate />}
      right={<HomeLinks />}
    />
  );
};
