import { FC, PropsWithChildren } from 'react';

import styles from './ui-secondary-button.module.scss';

interface IProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    PropsWithChildren {}

export const UISecondaryButton: FC<IProps> = ({ children, ...props }) => {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  );
};
