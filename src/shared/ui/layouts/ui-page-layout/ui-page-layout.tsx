import cn from 'classnames';
import { FC } from 'react';

import styles from './ui-page-layout.module.scss';

interface IProps {
  header: React.ReactNode;
  left?: React.ReactNode;
  right?: React.ReactNode;
  footer?: React.ReactNode;
}

export const UIPageLayout: FC<IProps> = ({ header, left, right, footer }) => {
  return (
    <div className={cn(styles.container, 'wrap')}>
      {header}
      <main className={styles.main}>
        {left && (
          <section className={cn(styles.section, styles.sectionLeft)}>
            {left}
          </section>
        )}
        {right && (
          <section className={cn(styles.section, styles.sectionRight)}>
            {right}
          </section>
        )}
      </main>
      {footer}
    </div>
  );
};
