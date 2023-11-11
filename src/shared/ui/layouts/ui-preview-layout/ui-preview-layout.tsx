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
    <div className={cn(styles.container, 'wrap')}>
      {header}
      <main className={styles.main}>{main}</main>
      {footer && <footer>{footer}</footer>}
    </div>
  );
};
