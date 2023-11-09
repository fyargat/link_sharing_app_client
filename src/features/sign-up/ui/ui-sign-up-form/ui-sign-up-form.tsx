import { BaseSyntheticEvent, FC } from 'react';
import { UseFormRegister } from 'react-hook-form';

import { ICONS } from '@/src/shared/config/icons';
import { UISecondaryButton } from '@/src/shared/ui/ui-secondary-button';
import { UITextField } from '@/src/shared/ui/ui-text-field';

import { ISignInForm } from '../../sign-up-form.model';
import styles from './ui-sign-up-form.module.scss';

interface IProps {
  register: UseFormRegister<ISignInForm>;
  onSubmit: (
    e?: BaseSyntheticEvent<object, object, object> | undefined,
  ) => Promise<void>;
}

export const UISignUpForm: FC<IProps> = ({ onSubmit, register }) => {
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={onSubmit}>
        <div>
          <UITextField
            icon={ICONS['email']}
            label='Email'
            isInvalid={false}
            errorText='Invalid'
            inputProps={{
              defaultValue: '',
              placeholder: 'e.g. john@doe.com',
              type: 'email',
              ...register('email'),
            }}
          />
        </div>
        <div>
          <UITextField
            icon={ICONS['password']}
            label='Create password'
            isInvalid={false}
            errorText='Invalid'
            inputProps={{
              defaultValue: '',
              placeholder: 'Enter your password',
              type: 'password',
              ...register('password'),
            }}
          />
        </div>
        <div>
          <UITextField
            icon={ICONS['password']}
            label='Confirm password'
            isInvalid={false}
            errorText='Invalid'
            inputProps={{
              defaultValue: '',
              placeholder: 'At least 8 characters',
              type: 'password',
              ...register('password'),
            }}
          />
        </div>

        <p className={styles.bottomText}>
          Password must contain at least 8 characters
        </p>

        <div>
          <UISecondaryButton className={styles.button} type='submit'>
            Create new account
          </UISecondaryButton>
        </div>
      </form>
    </div>
  );
};
