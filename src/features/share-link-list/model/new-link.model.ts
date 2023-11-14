import { toast } from 'react-toastify';

import { useShareLink } from '@/src/entities/share-link';

export const useNewLink = () => {
  const { createShareLink } = useShareLink();

  // const isCreateButtonDisabled = useMemo(() => {
  //   return links.some((link) => !link.text);
  // }, [links]);

  const handleShareLinkCreate = async () => {
    await createShareLink();
    toast.success('New link has been created');
  };

  return {
    isDisabled: false,
    onCreate: handleShareLinkCreate,
  };
};
