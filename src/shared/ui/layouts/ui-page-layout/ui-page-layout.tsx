import cn from 'classnames';
import { FC } from 'react';

import styles from './ui-page-layout.module.scss';

interface IProps {
  header: React.ReactNode;
  left: React.ReactNode;
  right: React.ReactNode;
}

export const UIPageLayout: FC<IProps> = ({ header, left, right }) => {
  return (
    <div className={cn(styles.container, 'wrap')}>
      {header}
      <main className={styles.main}>
        <section className={cn(styles.section, styles.sectionLeft)}>
          {left}
        </section>
        <section className={cn(styles.section, styles.sectionRight)}>
          {right}
        </section>
      </main>
    </div>
  );
};
