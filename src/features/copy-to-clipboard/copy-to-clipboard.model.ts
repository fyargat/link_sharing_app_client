import { toast } from 'react-toastify';

export const useCopyToClipboard = () => {
  const text = 'copy text';

  const handleCopy = () => {
    toast('The link has been copied to your clipboard!', {});
  };

  return {
    onCopy: handleCopy,
    text,
  };
};
