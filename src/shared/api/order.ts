import { IShareLink, IShareLinkOrder } from '../types';
import { createInstance } from './api-instance';
import { IOrderResponseData } from './types';

export const fetchOrder = async (): Promise<IOrderResponseData | null> => {
  const data = await createInstance<IOrderResponseData>({
    url: 'order',
    method: 'get',
  });

  return data;
};

export const updateOrder = async (body: IShareLinkOrder) => {
  const data = await createInstance<IShareLink>({
    url: 'order',
    method: 'post',
    data: body,
  });
  return data;
};
