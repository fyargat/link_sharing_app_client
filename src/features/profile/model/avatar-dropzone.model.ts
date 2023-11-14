import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { toast } from 'react-toastify';

import { useProfile } from '@/src/entities/profile';
import { useEdgeStore } from '@/src/shared/lib/edgestore';

export const useAvatarDropzone = () => {
  const { edgestore } = useEdgeStore();
  const { profile, updateProfile } = useProfile();
  const [isLoading, setIsLoading] = useState(false);

  const upload = async (file: File) => {
    try {
      const response = await edgestore.publicFiles.upload({
        file,
      });
      return response;
    } catch (error) {
      console.log('error', error);
    }
  };

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];

    if (file) {
      setIsLoading(true);

      upload(file)
        .then((response) => {
          response &&
            response?.url &&
            updateProfile({
              avatar: response.url,
            });
          toast.success('Profile picture was successfully changed!');
        })
        .catch((error) => console.log('error', error))
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    onDrop,
    accept: {
      'image/jpeg': [],
      'image/png': [],
    },
    disabled: isLoading,
    minSize: 0,
    maxSize: 5242880,
  });

  return {
    getInputProps,
    getRootProps,
    avatar: profile?.avatar,
    isLoading,
  };
};
