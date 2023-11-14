import cn from 'classnames';
import { FC, FocusEvent, InputHTMLAttributes, PropsWithRef } from 'react';
import { FieldError } from 'react-hook-form';

import styles from './ui-text-field.module.scss';

export interface IInputClassName {
  input?: string;
  container?: string;
  label?: string;
  labelText?: string;
}

export enum Direction {
  Column = 'column',
  Row = 'row',
}
interface IProps {
  label?: string;
  icon?: React.ReactNode;
  direction?: Direction;
  isSelectText?: boolean;
  classNames?: IInputClassName;
  inputProps?: PropsWithRef<InputHTMLAttributes<HTMLInputElement>>;
  error?: FieldError | undefined;
}

export const UITextField: FC<IProps> = ({
  label,
  icon,
  direction = Direction.Column,
  isSelectText = false,
  classNames = {},
  inputProps,
  error,
}) => {
  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    if (!isSelectText) return;

    e.target.select();
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
              [styles.labelTextInvalid]: error,
              [styles.labelTextRow]: direction === Direction.Row,
              [classNames?.labelText as string]: classNames.labelText,
            })}
          >
            {label}
          </p>
        )}

        <div
          className={cn(styles.inputContainer, {
            [styles.inputContainerRow]: direction === Direction.Row,
          })}
        >
          {icon && <div className={styles.icon}>{icon}</div>}
          <input
            className={cn(styles.input, {
              [styles.inputInvalid]: error,
              [classNames?.input as string]: classNames.input,
            })}
            type='text'
            onFocus={handleFocus}
            {...inputProps}
          />
          {error && <p className={styles.errorText}>{error.message}</p>}
        </div>
      </label>
    </div>
  );
};
