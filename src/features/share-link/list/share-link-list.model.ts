import { FormEvent } from 'react';

import { IShareLink } from '@/src/shared/types';

export const useShareLinkList = () => {
  // temp
  const links = [] as IShareLink[];

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Submit');
  };

  return {
    links,
    onSubmit: handleSubmit,
  };
};
