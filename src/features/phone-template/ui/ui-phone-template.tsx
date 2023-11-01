import Image from 'next/image';
import { FC } from 'react';

import { IShareLink } from '@/src/shared/types';
import { UIShareLink } from '@/src/shared/ui/ui-share-link';
import { UISkeleton } from '@/src/shared/ui/ui-skeleton';

import { IPhoneTemplateUser } from '../phone-template.types';
import styles from './ui-phone-template.module.scss';

interface IProps {
  links: IShareLink[];
  user: IPhoneTemplateUser;
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
          <div className={styles.avatar}>
            <Image src={avatar} width={100} height={100} alt='Avatar' />
          </div>
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
