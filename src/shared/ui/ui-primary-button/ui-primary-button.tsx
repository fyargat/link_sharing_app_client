import cn from 'classnames';
import { PropsWithChildren } from 'react';

import styles from './ui-primary-button.module.scss';

interface IProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    PropsWithChildren {
  className?: string;
}

export const UIPrimaryButton: React.FC<IProps> = ({
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
