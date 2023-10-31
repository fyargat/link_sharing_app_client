import cn from 'classnames';
import Link from 'next/link';
import { FC } from 'react';

import styles from './ui-navbar-link.module.scss';

interface IProps {
  href: string;
  isActive: boolean;
  icon: React.ReactNode;
  text: string;
}

export const UINavbarLink: FC<IProps> = ({ isActive, href, icon, text }) => {
  return (
    <div className={styles.container}>
      <Link
        href={href}
        className={cn(styles.link, {
          [styles.linkActive]: isActive,
        })}
      >
        <div className={styles.icon}>{icon}</div>{' '}
        <p className={styles.text}>{text}</p>
      </Link>
    </div>
  );
};
