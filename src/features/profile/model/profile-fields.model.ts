import { yupResolver } from '@hookform/resolvers/yup';
import debounce from 'lodash/debounce';
import { useCallback, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { useProfile } from '@/src/entities/profile';
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
  const { profile, updateProfile, isSuccess } = useProfile();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updateProfileInfo = useCallback(debounce(updateProfile, 700), []);
  const isFieldsValueUpdated = useRef<boolean>(false);

  const {
    register,
    formState: { errors },
    setValue,
  } = useForm<IProfileForm>({
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
    defaultValues: {
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

  useEffect(() => {
    if (isFieldsValueUpdated.current) return;
    if (!isSuccess) return;
    setValue('firstName', profile?.firstName ?? '');
    setValue('lastName', profile?.lastName ?? '');
    isFieldsValueUpdated.current = true;
  }, [isSuccess, setValue, profile, isFieldsValueUpdated]);

  return {
    onChange: handleChange,
    errors,
    register,
  };
};
