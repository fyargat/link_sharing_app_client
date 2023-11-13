import { useShareLink } from '@/src/entities/share-link';

import { getNewShareLink } from '../lib';

export const useNewLink = () => {
  const { createShareLink } = useShareLink();

  // const isCreateButtonDisabled = useMemo(() => {
  //   return links.some((link) => !link.text);
  // }, [links]);

  const handleShareLinkCreate = () => {
    createShareLink(getNewShareLink());
  };

  return {
    isDisabled: false,
    onCreate: handleShareLinkCreate,
  };
};
