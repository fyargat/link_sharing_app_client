import { Platform } from '@/src/shared/config/platforms';
import { PLATFORM_URLS } from '@/src/shared/config/platforms/platform-urls';

export const getNewShareLink = () => ({
  platformId: Platform.Github,
  text: PLATFORM_URLS[Platform.Github],
});
