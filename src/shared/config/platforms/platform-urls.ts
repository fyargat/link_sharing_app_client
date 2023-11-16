import { Platform } from './platform-enum';

type PlatformUrlType = { [key in Platform]: string };
type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];

export const PLATFORM_URLS: PlatformUrlType = {
  [Platform.Github]: 'https://github.com/',
  [Platform.FrontendMentor]: 'https://www.frontendmentor.io/',
  [Platform.Twitter]: 'https://twitter.com/',
  [Platform.FreeCodeCamp]: 'https://www.freecodecamp.org/',
  [Platform.LinkedIn]: 'https://www.linkedin.com/',
  [Platform.Youtube]: 'https://www.youtube.com/',
  [Platform.Facebook]: 'https://www.facebook.com/',
  [Platform.Twitch]: 'https://www.twitch.tv/',
  [Platform.Codewars]: 'https://www.codewars.com/',
  [Platform.Codepen]: 'https://codepen.io/',
  [Platform.Gitlab]: 'https://gitlab.com/',
  [Platform.Hashnode]: 'https://hashnode.com/',
  [Platform.StackOverflow]: 'https://stackoverflow.com/',
} as const;

export const getPlatformUrlMap = () => {
  console.log('map');
  const urls = Object.entries(
    PLATFORM_URLS,
  ) as unknown as Entries<PlatformUrlType>;

  return new Map(urls.map(([id, url]) => [url, id]));
};
