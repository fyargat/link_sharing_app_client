import Image from 'next/image';
import { FC } from 'react';

import { ILink } from '../../types';
import { UIShareLink } from '../ui-share-link';
import { UISkeleton } from '../ui-skeleton';
import styles from './ui-phone-template.module.scss';

const MIN_LINK_NUMBER = 5;

interface IProps {
  links: ILink[];
  avatar: string | null;
  email: string | null;
  fullName: string | null;
}

export const UIPhoneTemplate: FC<IProps> = ({
  avatar,
  email,
  fullName,
  links = [],
}) => {
  const fillerNum =
    links.length < MIN_LINK_NUMBER ? MIN_LINK_NUMBER - links.length : 0;
  const linkFiller = Array(fillerNum).fill(null);

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
          {linkFiller.map((_, index) => (
            <li key={index}>
              <UISkeleton className={styles.skeletonLink} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
