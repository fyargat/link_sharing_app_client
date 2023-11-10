'use client';

import { useSignOut } from './sign-out.model';
import { UISignOutButton } from './ui/ui-sign-out-button';

interface IProps {}

export const SignOutButton: React.FC<IProps> = () => {
  const { onSignOut, isLoading } = useSignOut();

  return <UISignOutButton onSignOut={onSignOut} isLoading={isLoading} />;
};
