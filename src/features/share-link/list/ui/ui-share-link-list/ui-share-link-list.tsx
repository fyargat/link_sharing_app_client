import { FC } from 'react';

import { IShareLink, ShareLinkId } from '@/src/shared/types';
import { UIPrimaryButton } from '@/src/shared/ui/ui-primary-button';
import { UISpinner } from '@/src/shared/ui/ui-spinner';

import { EditableShareLink } from '../ui-editable-share-link/ui-editable-share-link';
import { UINoLinks } from '../ui-no-links';
import styles from './ui-share-link-list.module.scss';

interface IProps {
  links: IShareLink[];
  isFetching: boolean;
  isCreateButtonDisabled: boolean;
  onCreate: () => void;
  onUpdate: (
    id: ShareLinkId,
  ) => (prop: string) => (value: string | number) => void;
  onRemove: (id: ShareLinkId) => () => void;
}

export const UIShareLinkList: FC<IProps> = ({
  links,
  isFetching,

  onCreate,
  isCreateButtonDisabled,
}) => {
  const getContent = () => {
    if (isFetching)
      return (
        <div className={styles.spinner}>
          <UISpinner />
        </div>
      );

    if (!links.length) return <UINoLinks />;

    return (
      <ul className={styles.list}>
        {links.map((link, index) => (
          <li key={link.id}>
            <EditableShareLink link={link} order={index + 1} />
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className={styles.container}>
      <UIPrimaryButton
        className={styles.addButton}
        onClick={onCreate}
        disabled={isCreateButtonDisabled}
      >
        + Add new link
      </UIPrimaryButton>
      <div className={styles.content}>{getContent()}</div>
    </div>
  );
};
