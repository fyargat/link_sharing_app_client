import { ProtectedPage } from '@/src/features/protected-page';

import { UIPreviewPage } from './ui/ui-preview-page';

interface IProps {}

export const PreviewPage: React.FC<IProps> = () => {
  return (
    <ProtectedPage>
      <UIPreviewPage />
    </ProtectedPage>
  );
};
