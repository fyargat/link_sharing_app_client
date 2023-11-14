import { toast } from 'react-toastify';

import { useProfile } from '@/src/entities/profile';
import { getURL } from '@/src/shared/lib/url';

export const useCopyToClipboard = () => {
  const { profile } = useProfile();

  const copyText = getURL(`/links/${profile?.id}`);

  const handleCopy = () => {
    toast.success('The link has been copied to your clipboard!');
  };

  return {
    onCopy: handleCopy,
    copyText,
  };
};
