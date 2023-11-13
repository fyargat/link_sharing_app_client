import { ISharedInfoData } from './sharee-info.types';

export const getSharedInfo = async (
  id: string,
): Promise<ISharedInfoData | null> => {
  console.log('getSharedInfo id', id);

  const response = await fetch(`http://localhost:3001/shared-info/${id}`);

  if (!response.ok) {
    return null;
  }

  return (await response.json()) as ISharedInfoData;
};
