import Link from 'next/link';
import { FC } from 'react';

import { PreviewCard } from '@/src/features/preview';
import { UIPreviewLayout } from '@/src/shared/ui/layouts/ui-preview-layout';
import { UISecondaryButton } from '@/src/shared/ui/ui-secondary-button';

import styles from './ui-preview-page.module.scss';

interface IProps {}

const Header = () => {
  return (
    <>
      <Link className={styles.backLink} href='/'>
        Back to Editor
      </Link>
      <UISecondaryButton>Share Link</UISecondaryButton>
    </>
  );
};

export const UIPreviewPage: FC<IProps> = () => {
  return <UIPreviewLayout header={<Header />} main={<PreviewCard />} />;
};
