'use client';

import { FC } from 'react';

import { UIAvatarDropzone } from '../ui-avatar-dropzone';
import styles from './ui-profile-avatar.module.scss';

interface IProps {}

export const UIProfileAvatar: FC<IProps> = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Profile Picture</h3>
      <UIAvatarDropzone />
      <p className={styles.text}>
        Image must be below 1024x1024px. Use PNG or JPG format.
      </p>
    </div>
  );
};
