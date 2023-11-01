import { MIN_LINK_NUMBER } from './phone-template.config';

export const getLinkSkeletons = (linksLength: number): string[] => {
  const fillerNum =
    linksLength < MIN_LINK_NUMBER ? MIN_LINK_NUMBER - linksLength : 0;
  return Array(fillerNum).fill('_') as string[];
};
