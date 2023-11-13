import { IShareLink } from '@/src/shared/types';

import { useOrderQuery } from './order.queries';
import { getNewShareLink } from './share-link.lib';
import {
  useShareLinkCreateMutation,
  useShareLinksQuery,
} from './share-link.queries';

const useSortLinks = (links: IShareLink[]) => {
  const { data: order = [] } = useOrderQuery();

  const sort = (a: IShareLink, b: IShareLink) => {
    const aValue = order.indexOf(a.id);
    const bValue = order.indexOf(b.id);

    return aValue - bValue;
  };

  return [...links].sort(sort);
};

export const useShareLink = () => {
  const { data: links = [], isFetching } = useShareLinksQuery();
  const { mutate: createLink } = useShareLinkCreateMutation();
  const { refetch } = useOrderQuery();

  const sortedLinks = useSortLinks(links);

  const createShareLink = async () => {
    createLink(getNewShareLink());
    await refetch();
  };

  return {
    links: sortedLinks,
    createShareLink,
    isFetching,
  };
};
