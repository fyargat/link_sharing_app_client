import { nanoid } from 'nanoid';

import { Platform } from '@/src/shared/config/platforms';
import { IShareLink } from '@/src/shared/types';

export const createShareLink = (): IShareLink => ({
  id: nanoid(),
  href: '',
  platformId: Platform.Github,
});
