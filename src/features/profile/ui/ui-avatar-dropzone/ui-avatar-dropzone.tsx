import cn from 'classnames';
import { FC } from 'react';

import { UIAvatar } from '@/src/entities/profile';
import { ICONS } from '@/src/shared/config/icons';
import { SpinnerSize, UISpinner } from '@/src/shared/ui/ui-spinner';

import { useAvatarDropzone } from '../../model';
import styles from './ui-avatar-dropzone.module.scss';

interface IProps {}

export const UIAvatarDropzone: FC<IProps> = () => {
  const { getInputProps, getRootProps, avatar, isLoading } =
    useAvatarDropzone();

  return (
    <div
      className={cn(styles.container, {
        [styles.containerDisabled]: isLoading,
      })}
      {...getRootProps()}
    >
      <input {...getInputProps()} />

      <UIAvatar avatar={avatar} />

      {isLoading ? (
        <div className={styles.loader}>
          <UISpinner size={SpinnerSize.Small} />
        </div>
      ) : (
        <div className={styles.overlay}>
          <div className={styles.overlayIcon}>{ICONS['image']}</div>
          <p>+ Upload Image</p>
        </div>
      )}
    </div>
  );
};
