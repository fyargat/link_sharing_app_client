import cn from 'classnames';
import { FC } from 'react';

import styles from './ui-skeleton.module.scss';

interface IProps {
  className?: string;
}

export const UISkeleton: FC<IProps> = ({ className }) => {
  return (
    <div
      className={cn(styles.container, {
        [className as string]: className,
      })}
    />
  );
};
