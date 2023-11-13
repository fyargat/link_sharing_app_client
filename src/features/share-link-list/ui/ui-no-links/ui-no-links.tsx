import { FC } from 'react';

import { ICONS } from '@/src/shared/config/icons';

import styles from './ui-no-links.module.scss';

interface IProps {}

export const UINoLinks: FC<IProps> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>{ICONS['touch']}</div>
      <h3 className={styles.title}>Let&apos;s get you started</h3>
      <p className={styles.text}>
        Use the «Add new link» button to get started. Once you have more than
        one link, you can reorder and edit them. We&apos;re here to help you
        share your profiles with everyone!
      </p>
    </div>
  );
};
