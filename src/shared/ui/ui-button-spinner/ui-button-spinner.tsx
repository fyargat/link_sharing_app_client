import { FC } from 'react';

import styles from './ui-button-spinner.module.scss';

interface IProps {}

export const UIButtonSpinner: FC<IProps> = () => {
  return <span className={styles.loader} />;
};
