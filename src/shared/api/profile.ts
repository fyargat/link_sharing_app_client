import { createInstance } from './api-instance';
import { IProfileRequestData, IProfileResponseData } from './types';

export const fetchProfileInfo =
  async (): Promise<IProfileResponseData | null> => {
    try {
      const data = await createInstance<IProfileResponseData>({
        url: 'profile',
        method: 'get',
      });
      return data;
    } catch (error) {
      return null;
      console.log('error', error);
    }
  };

export const updateProfileInfo = async (
  body: IProfileRequestData,
): Promise<IProfileResponseData | null> => {
  try {
    const data = await createInstance<IProfileResponseData>({
      url: 'profile',
      method: 'patch',
      data: body,
    });
    return data;
  } catch (error) {
    return null;
    console.log('error', error);
  }
};
