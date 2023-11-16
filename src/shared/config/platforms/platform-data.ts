import { IPlatform } from '../../types/platform';
import { PLATFORM_COLORS } from './platform-colors';
import { Platform } from './platform-enum';
import { PLATFORM_ICONS } from './platform-icons';

export const PLATFORMS: IPlatform[] = [
  {
    id: Platform.Github,
    text: 'Github',
    colors: PLATFORM_COLORS[Platform.Github],
    icon: PLATFORM_ICONS[Platform.Github],
  },
  {
    id: Platform.FrontendMentor,
    text: 'Frontend Mentor',
    colors: PLATFORM_COLORS[Platform.FrontendMentor],
    icon: PLATFORM_ICONS[Platform.FrontendMentor],
  },
  {
    id: Platform.Twitter,
    text: 'Twitter',
    colors: PLATFORM_COLORS[Platform.Twitter],
    icon: PLATFORM_ICONS[Platform.Twitter],
  },
  {
    id: Platform.LinkedIn,
    text: 'LinkedIn',
    colors: PLATFORM_COLORS[Platform.LinkedIn],
    icon: PLATFORM_ICONS[Platform.LinkedIn],
  },
  {
    id: Platform.Youtube,
    text: 'Youtube',
    colors: PLATFORM_COLORS[Platform.Youtube],
    icon: PLATFORM_ICONS[Platform.Youtube],
  },
  {
    id: Platform.Facebook,
    text: 'Facebook',
    colors: PLATFORM_COLORS[Platform.Facebook],
    icon: PLATFORM_ICONS[Platform.Facebook],
  },
  {
    id: Platform.Twitch,
    text: 'Twitch',
    colors: PLATFORM_COLORS[Platform.Twitch],
    icon: PLATFORM_ICONS[Platform.Twitch],
  },
  {
    id: Platform.Codewars,
    text: 'Codewars',
    colors: PLATFORM_COLORS[Platform.Codewars],
    icon: PLATFORM_ICONS[Platform.Codewars],
  },
  {
    id: Platform.Codepen,
    text: 'Codepen',
    colors: PLATFORM_COLORS[Platform.Codepen],
    icon: PLATFORM_ICONS[Platform.Codepen],
  },
  {
    id: Platform.FreeCodeCamp,
    text: 'freeCodeCamp',
    colors: PLATFORM_COLORS[Platform.FreeCodeCamp],
    icon: PLATFORM_ICONS[Platform.FreeCodeCamp],
  },
  {
    id: Platform.Gitlab,
    text: 'Gitlab',
    colors: PLATFORM_COLORS[Platform.Gitlab],
    icon: PLATFORM_ICONS[Platform.Gitlab],
  },
  {
    id: Platform.Hashnode,
    text: 'Hashnode',
    colors: PLATFORM_COLORS[Platform.Hashnode],
    icon: PLATFORM_ICONS[Platform.Hashnode],
  },
  {
    id: Platform.StackOverflow,
    text: 'Stack Overflow',
    colors: PLATFORM_COLORS[Platform.StackOverflow],
    icon: PLATFORM_ICONS[Platform.StackOverflow],
  },
];

export const platformMap = new Map(
  PLATFORMS.map((platform) => [platform.id, platform]),
);
