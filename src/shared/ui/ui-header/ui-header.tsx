import { FC } from 'react';

import { UILogo } from '../ui-logo';
import styles from './ui-header.module.scss';

interface IProps {
  navbar: React.ReactNode;
  right: React.ReactNode;
}

export const UIHeader: FC<IProps> = ({ navbar, right }) => {
  return (
    <header className={styles.container}>
      <UILogo />
      {navbar}
      {right}
    </header>
  );
};
