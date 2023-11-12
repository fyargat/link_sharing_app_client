import {
  useShareLinkStore,
  useShareLinksQuery,
} from '@/src/entities/share-link';
import { useShareLinkCreateMutation } from '@/src/entities/share-link/share-link.queries';
import { ShareLinkId } from '@/src/shared/types';

import { createShareLink } from '../share-link-list.lib';

export const useShareLinkList = () => {
  const { ...shareLinkStore } = useShareLinkStore();

  const { data: links, isFetching } = useShareLinksQuery();
  const { mutate } = useShareLinkCreateMutation();

  // const isCreateButtonDisabled = useMemo(() => {
  //   return links.some((link) => !link.text);
  // }, [links]);

  const handleShareLinkCreate = () => {
    mutate(createShareLink());
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
    isFetching,
    isCreateButtonDisabled: false,

    onCreate: handleShareLinkCreate,
    onUpdate: handleShareLinkUpdate,
    onRemove: handleShareLinkRemove,
  };
};
