import { yupResolver } from '@hookform/resolvers/yup';
import debounce from 'lodash/debounce';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { useProfile, useProfileInfoQuery } from '@/src/entities/profile';
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

export const useProfileForm = () => {
  const { avatar } = useProfile();

  const { data } = useProfileInfoQuery();
  const profileInfoMutation = useProfileInfoMutation();

  const profileInfoMutate = useCallback(
    debounce(profileInfoMutation.mutate, 300),
    [],
  );

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
      firstName: data?.firstName ?? '',
      lastName: data?.lastName ?? '',
    },
  });

  const handleChange = (prop: keyof IUser) => (value: string) => {
    if (!value.trim()) {
      profileInfoMutate.cancel();
      return;
    }

    profileInfoMutate({
      [prop]: value,
    });
  };

  return {
    onChange: handleChange,
    errors,
    avatar,
    register,
  };
};
