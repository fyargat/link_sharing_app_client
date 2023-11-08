'use client';

import { usePreviewCard } from './preview-card.model';
import { UIPreviewCard } from './ui/ui-preview-card';

interface IProps {}

export const PreviewCard: React.FC<IProps> = () => {
  const { links, user } = usePreviewCard();

  return <UIPreviewCard links={links} user={user} />;
};
