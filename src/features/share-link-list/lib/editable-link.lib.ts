import { Platform } from '@/src/shared/config/platforms';
import {
  PLATFORM_URLS,
  getPlatformUrlMap,
} from '@/src/shared/config/platforms/platform-urls';
import { IShareLink } from '@/src/shared/types';

const regexp = /^https:\/\/[^\/]*\//g; /* eslint-disable-line */
const platformUrlMap = getPlatformUrlMap();

export const getLinkTextByPlatform = (
  link: IShareLink,
  platformId: Platform,
): string => {
  const text = link.text.replace(PLATFORM_URLS[link.platformId], '');
  const url = PLATFORM_URLS[platformId];

  return url + text;
};

export const getPlatformByText = (link: IShareLink, text: string) => {
  const match = text.match(regexp);

  if (!match?.[0]) return link.platformId;

  const platformId = platformUrlMap.get(match[0]);

  if (!platformId) return link.platformId;

  return platformId;
};
