'use client';

import { useNavbar } from './navbar.model';
import { UINavbar } from './ui/ui-navbar';

interface IProps {}

export const Navbar: React.FC<IProps> = () => {
  const { route } = useNavbar();

  return <UINavbar route={route} />;
};
