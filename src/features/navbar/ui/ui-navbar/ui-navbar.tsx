'use client';

import { FC } from 'react';

import { ICONS } from '@/src/shared/config/icons';
import { Route } from '@/src/shared/config/routes';
import { UINavbarLink } from '@/src/shared/ui/ui-navbar-link';

import styles from './ui-navbar.module.scss';

interface IProps {
  route: Route | null;
}

export const UINavbar: FC<IProps> = ({ route }) => {
  return (
    <nav className={styles.container}>
      <ul className={styles.list}>
        <li>
          <UINavbarLink
            href={Route.Home}
            isActive={route === Route.Home}
            icon={ICONS['link']}
            text='Links'
          />
        </li>
        <li>
          <UINavbarLink
            href={Route.Profile}
            isActive={route === Route.Profile}
            icon={ICONS['profile']}
            text='Profile Details'
          />
        </li>
        <li>
          <UINavbarLink
            href={Route.Preview}
            isActive={route === Route.Preview}
            icon={ICONS['eye']}
            text='Preview'
          />
        </li>
      </ul>
    </nav>
  );
};
