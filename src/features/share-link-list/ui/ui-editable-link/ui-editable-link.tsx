import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { FC, memo } from 'react';

import { ICONS } from '@/src/shared/config/icons';
import { IShareLink } from '@/src/shared/types';
import { UISelectPlatform } from '@/src/shared/ui/ui-select';
import { UITextField } from '@/src/shared/ui/ui-text-field';

import { useEditableLink } from '../../model';
import styles from './ui-editable-link.module.scss';

interface IProps {
  link: IShareLink;
  order: number;
}

const UIEditableShareLink: FC<IProps> = ({ link, order }) => {
  const { onRemove, onSelectPlatform, onChange, register, errors } =
    useEditableLink(link);

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: link.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div className={styles.container} ref={setNodeRef} style={style}>
      <header className={styles.header}>
        <button
          className={styles.draggableButton}
          {...listeners}
          {...attributes}
        >
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

export const UIEditableLink = memo(UIEditableShareLink);
