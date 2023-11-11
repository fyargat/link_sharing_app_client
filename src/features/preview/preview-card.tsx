'use client';

import { usePreviewCard } from './preview-card.model';
import { UIPreviewCard } from './ui/ui-preview-card';

interface IProps {
  copyButton?: React.ReactNode;
}

export const PreviewCard: React.FC<IProps> = ({ copyButton }) => {
  const { links, user } = usePreviewCard();

  return <UIPreviewCard links={links} user={user} copyButton={copyButton} />;
};
