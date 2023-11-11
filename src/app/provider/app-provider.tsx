'use client';

import { QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';

import { queryClient } from '@/src/shared/api/query-client';

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ToastContainer />
    </QueryClientProvider>
  );
};
