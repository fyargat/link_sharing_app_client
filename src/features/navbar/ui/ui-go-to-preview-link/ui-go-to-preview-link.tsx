import Link from 'next/link';
import { FC } from 'react';

import { ICONS } from '@/src/shared/config/icons';
import { Route } from '@/src/shared/config/routes';

import styles from './ui-go-to-preview-link.module.scss';

interface IProps {}

export const UIGoToPreviewLink: FC<IProps> = () => {
  return (
    <Link className={styles.link} href={Route.Preview}>
      <div className={styles.icon}>{ICONS['eye']}</div>
      <p className={styles.text}> Preview</p>
    </Link>
  );
};
