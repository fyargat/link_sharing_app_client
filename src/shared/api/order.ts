import { IShareLink, IShareLinkOrder } from '../types';
import { createInstance } from './api-instance';
import { IOrderResponseData } from './types';

export const fetchOrder = async (): Promise<IOrderResponseData | null> => {
  try {
    const data = await createInstance<IOrderResponseData>({
      url: 'order',
      method: 'get',
    });

    return data;
  } catch (error) {
    console.log('error', error);
    return null;
  }
};

export const updateOrder = async (body: IShareLinkOrder) => {
  try {
    const data = await createInstance<IShareLink>({
      url: 'order',
      method: 'post',
      data: body,
    });
    return data;
  } catch (error) {
    console.log('error', error);
    return null;
  }
};
