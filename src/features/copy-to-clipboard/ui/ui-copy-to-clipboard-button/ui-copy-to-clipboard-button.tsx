import cn from 'classnames';
import { FC } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

import { ICONS } from '@/src/shared/config/icons';

import styles from './ui-copy-to-clipboard-button.module.scss';

interface IProps {
  className?: string;
  onCopy: () => void;
  text: string;
}

export const UICopyToClipboardButton: FC<IProps> = ({
  className = '',
  text,
  onCopy,
}) => {
  return (
    <div
      className={cn(styles.container, {
        [className]: className,
      })}
    >
      <CopyToClipboard text={text} onCopy={onCopy}>
        <button className={styles.copy}>{ICONS['copy']}</button>
      </CopyToClipboard>
    </div>
  );
};
