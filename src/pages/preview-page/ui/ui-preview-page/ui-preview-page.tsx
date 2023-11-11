import { FC } from 'react';

import { CopyToClipboard } from '@/src/features/copy-to-clipboard';
import { PreviewCard } from '@/src/features/preview';

interface IProps {}

export const UIPreviewPage: FC<IProps> = () => {
  return <PreviewCard copyButton={<CopyToClipboard />} />;
};
