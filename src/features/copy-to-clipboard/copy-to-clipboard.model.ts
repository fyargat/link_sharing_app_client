import { toast } from 'react-toastify';

export const useCopyToClipboard = () => {
  // temp
  const text = 'copy text';

  const handleCopy = () => {
    toast.success('The link has been copied to your clipboard!');
  };

  return {
    onCopy: handleCopy,
    text,
  };
};
