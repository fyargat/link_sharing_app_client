import Link from 'next/link';
import { FC } from 'react';

import { SignUpForm } from '@/src/features/sign-up';
import { UIAuthLayout } from '@/src/shared/ui/layouts/ui-auth-layout';

import styles from './ui-sign-up-page.module.scss';

interface IProps {}

const SubFormBlock = () => {
  return (
    <div className={styles.subForm}>
      <p>Already have an account?</p>
      <Link href='/sign-in'>Sing In</Link>
    </div>
  );
};

export const UISignUpPage: FC<IProps> = () => {
  return (
    <UIAuthLayout
      title='Create Account'
      subtitle="Let's get you started sharing your links!"
      form={<SignUpForm />}
      subFormBlock={<SubFormBlock />}
    />
  );
};
