import cn from 'classnames';
import { FC } from 'react';

import styles from './ui-skeleton.module.scss';

interface IProps {
  className?: string;
}

export const UISkeleton: FC<IProps> = ({ className = styles.default }) => {
  return (
    <div
      className={cn(styles.container, {
        [className]: className,
      })}
    />
  );
};
