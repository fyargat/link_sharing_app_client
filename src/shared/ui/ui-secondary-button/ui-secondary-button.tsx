import { FC } from 'react';

import styles from './ui-secondary-button.module.scss';

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export const UISecondaryButton: FC<IProps> = ({ text, ...props }) => {
  return (
    <button className={styles.button} {...props}>
      {text}
    </button>
  );
};
