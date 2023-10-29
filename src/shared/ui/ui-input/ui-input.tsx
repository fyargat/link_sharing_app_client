import cn from 'classnames';
import { FC } from 'react';

import styles from './ui-input.module.scss';

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon: React.ReactNode;
  isInvalid: boolean;
  errorText: string;
}

export const UIInput: FC<IProps> = ({
  isInvalid,
  errorText,
  label,
  icon,
  ...props
}) => {
  return (
    <div className={styles.container}>
      <label>
        {label && <p className={styles.label}>{label}</p>}

        <div className={styles.inputContainer}>
          <div className={styles.icon}>{icon}</div>
          <input
            className={cn(styles.input, {
              [styles.inputInvalid]: isInvalid,
            })}
            type='text'
            {...props}
          />
          {isInvalid && <p className={styles.errorText}>{errorText}</p>}
        </div>
      </label>
    </div>
  );
};
