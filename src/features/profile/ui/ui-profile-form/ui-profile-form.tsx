'use client';

import { FC } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

import { IUser } from '@/src/shared/types';
import { Direction } from '@/src/shared/ui/ui-input';
import { UITextField } from '@/src/shared/ui/ui-text-field';

import { IProfileForm } from '../../profile-form.model';
import { UIProfileAvatar } from '../ui-profile-avatar';
import styles from './ui-profile-form.module.scss';

interface IProps {
  onChange: (prop: keyof IUser) => (value: string) => void;
  register: UseFormRegister<IProfileForm>;
  avatar: string;
  errors: FieldErrors<IProfileForm>;
}

export const UIProfileForm: FC<IProps> = ({ onChange, register, errors }) => {
  console.log('register', register);

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <UIProfileAvatar />

        <div className={styles.inputs}>
          <UITextField
            direction={Direction.Row}
            label='First name*'
            classNames={{ input: styles.input, labelText: styles.label }}
            error={errors.firstName}
            inputProps={{
              placeholder: 'e.g. John',
              ...register('firstName', {
                required: true,
                onChange: (e: React.FormEvent<HTMLInputElement>) =>
                  onChange('firstName')(e.currentTarget.value),
              }),
            }}
          />

          <UITextField
            direction={Direction.Row}
            label='Last name*'
            error={errors.lastName}
            classNames={{ input: styles.input, labelText: styles.label }}
            inputProps={{
              placeholder: 'e.g. Doe',
              ...register('lastName', {
                required: true,
                onChange: (e: React.FormEvent<HTMLInputElement>) =>
                  onChange('lastName')(e.currentTarget.value),
              }),
            }}
          />
        </div>
      </form>
    </div>
  );
};
