import { create } from 'zustand';

interface IShareLink {}

interface IShareLinkStore {
  links: IShareLink[];
  setLinks: (links: IShareLink[]) => void;
}

export const useShareLinkStore = create<IShareLinkStore>()((set) => ({
  links: [],
  setLinks: (links) => set((state) => ({ links: [...state.links, ...links] })),
}));
