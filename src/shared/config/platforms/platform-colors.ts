import { IPlatformColor } from '../../types/platform';
import { Platform } from './platform-enum';

export const PLATFORM_COLORS: { [key in Platform]: IPlatformColor } = {
  [Platform.Github]: {
    color: '#fff',
    backgroundColor: '#1a1a1a',
  },
  [Platform.FrontendMentor]: {
    backgroundColor: '#fff',
    color: '#333',
    hasBorder: true,
  },
  [Platform.Twitter]: {
    color: '#fff',
    backgroundColor: '#43b7e9',
  },
  [Platform.FreeCodeCamp]: {
    color: '#fff',
    backgroundColor: '#302267',
  },
  [Platform.LinkedIn]: {
    color: '#fff',
    backgroundColor: '#2d68ff',
  },
  [Platform.Youtube]: {
    color: '#fff',
    backgroundColor: '#ee3939',
  },
  [Platform.Facebook]: {
    color: '#fff',
    backgroundColor: '#2442ac',
  },
  [Platform.Twitch]: {
    color: '#fff',
    backgroundColor: '#ee3fc8',
  },
  [Platform.DevTo]: {
    color: '#fff',
    backgroundColor: '#333333',
  },
  [Platform.Codewars]: {
    color: '#fff',
    backgroundColor: '#8a1a50',
  },
  [Platform.Codepen]: {
    color: '#fff',
    backgroundColor: '#333333',
  },
  [Platform.Gitlab]: {
    color: '#fff',
    backgroundColor: '#eb4925',
  },
  [Platform.Hashnode]: {
    color: '#fff',
    backgroundColor: '#0330d1',
  },
  [Platform.StackOverflow]: {
    color: '#fff',
    backgroundColor: '#ec7100',
  },
};
