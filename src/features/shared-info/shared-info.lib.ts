import { IShareLink } from '@/src/shared/types';

export const sortLinks = (links: IShareLink[], order: number[]) => {
  const sort = (a: IShareLink, b: IShareLink) => {
    const aValue = order.indexOf(a.id);
    const bValue = order.indexOf(b.id);

    return aValue - bValue;
  };

  return [...links].sort(sort);
};
