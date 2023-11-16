import { FC } from 'react';

import { TextFieldDirection, UITextField } from '@/src/shared/ui/ui-text-field';

import { useProfileFields } from '../../model';
import styles from './ui-profile-fields.module.scss';

interface IProps {}

export const UIProfileFields: FC<IProps> = () => {
  const { register, errors, onChange } = useProfileFields();

  return (
    <div className={styles.container}>
      <UITextField
        direction={TextFieldDirection.Row}
        label='First name*'
        classNames={{ input: styles.field, labelText: styles.label }}
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
        direction={TextFieldDirection.Row}
        label='Last name*'
        error={errors.lastName}
        classNames={{ input: styles.field, labelText: styles.label }}
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
  );
};
