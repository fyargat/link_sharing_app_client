import { FC } from 'react';

import styles from './ui-footer.module.scss';

interface IProps {}

export const UIFooter: FC<IProps> = () => {
  return <footer className={styles.footer}>Footer</footer>;
};
