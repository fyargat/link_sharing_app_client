import Image from 'next/image';
import { FC } from 'react';

import { ICONS } from '@/src/shared/config/icons';
import { IShareLink, IUserView } from '@/src/shared/types';
import { UIShareLink } from '@/src/shared/ui/ui-share-link';

import styles from './ui-preview-card.module.scss';

interface IProps {
  links: IShareLink[];
  user: IUserView;
  copyButton?: React.ReactNode;
}

export const UIPreviewCard: FC<IProps> = ({
  user = {},
  links = [],
  copyButton = null,
}) => {
  const { avatar, email, fullName } = user;

  return (
    <div className={styles.container}>
      {copyButton && <div className={styles.copy}>{copyButton}</div>}
      <header className={styles.header}>
        <div className={styles.avatar}>
          {avatar ? (
            <Image src={avatar} width={100} height={100} alt='Avatar' />
          ) : (
            <div className={styles.noImage}>
              {ICONS['image']}
              <p>No Image</p>
            </div>
          )}
        </div>
        <div className={styles.userInfo}>
          {fullName ? (
            <p title={fullName} className={styles.fullName}>
              {fullName}
            </p>
          ) : null}
          {email ? (
            <p title={email} className={styles.email}>
              {email}
            </p>
          ) : null}
        </div>
      </header>
      <div className={styles.body}>
        <ul className={styles.list}>
          {links.map((link, index) => (
            <li key={index}>
              <UIShareLink link={link} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
