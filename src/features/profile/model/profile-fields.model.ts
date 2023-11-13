import { yupResolver } from '@hookform/resolvers/yup';
import debounce from 'lodash/debounce';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { useProfileInfoQuery } from '@/src/entities/profile';
import { useProfileInfoMutation } from '@/src/entities/profile/queries';
import { IUser } from '@/src/shared/types';

export interface IProfileForm {
  firstName: string;
  lastName: string;
}

const validationSchema = yup.object().shape({
  firstName: yup.string().required("First name can't be empty"),
  lastName: yup.string().required("Last name can't be empty"),
});

export const useProfileFields = () => {
  const { data: profile } = useProfileInfoQuery();
  const profileInfo = useProfileInfoMutation();

  const updateProfileInfo = useCallback(debounce(profileInfo.mutate, 300), []);

  const {
    register,
    formState: { errors },
  } = useForm<IProfileForm>({
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
    defaultValues: {
      firstName: '',
      lastName: '',
    },
    values: {
      firstName: profile?.firstName ?? '',
      lastName: profile?.lastName ?? '',
    },
  });

  const handleChange = (prop: keyof IUser) => (value: string) => {
    if (!value.trim()) {
      updateProfileInfo.cancel();
      return;
    }

    updateProfileInfo({
      [prop]: value,
    });
  };

  return {
    onChange: handleChange,
    errors,
    register,
  };
};
