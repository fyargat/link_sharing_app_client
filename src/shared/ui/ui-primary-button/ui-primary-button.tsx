import { PropsWithChildren } from 'react';

import styles from './ui-primary-button.module.scss';

interface IProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    PropsWithChildren {}

export const UIPrimaryButton: React.FC<IProps> = ({ children, ...props }) => {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  );
};
