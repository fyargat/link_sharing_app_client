import { FC } from 'react';

import { ICONS } from '@/src/shared/config/icons';
import { UIInput } from '@/src/shared/ui/ui-input';
import { UISelectPlatform } from '@/src/shared/ui/ui-select';

import styles from './ui-editable-share-link.module.scss';

interface IProps {}

export const UIEditableShareLink: FC<IProps> = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <button className={styles.draggableButton}>
          <div className={styles.dashes}>{ICONS['dashes']}</div>
          <h3 className={styles.title}>Link #1</h3>
        </button>
        <button className={styles.removeButton}>Remove</button>
      </header>
      <div className={styles.body}>
        <UISelectPlatform />
        <UIInput
          icon={ICONS['link']}
          isInvalid={false}
          errorText="Can't be empty"
          label='Link'
          placeholder='https://github.com/fyargat'
        />
      </div>
    </div>
  );
};
