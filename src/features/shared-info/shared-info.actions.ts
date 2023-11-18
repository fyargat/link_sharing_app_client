import { ISharedInfoData } from './sharee-info.types';

export const getSharedInfo = async (
  id: string,
): Promise<ISharedInfoData | null> => {
  const response = await fetch(
    `http://link-sharing-app_api:3000/api/shared-info/${id}`,
    {
      cache: 'no-store',
    },
  );

  if (!response.ok) {
    return null;
  }

  return (await response.json()) as ISharedInfoData;
};
