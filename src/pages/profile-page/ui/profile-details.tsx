import { FC } from 'react';

import styles from './profile-details.module.scss';

interface IProps {}

export const ProfileDetails: FC<IProps> = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Profile Details</h1>
        <p className={styles.subtitle}>
          Add your details to create a personal touch to your profile.
        </p>
      </header>
    </div>
  );
};
