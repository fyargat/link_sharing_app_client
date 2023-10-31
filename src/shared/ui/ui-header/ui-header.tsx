import { FC } from 'react';

import { UILogo } from '../ui-logo';
import styles from './ui-header.module.scss';

interface IProps {
  center: React.ReactNode;
  right: React.ReactNode;
}

export const UIHeader: FC<IProps> = ({ center, right }) => {
  return (
    <header className={styles.container}>
      <UILogo />
      {center}
      {right}
    </header>
  );
};
