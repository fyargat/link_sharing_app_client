import { BaseSyntheticEvent, FC } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

import { ICONS } from '@/src/shared/config/icons';
import { UIButtonSpinner } from '@/src/shared/ui/ui-button-spinner';
import { UISecondaryButton } from '@/src/shared/ui/ui-secondary-button';
import { UITextField } from '@/src/shared/ui/ui-text-field';

import { ISignInForm } from '../../sign-in-form.model';
import styles from './ui-sign-in-form.module.scss';

interface IProps {
  register: UseFormRegister<ISignInForm>;
  onSubmit: (
    e?: BaseSyntheticEvent<object, object, object> | undefined,
  ) => Promise<void>;
  isLoading: boolean;
  errors: FieldErrors<ISignInForm>;
}

export const UISignInForm: FC<IProps> = ({
  errors,
  onSubmit,
  register,
  isLoading,
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
              ...register('email'),
            }}
          />
        </div>
        <div>
          <UITextField
            icon={ICONS['password']}
            label='Password'
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
          <UISecondaryButton
            className={styles.button}
            disabled={isLoading}
            type='submit'
          >
            {isLoading ? <UIButtonSpinner /> : 'Login'}
          </UISecondaryButton>
        </div>
      </form>
    </div>
  );
};
