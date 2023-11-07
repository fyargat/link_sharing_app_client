import { create } from 'zustand';

import { IUser } from '@/src/shared/types';

interface IProfileStore extends IUser {
  update: (prop: keyof IUser, value: string) => void;
}

export const useProfileStore = create<IProfileStore>()((set) => ({
  avatar: '',
  firstName: '',
  lastName: '',
  email: '',
  update: (prop, value) => set((state) => ({ ...state, [prop]: value })),
}));
