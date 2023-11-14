import { IShareLink } from '@/src/shared/types';

import { useOrderQuery } from './order.queries';
import { getNewShareLink } from './share-link.lib';
import {
  useShareLinkCreateMutation,
  useShareLinksQuery,
} from './share-link.queries';

const useSortLinks = (links: IShareLink[], order: number[]) => {
  if (!order.length) {
    return [];
  }

  const sort = (a: IShareLink, b: IShareLink) => {
    const aValue = order.indexOf(a.id);
    const bValue = order.indexOf(b.id);

    return aValue - bValue;
  };

  return [...links].sort(sort);
};

export const useShareLink = () => {
  const { data: order = [], isLoading: isOrderLoading } = useOrderQuery();
  const { data: links = [], isLoading: isLinksLoading } = useShareLinksQuery();
  const { mutate: createLink } = useShareLinkCreateMutation();
  const { refetch } = useOrderQuery();

  const sortedLinks = useSortLinks(links, order);

  const createShareLink = async () => {
    createLink(getNewShareLink());
    await refetch();
  };

  const isFetching = isOrderLoading || isLinksLoading;

  return {
    links: sortedLinks,
    createShareLink,
    isFetching,
  };
};
