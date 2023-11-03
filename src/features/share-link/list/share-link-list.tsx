'use client';

import { useShareLinkList } from './share-link-list.model';
import { UIShareLinkList } from './ui/ui-share-link-list';

interface IProps {}

export const ShareLinkList: React.FC<IProps> = () => {
  const props = useShareLinkList();

  return <UIShareLinkList {...props} />;
};
