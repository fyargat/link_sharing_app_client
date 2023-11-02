import { FC, FormEvent } from 'react';

import { UIEditableShareLink } from '@/src/entities/share-link';
import { IShareLink } from '@/src/shared/types';
import { UIPrimaryButton } from '@/src/shared/ui/ui-primary-button';
import { UISecondaryButton } from '@/src/shared/ui/ui-secondary-button';

import { UINoLinks } from '../ui-no-links';
import styles from './ui-share-link-list.module.scss';

interface IProps {
  links: IShareLink[];
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

export const UIShareLinkList: FC<IProps> = ({ links, onSubmit }) => {
  return (
    <div className={styles.container}>
      <UIPrimaryButton
        className={styles.addButton}
        onClick={() => console.log('Add new link')}
      >
        + Add new link
      </UIPrimaryButton>

      {links.length ? (
        <form onSubmit={onSubmit}>
          <ul className={styles.list}>
            {links.map((v) => (
              <li key={v.href}>
                <UIEditableShareLink />
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
