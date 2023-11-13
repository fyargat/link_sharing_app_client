import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { fetchOrder, updateOrder } from '@/src/shared/api/order';

export const orderKey = ['order'];

export const useOrderQuery = () => {
  return useQuery({
    queryKey: orderKey,
    queryFn: fetchOrder,
    select(data) {
      return data?.data ?? [];
    },
    retry: 0,
    staleTime: 5 * 60 * 1000,
  });
};

export const useOrderUpdateMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateOrder,
    onSuccess: (data) => {
      queryClient.setQueryData(orderKey, data);
    },
  });
};
