import { FC } from 'react';

import { ShareLinkList } from '@/src/features/share-link-list';

import styles from './home-links.module.scss';

interface IProps {}

export const HomeLinks: FC<IProps> = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Customize your links</h1>
        <p className={styles.subtitle}>
          Add/edit/remove links below and then share all your profiles with the
          world!
        </p>
      </header>
      <ShareLinkList />
    </div>
  );
};
