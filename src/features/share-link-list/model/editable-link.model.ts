import { yupResolver } from '@hookform/resolvers/yup';
import debounce from 'lodash/debounce';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import * as yup from 'yup';

import {
  useShareLinkRemoveMutation,
  useShareLinkUpdateMutation,
} from '@/src/entities/share-link/share-link.queries';
import { IShareLink } from '@/src/shared/types';

export interface IEditableShareLinkInput {
  text: string;
}

const validationSchema = yup.object().shape({
  text: yup.string().required("Can't be empty"),
});

export const useEditableLink = (link: IShareLink) => {
  const { mutate: removeShareLink } = useShareLinkRemoveMutation();
  const { mutate: updateShareLink } = useShareLinkUpdateMutation();
  const debounceUpdateShareLink = useCallback(
    debounce(updateShareLink, 300),
    [],
  );

  const {
    register,
    formState: { errors },
  } = useForm<IEditableShareLinkInput>({
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
    defaultValues: {
      text: '',
    },
    values: {
      text: link.text ?? '',
    },
  });

  const handleChange = (text: string) => {
    if (!text.trim()) {
      debounceUpdateShareLink.cancel();
      return;
    }

    debounceUpdateShareLink({
      id: link.id,
      text,
    });
  };

  const handleSelectPlatform = (platformId: number) => {
    updateShareLink({
      id: link.id,
      platformId,
    });
  };

  const handleShareLinkRemove = () => {
    removeShareLink(link.id);
    toast.error('Link has been deleted');
  };

  return {
    register,
    errors,
    onRemove: handleShareLinkRemove,
    onSelectPlatform: handleSelectPlatform,
    onChange: handleChange,
  };
};
