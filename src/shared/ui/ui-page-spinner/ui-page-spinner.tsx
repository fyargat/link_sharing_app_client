import { FC } from 'react';

import { SpinnerSize, UISpinner } from '../ui-spinner';
import styles from './ui-page-spinner.module.scss';

interface IProps {}

export const UIPageSpinner: FC<IProps> = () => {
  return (
    <div className={styles.container}>
      <UISpinner size={SpinnerSize.Large} />
    </div>
  );
};
