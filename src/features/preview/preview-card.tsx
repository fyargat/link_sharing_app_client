'use client';

import { UICard } from '@/src/shared/ui/ui-card';

import { usePreviewCard } from './preview-card.model';

interface IProps {
  copyButton?: React.ReactNode;
}

export const PreviewCard: React.FC<IProps> = ({ copyButton }) => {
  const { links, user } = usePreviewCard();

  return <UICard links={links} user={user} copyButton={copyButton} />;
};
