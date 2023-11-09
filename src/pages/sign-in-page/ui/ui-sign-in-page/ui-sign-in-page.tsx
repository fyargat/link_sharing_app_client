import Link from 'next/link';
import { FC } from 'react';

import { SignInForm } from '@/src/features/sign-in';
import { UIAuthLayout } from '@/src/shared/ui/layouts/ui-auth-layout';

import styles from './ui-sign-in-page.module.scss';

interface IProps {}

const SubFormBlock = () => {
  return (
    <div className={styles.subForm}>
      <p>Don&apos;t have an account? </p>
      <Link href='/sign-up'>Create account</Link>
    </div>
  );
};

export const UISignInPage: FC<IProps> = () => {
  return (
    <UIAuthLayout
      title='Sign In'
      subtitle='Add your details below to get back into the app'
      form={<SignInForm />}
      subFormBlock={<SubFormBlock />}
    />
  );
};
