import { Navbar } from '@/src/features/navbar';
import { SignOutButton } from '@/src/features/sign-out';
import { UIHeader } from '@/src/shared/ui/ui-header';

interface IProps {}

export const Header: React.FC<IProps> = () => {
  return <UIHeader navbar={<Navbar />} right={<SignOutButton />} />;
};
