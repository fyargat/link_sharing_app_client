import { FC } from 'react';

import styles from './ui-secondary-button.module.scss';

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export const UiSecondaryButton: FC<IProps> = ({ text, ...props }) => {
  return (
    <button className={styles.button} {...props}>
      {text}
    </button>
  );
};
