import { IProfileData } from '@/src/shared/api/types';
import { IShareLink } from '@/src/shared/types';

export interface ISharedInfoData {
  profile: IProfileData;
  links: IShareLink[];
  order: number[];
}
