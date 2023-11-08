import cn from 'classnames';
import { FC } from 'react';

import styles from './ui-preview-layout.module.scss';

interface IProps {
  header: React.ReactNode;
  main: React.ReactNode;
  footer?: React.ReactNode;
}

export const UIPreviewLayout: FC<IProps> = ({ header, main, footer }) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={cn(styles.headerInside, 'wrap')}>{header}</div>
      </header>
      <main className={styles.main}>
        <div className={'wrap'}>{main}</div>
      </main>
      {footer && (
        <footer>
          <div className={'wrap'}>{footer}</div>
        </footer>
      )}
    </div>
  );
};
