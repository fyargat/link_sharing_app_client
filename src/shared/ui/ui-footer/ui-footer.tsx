import { FC } from 'react';

import { getCurrentYear } from '../../lib/time';
import { UILogo } from '../ui-logo';
import styles from './ui-footer.module.scss';

interface IProps {}

export const UIFooter: FC<IProps> = () => {
  const currentYear = getCurrentYear();

  return (
    <footer className={styles.footer}>
      <UILogo />

      <p>
        {' '}
        {currentYear} · Developed by{' '}
        <a
          className={styles.link}
          href='https://fyargat.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          Fyargat Bikbaev
        </a>{' '}
      </p>
    </footer>
  );
};
