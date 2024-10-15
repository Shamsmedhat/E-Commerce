import { placeOrderAction } from "@/lib/actions/order-actions";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

export function usePlaceOrder() {
  const queryClient = useQueryClient();

  // Use mutation to handle placing an order
  const { mutate: placeOrder, isPending: isPlacingOrder } = useMutation({
    mutationFn: (orderData: PlaceOrder) => placeOrderAction(orderData),
    onSuccess: () => {
      toast.success("Order is placed successfully.");
      //todo after i create the get orders
      // queryClient.invalidateQueries({ queryKey: ["orders"] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { placeOrder, isPlacingOrder };
}
