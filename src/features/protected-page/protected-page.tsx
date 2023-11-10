'use client';

import { useRouter } from 'next/navigation';
import { FC } from 'react';

import { useSessionQuery } from '@/src/entities/session/queries';
import { Route } from '@/src/shared/config/routes';
import { UIPageSpinner } from '@/src/shared/ui/ui-page-spinner';

interface IProps {
  children: React.ReactNode;
}

export const ProtectedPage: FC<IProps> = ({ children }) => {
  const router = useRouter();

  const { isError, isLoading } = useSessionQuery();

  if (isLoading) {
    return <UIPageSpinner />;
  }

  if (isError) {
    router.replace(Route.SignIn);
    return;
  }

  return children;
};
