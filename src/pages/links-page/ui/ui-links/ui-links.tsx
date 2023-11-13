import Link from 'next/link';
import { FC } from 'react';

import { SharedInfoCard } from '@/src/features/shared-info';
import { Route } from '@/src/shared/config/routes';
import { UIPreviewLayout } from '@/src/shared/ui/layouts/ui-preview-layout';
import { UILogo } from '@/src/shared/ui/ui-logo';

import styles from './ui-links.module.scss';

interface IProps {
  id: string;
}

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href={Route.Home}>
        <UILogo isFull />
      </Link>
      <Link className={styles.signUpLink} href={Route.SignUp}>
        Create Your Own!
      </Link>
    </header>
  );
};

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p>Want to show off your own social links?</p>
      <p>
        Create a free account{' '}
        <Link className={styles.footerLink} href='/sign-up'>
          here!
        </Link>
      </p>
    </div>
  );
};

export const UILinks: FC<IProps> = ({ id }) => {
  return (
    <UIPreviewLayout
      header={<Header />}
      main={<SharedInfoCard id={id} />}
      footer={<Footer />}
    />
  );
};
