'use client';

import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ToastContainer } from 'react-toastify';

import { queryClient } from '@/src/shared/api/query-client';
import { EdgeStoreProvider } from '@/src/shared/lib/edgestore';

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <EdgeStoreProvider>{children}</EdgeStoreProvider>
      <ToastContainer
        autoClose={1000}
        hideProgressBar={true}
        pauseOnHover={false}
      />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
