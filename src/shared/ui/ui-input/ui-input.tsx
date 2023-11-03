import cn from 'classnames';
import { ChangeEvent, FC } from 'react';

import styles from './ui-input.module.scss';

export enum Direction {
  Column = 'column',
  Row = 'row',
}
interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon: React.ReactNode;
  isInvalid: boolean;
  errorText: string;
  direction?: Direction;
  onInputChange: (value: string) => void;
}

export const UIInput: FC<IProps> = ({
  isInvalid,
  errorText,
  label,
  icon,
  direction = Direction.Column,
  onInputChange,
  ...props
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    onInputChange(value);
  };

  return (
    <div className={styles.container}>
      <label
        className={cn(styles.label, {
          [styles.labelRow]: direction === Direction.Row,
        })}
      >
        {label && (
          <p
            className={cn(styles.labelText, {
              [styles.labelTextInvalid]: isInvalid,
              [styles.labelTextRow]: direction === Direction.Row,
            })}
          >
            {label}
          </p>
        )}

        <div className={styles.inputContainer}>
          <div className={styles.icon}>{icon}</div>
          <input
            className={cn(styles.input, {
              [styles.inputInvalid]: isInvalid,
            })}
            type='text'
            onChange={handleChange}
            {...props}
          />
          {isInvalid && <p className={styles.errorText}>{errorText}</p>}
        </div>
      </label>
    </div>
  );
};
