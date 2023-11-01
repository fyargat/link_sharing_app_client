'use client';

import { ICONS } from '@/src/shared/config/icons';
import { Route } from '@/src/shared/config/routes';
import { UINavbarLink } from '@/src/shared/ui/ui-navbar-link';
import { FC } from 'react';

import styles from './ui-navbar.module.scss';

interface IProps {
  route: Route | null;
}

export const UINavbar: FC<IProps> = ({ route }) => {
  return (
    <div className={styles.container}>
      <UINavbarLink
        href={Route.Home}
        isActive={route === Route.Home}
        icon={ICONS['link']}
        text='Links'
      />
      <UINavbarLink
        href={Route.Profile}
        isActive={route === Route.Profile}
        icon={ICONS['profile']}
        text='Profile Details'
      />
    </div>
  );
};
