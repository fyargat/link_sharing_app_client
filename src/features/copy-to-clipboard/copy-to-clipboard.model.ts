import { toast } from 'react-toastify';

export const useCopyToClipboard = () => {
  const text = 'copy text';

  const handleCopy = () => {
    toast('The link has been copied to your clipboard!', {
      autoClose: 1000,
      hideProgressBar: true,
      pauseOnHover: false,
    });
  };

  return {
    onCopy: handleCopy,
    text,
  };
};
