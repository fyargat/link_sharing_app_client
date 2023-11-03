import { FormEvent, useMemo } from 'react';

import { useShareLinkStore } from '@/src/entities/share-link';
import { ShareLinkId } from '@/src/shared/types';

export const useShareLinkList = () => {
  const { links, ...shareLinkStore } = useShareLinkStore();

  const isCreateButtonDisabled = useMemo(() => {
    return links.some((link) => !link.href);
  }, [links]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Submit');
  };

  const handleShareLinkCreate = () => {
    shareLinkStore.create();
  };

  const handleShareLinkUpdate =
    (id: ShareLinkId) => (prop: string) => (value: string | number) => {
      const payload = { [prop]: value };
      shareLinkStore.update(id, payload);
    };

  const handleShareLinkRemove = (id: ShareLinkId) => () => {
    shareLinkStore.remove(id);
  };

  return {
    links,
    isCreateButtonDisabled,

    onSubmit: handleSubmit,
    onCreate: handleShareLinkCreate,
    onUpdate: handleShareLinkUpdate,
    onRemove: handleShareLinkRemove,
  };
};
