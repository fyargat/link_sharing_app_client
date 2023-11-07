'use client';

import { FC } from 'react';

import { IUser } from '@/src/shared/types';
import { Direction, UIInput } from '@/src/shared/ui/ui-input';
import { UISecondaryButton } from '@/src/shared/ui/ui-secondary-button';

import { UIProfileAvatar } from '../ui-profile-avatar';
import styles from './ui-profile-form.module.scss';

interface IProps extends IUser {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onChange: (prop: keyof IUser) => (value: string) => void;
}

export const UIProfileForm: FC<IProps> = ({
  onSubmit,
  onChange,
  firstName,
  lastName,
  email,
}) => {
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={onSubmit}>
        <UIProfileAvatar />

        <div className={styles.inputs}>
          <div>
            <UIInput
              direction={Direction.Row}
              label='First name*'
              isInvalid={false}
              onInputChange={onChange('firstName')}
              errorText="Can't be empty"
              classNames={{ input: styles.input, labelText: styles.label }}
              placeholder='e.g. John'
              value={firstName}
            />
          </div>

          <div>
            <UIInput
              direction={Direction.Row}
              label='Last name*'
              isInvalid={false}
              onInputChange={onChange('lastName')}
              errorText="Can't be empty"
              classNames={{ input: styles.input, labelText: styles.label }}
              placeholder='e.g. Doe'
              value={lastName}
            />
          </div>

          <div>
            <UIInput
              direction={Direction.Row}
              label='Email'
              isInvalid={false}
              errorText="Can't be empty"
              onInputChange={onChange('email')}
              classNames={{ input: styles.input, labelText: styles.label }}
              type='email'
              placeholder='e.g. johndoe@gmail.com'
              value={email}
            />
          </div>
        </div>

        <footer className={styles.footer}>
          <UISecondaryButton className={styles.saveButton} type='submit'>
            Save
          </UISecondaryButton>
        </footer>
      </form>
    </div>
  );
};
