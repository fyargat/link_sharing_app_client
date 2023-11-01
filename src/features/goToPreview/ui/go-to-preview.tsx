import Link from 'next/link';

import { Route } from '@/src/shared/config/routes';

import styles from './go-to-preview.module.scss';

interface IProps {}

export const GoToPreview: React.FC<IProps> = () => {
  return (
    <Link className={styles.link} href={Route.Preview}>
      Preview
    </Link>
  );
};
