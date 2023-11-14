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
import { Platform } from '@/src/shared/config/platforms';
import { IShareLink } from '@/src/shared/types';

import { getLinkTextByPlatform, getPlatformByText } from '../lib';

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
    debounce(updateShareLink, 500),
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
    if (!text.trim().length) {
      debounceUpdateShareLink.cancel();
      return;
    }

    const platformId = getPlatformByText(link, text);

    debounceUpdateShareLink({
      id: link.id,
      text,
      platformId: Number(platformId),
    });
  };

  const handleSelectPlatform = (platformId: Platform) => {
    updateShareLink({
      id: link.id,
      platformId,
      text: getLinkTextByPlatform(link, platformId),
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
