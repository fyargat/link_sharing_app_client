'use client';

import { FC } from 'react';

import { UIProfileAvatar } from '../ui-profile-avatar';
import { UIProfileFields } from '../ui-profile-fields';
import styles from './ui-profile-form.module.scss';

interface IProps {}

export const UIProfileForm: FC<IProps> = () => {
  return (
    <div className={styles.container}>
      <UIProfileAvatar />
      <UIProfileFields />
    </div>
  );
};
