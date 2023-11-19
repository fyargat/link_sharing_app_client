import {
  EditableShareLinkPayloadType,
  IShareLink,
  ShareLinkId,
} from '../types';
import { createInstance } from './api-instance';
import { IShareLinksResponseData } from './types';

export const fetchShareLinks =
  async (): Promise<IShareLinksResponseData | null> => {
    try {
      const data = await createInstance<IShareLinksResponseData>({
        url: 'link',
        method: 'get',
      });

      return data;
    } catch (error) {
      return null;
    }
  };

export const createShareLink = async (
  body: EditableShareLinkPayloadType,
): Promise<IShareLink | null> => {
  try {
    const data = await createInstance<IShareLink>({
      url: 'link',
      method: 'post',
      data: body,
    });
    return data;
  } catch (error) {
    return null;
  }
};

export const updateShareLink = async (
  body: EditableShareLinkPayloadType & { id: ShareLinkId },
): Promise<IShareLink | null> => {
  try {
    const data = await createInstance<IShareLink>({
      url: 'link',
      method: 'patch',
      data: body,
    });
    return data;
  } catch (error) {
    return null;
  }
};

export const removeShareLink = async (
  id: ShareLinkId,
): Promise<IShareLink | null> => {
  try {
    const data = await createInstance<IShareLink>({
      url: `link/${id}`,
      method: 'Delete',
    });
    return data;
  } catch (error) {
    return null;
  }
};
