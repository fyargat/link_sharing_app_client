'use client';

import { FC } from 'react';

import { UIListContent } from '../ui-list-content';
import { UINewLinkButton } from '../ui-new-link-button';
import styles from './ui-list.module.scss';

interface IProps {}

export const UIList: FC<IProps> = () => {
  return (
    <div className={styles.container}>
      <UINewLinkButton />
      <UIListContent />
    </div>
  );
};
