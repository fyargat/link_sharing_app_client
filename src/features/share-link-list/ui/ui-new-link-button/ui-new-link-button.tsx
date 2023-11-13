import { FC } from 'react';

import { UIPrimaryButton } from '@/src/shared/ui/ui-primary-button';

import { useNewLink } from '../../model';
import styles from './ui-new-link-button.module.scss';

interface IProps {}

export const UINewLinkButton: FC<IProps> = () => {
  const { onCreate, isDisabled } = useNewLink();

  return (
    <UIPrimaryButton
      className={styles.button}
      onClick={onCreate}
      disabled={isDisabled}
    >
      + Add new link
    </UIPrimaryButton>
  );
};
