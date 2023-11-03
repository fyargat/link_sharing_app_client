import { FC } from 'react';

import { ICONS } from '@/src/shared/config/icons';
import { IShareLink } from '@/src/shared/types';
import { UIInput } from '@/src/shared/ui/ui-input';
import { UISelectPlatform } from '@/src/shared/ui/ui-select';

import styles from './ui-editable-share-link.module.scss';

interface IProps {
  link: IShareLink;
  order: number;
  onUpdate: (prop: string) => (value: string | number) => void;
  onRemove: () => void;
}

export const UIEditableShareLink: FC<IProps> = ({
  link,
  order,
  onUpdate,
  onRemove,
}) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <button className={styles.draggableButton}>
          <div className={styles.dashes}>{ICONS['dashes']}</div>
          <h3 className={styles.title}>Link #{order + 1}</h3>
        </button>
        <button onClick={onRemove} className={styles.removeButton}>
          Remove
        </button>
      </header>
      <div className={styles.body}>
        <UISelectPlatform
          platformId={link.platformId}
          onSelectPlatform={onUpdate('platformId')}
        />
        <UIInput
          icon={ICONS['link']}
          isInvalid={false}
          errorText="Can't be empty"
          label='Link'
          placeholder='https://github.com/fyargat'
          value={link.href}
          onInputChange={onUpdate('href')}
        />
      </div>
    </div>
  );
};
