import { FC } from 'react';

import { ICONS } from '@/src/shared/config/icons';
import { UIButtonSpinner } from '@/src/shared/ui/ui-button-spinner';
import { UIPrimaryButton } from '@/src/shared/ui/ui-primary-button';

import styles from './ui-sign-out-button.module.scss';

interface IProps {
  onSignOut: () => void;
  isLoading: boolean;
}

export const UISignOutButton: FC<IProps> = ({ onSignOut, isLoading }) => {
  return (
    <UIPrimaryButton
      className={styles.button}
      onClick={onSignOut}
      disabled={isLoading}
    >
      {isLoading && (
        <div className={styles.spinner}>
          <UIButtonSpinner />
        </div>
      )}
      <div className={styles.icon}>{ICONS['logout']}</div>
      <p className={styles.text}>Sign Out</p>
    </UIPrimaryButton>
  );
};
