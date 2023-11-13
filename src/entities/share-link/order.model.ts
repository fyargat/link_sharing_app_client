import { DragMoveEvent } from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable';
import { useQueryClient } from '@tanstack/react-query';

import { IOrderResponseData } from '@/src/shared/api/types';

import { orderKey, useOrderUpdateMutation } from './order.queries';

export const useOrder = () => {
  const { mutate: updateOrder } = useOrderUpdateMutation();

  const queryClient = useQueryClient();
  const handleDragMove = ({ active, over }: DragMoveEvent) => {
    const { data: order }: IOrderResponseData =
      queryClient.getQueryData(orderKey)!;

    if (active.id !== over?.id) {
      const oldIndex = order.findIndex((v) => v === active.id);
      const newIndex = order.findIndex((v) => v === over?.id);

      const newOrder = arrayMove(order, oldIndex, newIndex);

      queryClient.setQueryData(orderKey, { data: newOrder });
    }
  };

  const handleDragEnd = () => {
    const { data: order }: IOrderResponseData =
      queryClient.getQueryData(orderKey)!;

    updateOrder({ order });
  };

  return {
    onDragMove: handleDragMove,
    onDragEnd: handleDragEnd,
  };
};
