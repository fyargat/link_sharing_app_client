import { useState } from 'react';

import { Platform, platformMap } from '../../config/platforms';

export const useSelectPlatform = (
  platformId: Platform = Platform.Github,
  onSelect: (id: Platform) => void,
) => {
  const [isVisible, setIsVisible] = useState(false);
  const [current, setCurrent] = useState<Platform>(platformId);
  const platform = platformMap.get(current);

  const handleToggleVisible = () => setIsVisible((prev) => !prev);
  const handleSelect = (id: number) => () => {
    setCurrent(id);
    onSelect(id);
    setIsVisible(false);
  };

  return {
    onToggleVisible: handleToggleVisible,
    onSelect: handleSelect,
    platform,
    isVisible,
  };
};
