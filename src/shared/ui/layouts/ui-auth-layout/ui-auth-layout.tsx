import cn from 'classnames';
import { FC } from 'react';

import { UILogo } from '../../ui-logo';
import styles from './ui-auth-layout.module.scss';

interface IProps {
  form: React.ReactNode;
  subFormBlock: React.ReactNode;
  title: string;
  subtitle: string;
}

export const UIAuthLayout: FC<IProps> = ({
  title,
  subtitle,
  form,
  subFormBlock,
}) => {
  return (
    <div className={styles.container}>
      <div className={cn(styles.wrap, 'wrap')}>
        <header className={styles.header}>
          <UILogo isFull />
        </header>
        <main className={styles.main}>
          <section>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.subtitle}>{subtitle}</p>
          </section>

          <section className={styles.form}>{form}</section>

          <section>{subFormBlock}</section>
        </main>
      </div>
    </div>
  );
};
