import cn from 'classnames';
import { FC, PropsWithChildren } from 'react';

import styles from './ui-secondary-button.module.scss';

interface IProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    PropsWithChildren {
  className?: string;
}

export const UISecondaryButton: FC<IProps> = ({
  className = '',
  children,
  ...props
}) => {
  return (
    <button
      className={cn(styles.button, {
        [className]: className,
      })}
      {...props}
    >
      {children}
    </button>
  );
};
