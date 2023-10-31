import { FC } from 'react';

import { ICONS } from '../../config/icons';
import { Route } from '../../config/routes';
import { UINavbarLink } from '../ui-navbar-link';
import styles from './ui-navbar.module.scss';

interface IProps {
  route: Route;
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
