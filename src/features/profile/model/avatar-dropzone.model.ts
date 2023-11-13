import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { toast } from 'react-toastify';

import { useProfileInfoQuery } from '@/src/entities/profile';
import { useProfileInfoMutation } from '@/src/entities/profile/queries';
import { useEdgeStore } from '@/src/shared/lib/edgestore';

export const useAvatarDropzone = () => {
  const { edgestore } = useEdgeStore();
  const { data: profile } = useProfileInfoQuery();
  const { mutate: updateProfileInfo } = useProfileInfoMutation();
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
            updateProfileInfo({
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
