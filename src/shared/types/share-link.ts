import { Platform } from '../config/platforms';

export type ShareLinkId = number;
export interface IShareLink {
  id: ShareLinkId;
  platformId: Platform;
  text: string;
  ownerId: number;
}

export type EditableShareLinkPayloadType = Partial<
  Pick<IShareLink, 'text' | 'platformId'>
>;

export interface IShareLinkOrder {
  order: number[];
}
