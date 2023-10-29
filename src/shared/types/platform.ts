import { Platform } from '../config/platforms/platform-enum';

export interface IPlatformColor {
  color: string;
  backgroundColor: string;
  hasBorder?: boolean;
}

export interface IPlatform {
  id: Platform;
  text: string;
  colors: IPlatformColor;
  icon: React.ReactNode;
}
