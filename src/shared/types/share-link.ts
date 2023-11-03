import { Platform } from '../config/platforms';

export type ShareLinkId = string;
export interface IShareLink {
  id: ShareLinkId;
  platformId: Platform;
  href: string;
}

export type EditableShareLinkPayloadType = Partial<
  Pick<IShareLink, 'href' | 'platformId'>
>;
