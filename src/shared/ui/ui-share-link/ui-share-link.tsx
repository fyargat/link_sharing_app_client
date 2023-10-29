import cn from 'classnames';
import { FC } from 'react';

import { ICONS } from '../../config/icons';
import { ILink } from '../../types';
import styles from './ui-share-link.module.scss';

interface IProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  link: ILink;
}

export const UIShareLink: FC<IProps> = ({ link, ...props }) => {
  const { colors, text, icon } = link.platform;

  return (
    <a
      href={link.href}
      className={cn(styles.link, {
        [styles.linkWithBorder]: colors?.hasBorder,
      })}
      style={{ backgroundColor: colors.backgroundColor, color: colors.color }}
      target='_blank'
      rel='noopener noreferrer'
      {...props}
    >
      <div className={styles.left}>
        <div className={styles.icon}>{icon}</div>
        <p className={styles.text}>{text}</p>
      </div>
      <div className={styles.arrow}>{ICONS['shareLinkArrow']}</div>
    </a>
  );
};
