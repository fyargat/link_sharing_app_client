import cn from 'classnames';
import { FC } from 'react';

import { ICONS } from '../../config/icons';
import { PLATFORMS } from '../../config/platforms';
import { useSelectPlatform } from './ui-select-platform.model';
import styles from './ui-select-platform.module.scss';

interface IProps {}

export const UISelectPlatform: FC<IProps> = () => {
  const { platform, isVisible, onSelect, onToggleVisible } =
    useSelectPlatform();

  return (
    <div className={styles.container}>
      <p className={styles.label}>Platform</p>

      <div className={styles.select}>
        <button onClick={onToggleVisible} className={styles.button}>
          <div className={styles.icon}>{platform?.icon}</div>
          <p>{platform?.text}</p>
          <div
            className={cn(styles.arrow, {
              [styles.arrowRotate]: isVisible,
            })}
          >
            {ICONS['selectArrow']}
          </div>
        </button>

        {isVisible ? (
          <ul className={styles.list}>
            {PLATFORMS.map((platform) => (
              <li key={platform.id} className={styles.item}>
                <button
                  onClick={onSelect(platform.id)}
                  className={styles.option}
                >
                  <div className={styles.optionIcon}>{platform.icon}</div>
                  <p className={styles.optionText}>{platform.text}</p>
                </button>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
};
