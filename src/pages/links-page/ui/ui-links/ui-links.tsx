import Link from 'next/link';
import { FC } from 'react';

import { PreviewCard } from '@/src/features/preview';
import { UIPreviewLayout } from '@/src/shared/ui/layouts/ui-preview-layout';
import { UILogo } from '@/src/shared/ui/ui-logo';

import styles from './ui-links.module.scss';

interface IProps {
  id: string;
}

const Header = () => {
  return (
    <>
      <UILogo isFull />
      <Link className={styles.signUpLink} href='/sign-up'>
        Create Your Own!
      </Link>
    </>
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
  console.log('id', id);

  return (
    <UIPreviewLayout
      header={<Header />}
      main={<PreviewCard />}
      footer={<Footer />}
    />
  );
};
