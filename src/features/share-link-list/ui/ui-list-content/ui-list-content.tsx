import { DndContext, closestCenter } from '@dnd-kit/core';
import {
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { FC } from 'react';

import { UISpinner } from '@/src/shared/ui/ui-spinner';

import { useList } from '../../model';
import { UIEditableLink } from '../ui-editable-link';
import { UINoLinks } from '../ui-no-links';
import styles from './ui-list-content.module.scss';

interface IProps {}

export const UIListContent: FC<IProps> = () => {
  const { links, isFetching, onDragEnd, onDragMove, sensors } = useList();

  if (isFetching)
    return (
      <div className={styles.spinner}>
        <UISpinner />
      </div>
    );

  if (!links.length) return <UINoLinks />;

  return (
    <div className={styles.container}>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragMove={onDragMove}
        onDragEnd={onDragEnd}
      >
        <SortableContext
          items={links.map((v) => v.id)}
          strategy={verticalListSortingStrategy}
        >
          <ul className={styles.list}>
            {links.map((link, index) => {
              return (
                <li key={link.id}>
                  <UIEditableLink link={link} order={index + 1} />
                </li>
              );
            })}
          </ul>
        </SortableContext>
      </DndContext>
    </div>
  );
};
