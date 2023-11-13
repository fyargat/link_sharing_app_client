import { FC } from 'react';

import { UIAvatar } from '@/src/entities/profile';
import { IShareLink, IUserView } from '@/src/shared/types';
import { UIShareLink } from '@/src/shared/ui/ui-share-link';
import { UISkeleton } from '@/src/shared/ui/ui-skeleton';

import styles from './ui-phone-template.module.scss';

interface IProps {
  links: IShareLink[];
  user: IUserView;
  linkSkeletons: string[];
}

export const UIPhoneTemplate: FC<IProps> = ({
  user,
  linkSkeletons,
  links = [],
}) => {
  const { avatar, email, fullName } = user;

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        {avatar ? (
          <UIAvatar isVisibleBorder avatar={avatar} className={styles.avatar} />
        ) : (
          <UISkeleton className={styles.skeletonAvatar} />
        )}
        <div className={styles.userInfo}>
          {fullName ? (
            <p title={fullName} className={styles.fullName}>
              {fullName}
            </p>
          ) : (
            <UISkeleton className={styles.skeletonFullName} />
          )}
          {email ? (
            <p title={email} className={styles.email}>
              {email}
            </p>
          ) : (
            <UISkeleton className={styles.skeletonEmail} />
          )}
        </div>
      </header>
      <div className={styles.body}>
        <ul className={styles.list}>
          {links.map((link, index) => (
            <li key={index}>
              <UIShareLink link={link} />
            </li>
          ))}
          {linkSkeletons.map((_, index) => (
            <li key={index}>
              <UISkeleton className={styles.skeletonLink} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
