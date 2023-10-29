import { useState } from 'react';

import { Platform, platformMap } from '../../config/platforms';

export const useSelectPlatform = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [current, setCurrent] = useState<Platform>(Platform.Github);
  const platform = platformMap.get(current);

  const handleToggleVisible = () => setIsVisible((prev) => !prev);
  const handleSelect = (id: number) => () => {
    setCurrent(id);
    setIsVisible(false);
  };

  return {
    onToggleVisible: handleToggleVisible,
    onSelect: handleSelect,
    platform,
    isVisible,
  };
};
