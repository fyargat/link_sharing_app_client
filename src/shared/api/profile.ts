import { createInstance } from './api-instance';
import { IProfileData, IProfileRequestData } from './types';

export const fetchProfileInfo = async (): Promise<IProfileData | null> => {
  try {
    const data = await createInstance<IProfileData>({
      url: 'profile',
      method: 'get',
    });
    return data;
  } catch (error) {
    return null;
  }
};

export const updateProfileInfo = async (
  body: IProfileRequestData,
): Promise<IProfileData | null> => {
  try {
    const data = await createInstance<IProfileData>({
      url: 'profile',
      method: 'patch',
      data: body,
    });
    return data;
  } catch (error) {
    return null;
  }
};
