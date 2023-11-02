import { FC } from 'react';

import { UILogo } from '../ui-logo';
import styles from './ui-header.module.scss';

interface IProps {
  navbar: React.ReactNode;
}

export const UIHeader: FC<IProps> = ({ navbar }) => {
  return (
    <header className={styles.container}>
      <UILogo />
      {navbar}
    </header>
  );
};
