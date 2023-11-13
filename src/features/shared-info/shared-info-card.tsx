import { UICard } from '@/src/shared/ui/ui-card';

import { useShareInfoCard } from './shared-info.model';

interface IProps {
  id: string;
}

export const SharedInfoCard: React.FC<IProps> = async ({ id }) => {
  const { user, links } = await useShareInfoCard(id);

  return <UICard user={user} links={links} />;
};
