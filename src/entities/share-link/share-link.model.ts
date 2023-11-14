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
  const { data: order = [], isFetching: isOrderFetching } = useOrderQuery();
  const { data: links = [], isFetching: isLinksFetching } =
    useShareLinksQuery();
  const { mutate: createLink } = useShareLinkCreateMutation();
  const { refetch } = useOrderQuery();

  const sortedLinks = useSortLinks(links, order);

  const createShareLink = async () => {
    createLink(getNewShareLink());
    await refetch();
  };

  const isFetching = isOrderFetching || isLinksFetching;

  return {
    links: sortedLinks,
    createShareLink,
    isFetching,
  };
};
