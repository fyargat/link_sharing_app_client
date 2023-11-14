import cn from 'classnames';
import Image from 'next/image';
import { FC } from 'react';

import styles from './ui-avatar.module.scss';

interface IProps {
  avatar?: string;
  className?: string;
  isVisibleBorder?: boolean;
}

export const UIAvatar: FC<IProps> = ({
  avatar,
  className = '',
  isVisibleBorder = false,
}) => {
  if (!avatar) return null;

  return (
    <div
      className={cn(styles.container, {
        [className]: className,
      })}
    >
      <div
        className={cn(styles.border, {
          [styles.borderVisible]: isVisibleBorder,
        })}
      >
        <Image
          src={avatar}
          width={192}
          height={192}
          priority
          alt='Avatar image'
        />
      </div>
    </div>
  );
};
