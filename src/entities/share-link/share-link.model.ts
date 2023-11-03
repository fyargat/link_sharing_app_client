import { create } from 'zustand';

import {
  EditableShareLinkPayloadType,
  IShareLink,
  ShareLinkId,
} from '@/src/shared/types';

import { createShareLink } from './share-link.lib';

interface IShareLinkStore {
  links: IShareLink[];
  create: () => void;
  update: (id: ShareLinkId, payload: EditableShareLinkPayloadType) => void;
  remove: (id: ShareLinkId) => void;
}

export const useShareLinkStore = create<IShareLinkStore>()((set) => ({
  links: [],
  create: () =>
    set((state) => ({ links: [...state.links, createShareLink()] })),
  update: (id, payload) =>
    set((state) => {
      const links = state.links.map((link) => {
        if (link.id !== id) return link;

        return {
          ...link,
          ...payload,
        };
      });

      return { links };
    }),
  remove: (id) =>
    set((state) => {
      const links = state.links.filter((link) => link.id !== id);

      return { links };
    }),
}));
