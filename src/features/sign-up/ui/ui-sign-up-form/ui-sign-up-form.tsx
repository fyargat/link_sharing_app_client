import { BaseSyntheticEvent, FC } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

import { ICONS } from '@/src/shared/config/icons';
import { UIButtonSpinner } from '@/src/shared/ui/ui-button-spinner';
import { UISecondaryButton } from '@/src/shared/ui/ui-secondary-button';
import { UITextField } from '@/src/shared/ui/ui-text-field';

import { ISignUpForm } from '../../sign-up-form.model';
import styles from './ui-sign-up-form.module.scss';

interface IProps {
  register: UseFormRegister<ISignUpForm>;
  onSubmit: (
    e?: BaseSyntheticEvent<object, object, object> | undefined,
  ) => Promise<void>;
  isLoading: boolean;
  errors: FieldErrors<ISignUpForm>;
}

export const UISignUpForm: FC<IProps> = ({
  onSubmit,
  register,
  isLoading,
  errors,
}) => {
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={onSubmit}>
        <div>
          <UITextField
            icon={ICONS['email']}
            label='Email'
            error={errors.email}
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
            error={errors.password}
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
            error={errors.confirmPassword}
            inputProps={{
              defaultValue: '',
              placeholder: 'At least 8 characters',
              type: 'password',
              ...register('confirmPassword'),
            }}
          />
        </div>

        <div>
          <UISecondaryButton className={styles.button} type='submit'>
            {isLoading ? <UIButtonSpinner /> : 'Create new account'}
          </UISecondaryButton>
        </div>
      </form>
    </div>
  );
};
