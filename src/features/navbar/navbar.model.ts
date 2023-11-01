import { Route } from '@/src/shared/config/routes';
import { usePathname } from 'next/navigation';

export const useNavbar = () => {
  const pathname = usePathname() as Route;

  return { route: pathname };
};
