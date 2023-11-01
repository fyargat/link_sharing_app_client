import { PhoneTemplate } from '@/src/features/phone-template';
import { UIPageLayout } from '@/src/shared/ui/layouts/ui-page-layout';
import { Header } from '@/src/widgets/header';

export const Home = () => {
  return (
    <UIPageLayout
      header={<Header />}
      left={<PhoneTemplate />}
      right={<p>Test</p>}
    />
  );
};
