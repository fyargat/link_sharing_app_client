import cn from 'classnames';
import { ChangeEvent, FC, FocusEvent } from 'react';

import styles from './ui-input.module.scss';

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
interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: React.ReactNode;
  isInvalid: boolean;
  errorText: string;
  direction?: Direction;
  isSelectText?: boolean;
  onInputChange: (value: string) => void;
  classNames?: IInputClassName;
}

export const UIInput: FC<IProps> = ({
  isInvalid,
  errorText,
  label,
  icon,
  direction = Direction.Column,
  onInputChange,
  isSelectText = false,
  classNames = {},
  ...props
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    onInputChange(value);
  };

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
              [styles.labelTextInvalid]: isInvalid,
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
              [styles.inputInvalid]: isInvalid,
              [classNames?.input as string]: classNames.input,
            })}
            type='text'
            onChange={handleChange}
            onFocus={handleFocus}
            {...props}
          />
          {isInvalid && <p className={styles.errorText}>{errorText}</p>}
        </div>
      </label>
    </div>
  );
};
