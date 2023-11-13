import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import {
  createShareLink,
  fetchShareLinks,
  removeShareLink,
  updateShareLink,
} from '@/src/shared/api/share-link';
import { IShareLinksResponseData } from '@/src/shared/api/types';

export const linksKey = ['links'];

export const useShareLinksQuery = () => {
  return useQuery({
    queryKey: linksKey,
    queryFn: fetchShareLinks,
    select(data) {
      return data?.data ?? [];
    },
    retry: 0,
    staleTime: 5 * 60 * 1000,
  });
};

export const useShareLinkCreateMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createShareLink,
    onSuccess: (createdLink) => {
      queryClient.setQueryData(linksKey, (oldData: IShareLinksResponseData) => {
        const data = { data: [...oldData.data, createdLink] };
        return data;
      });
    },
  });
};

export const useShareLinkUpdateMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateShareLink,
    onSuccess: (updatedLink) => {
      queryClient.setQueryData(linksKey, (oldData: IShareLinksResponseData) => {
        const links = oldData.data.map((link) => {
          if (updatedLink?.id === link.id) {
            return {
              ...link,
              ...updatedLink,
            };
          }

          return link;
        });

        return { data: links };
      });
    },
  });
};

export const useShareLinkRemoveMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: removeShareLink,
    onSuccess: (removedLink) => {
      queryClient.setQueryData(linksKey, (oldData: IShareLinksResponseData) => {
        const links = oldData.data.filter(
          (link) => link.id !== removedLink?.id,
        );

        return { data: links };
      });
    },
  });
};
