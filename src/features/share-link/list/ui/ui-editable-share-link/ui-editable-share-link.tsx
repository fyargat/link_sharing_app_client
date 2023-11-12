import { FC, memo } from 'react';

import { ICONS } from '@/src/shared/config/icons';
import { IShareLink } from '@/src/shared/types';
import { UISelectPlatform } from '@/src/shared/ui/ui-select';
import { UITextField } from '@/src/shared/ui/ui-text-field';

import { useEditableShareLink } from '../../model/editable-share-link.model';
import styles from './ui-editable-share-link.module.scss';

interface IProps {
  link: IShareLink;
  order: number;
}

const UIEditableShareLink: FC<IProps> = ({ link, order }) => {
  const { onRemove, onSelectPlatform, onChange, register, errors } =
    useEditableShareLink(link);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <button className={styles.draggableButton}>
          <div className={styles.dashes}>{ICONS['dashes']}</div>
          <h3 className={styles.title}>Link #{order}</h3>
        </button>
        <button onClick={onRemove} className={styles.removeButton}>
          Remove
        </button>
      </header>
      <div className={styles.body}>
        <UISelectPlatform
          platformId={link.platformId}
          onSelectPlatform={onSelectPlatform}
        />
        <UITextField
          icon={ICONS['link']}
          label='Link'
          isSelectText
          error={errors.text}
          inputProps={{
            placeholder: 'https://github.com/fyargat',
            ...register('text', {
              onChange: (e: React.FormEvent<HTMLInputElement>) =>
                onChange(e.currentTarget.value),
            }),
          }}
        />
      </div>
    </div>
  );
};

export const EditableShareLink = memo(UIEditableShareLink);
