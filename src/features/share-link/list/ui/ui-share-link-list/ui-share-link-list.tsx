import { FC, FormEvent } from 'react';

import { UIEditableShareLink } from '@/src/entities/share-link';
import { IShareLink, ShareLinkId } from '@/src/shared/types';
import { UIPrimaryButton } from '@/src/shared/ui/ui-primary-button';
import { UISecondaryButton } from '@/src/shared/ui/ui-secondary-button';

import { UINoLinks } from '../ui-no-links';
import styles from './ui-share-link-list.module.scss';

interface IProps {
  links: IShareLink[];
  isCreateButtonDisabled: boolean;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  onCreate: () => void;
  onUpdate: (
    id: ShareLinkId,
  ) => (prop: string) => (value: string | number) => void;
  onRemove: (id: ShareLinkId) => () => void;
}

export const UIShareLinkList: FC<IProps> = ({
  links,
  onSubmit,
  onCreate,
  onUpdate,
  onRemove,
  isCreateButtonDisabled,
}) => {
  return (
    <div className={styles.container}>
      <UIPrimaryButton
        className={styles.addButton}
        onClick={onCreate}
        disabled={isCreateButtonDisabled}
      >
        + Add new link
      </UIPrimaryButton>

      {links.length ? (
        <form onSubmit={onSubmit}>
          <ul className={styles.list}>
            {links.map((link, index) => (
              <li key={link.id}>
                <UIEditableShareLink
                  link={link}
                  order={index}
                  onUpdate={onUpdate(link.id)}
                  onRemove={onRemove(link.id)}
                />
              </li>
            ))}
          </ul>
          <footer className={styles.footer}>
            <UISecondaryButton className={styles.saveButton} type='submit'>
              Save
            </UISecondaryButton>
          </footer>
        </form>
      ) : (
        <UINoLinks />
      )}
    </div>
  );
};
