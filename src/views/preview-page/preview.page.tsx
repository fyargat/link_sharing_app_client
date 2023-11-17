import { ProtectedPage } from '@/src/features/protected-page';
import { UIPreviewLayout } from '@/src/shared/ui/layouts/ui-preview-layout';
import { Header } from '@/src/widgets/header';

import { UIPreviewPage } from './ui/ui-preview-page';

interface IProps {}

export const PreviewPage: React.FC<IProps> = () => {
  return (
    <ProtectedPage>
      <UIPreviewLayout header={<Header />} main={<UIPreviewPage />} />
    </ProtectedPage>
  );
};
