import cn from 'classnames';
import { FC } from 'react';

import styles from './ui-spinner.module.scss';

export enum SpinnerSize {
  Small = 'sm',
  Medium = 'md',
  Large = 'lg',
}

const SIZES = {
  [SpinnerSize.Small]: 10,
  [SpinnerSize.Medium]: 20,
  [SpinnerSize.Large]: 30,
};

interface IProps {
  size?: SpinnerSize;
  className?: string;
}

export const UISpinner: FC<IProps> = ({
  className = '',
  size = SpinnerSize.Medium,
}) => {
  const sizeNumber = SIZES[size];

  return (
    <div
      className={cn(styles.spinner, {
        [className]: className,
      })}
      style={{
        width: sizeNumber,
        height: sizeNumber,
      }}
    >
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
