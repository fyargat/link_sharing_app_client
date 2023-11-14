import { toast } from 'react-toastify';

import { useProfile } from '@/src/entities/profile';

export const useCopyToClipboard = () => {
  const { profile } = useProfile();

  // temp
  const text = `http://localhost:3000/links/${profile?.id}`;

  const handleCopy = () => {
    toast.success('The link has been copied to your clipboard!');
  };

  return {
    onCopy: handleCopy,
    text,
  };
};
