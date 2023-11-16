import cn from 'classnames';
import { FC } from 'react';

import { SIZES, SpinnerSize } from './ui-spinner.config';
import styles from './ui-spinner.module.scss';

interface IProps {
  size?: SpinnerSize;
  className?: string;
}

export const UISpinner: FC<IProps> = ({
  className = '',
  size = SpinnerSize.Medium,
}) => {
  const sizeNumber = SIZES[size] ?? SIZES[SpinnerSize.Medium];

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
