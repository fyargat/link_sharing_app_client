import {
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { sortableKeyboardCoordinates } from '@dnd-kit/sortable';

import { useOrder, useShareLink } from '@/src/entities/share-link';

export const useList = () => {
  const { links, isFetching } = useShareLink();

  const { onDragEnd, onDragMove } = useOrder();
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  return {
    links,
    isFetching,
    onDragEnd,
    onDragMove,
    sensors,
  };
};
