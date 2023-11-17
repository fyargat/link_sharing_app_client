import { UICard } from '@/src/shared/ui/ui-card';

import { useShareInfoCard } from './shared-info.model';

interface IProps {
  id: string;
}

export const SharedInfoCard: React.FC<IProps> = async ({ id }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { user, links } = await useShareInfoCard(id);

  return <UICard user={user} links={links} />;
};
