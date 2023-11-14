import { useEffect, useState } from 'react';

import { Platform, platformMap } from '../../config/platforms';
import { useOutsideClick } from '../../lib/hooks/useOutsideClick';

export const useSelectPlatform = (
  platformId: Platform = Platform.Github,
  onSelect: (id: Platform) => void,
) => {
  const [isVisible, setIsVisible] = useState(false);
  const [current, setCurrent] = useState<Platform>(platformId);
  const platform = platformMap.get(current);

  useEffect(() => {
    setCurrent(platformId);
  }, [platformId]);

  const handleToggleVisible = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    setIsVisible((prev) => !prev);
  };

  const handleSelect = (id: number) => () => {
    setCurrent(id);
    onSelect(id);
    setIsVisible(false);
  };

  const containerRef = useOutsideClick(() => {
    setIsVisible(false);
  });

  return {
    onToggleVisible: handleToggleVisible,
    onSelect: handleSelect,
    platform,
    isVisible,
    containerRef,
  };
};
