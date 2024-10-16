import {
  getOrdersAction,
  getSortedOrdersByOldestAction,
  placeOrderAction,
} from "@/lib/actions/order-actions";
import { useRouter } from "@/navigarion";
import {
  useMutation,
  useQuery,
  useQueryClient,
  UseQueryResult,
} from "@tanstack/react-query";
import { toast } from "react-toastify";

export function useOrders() {
  const {
    data: orders,
    isFetching,
    isError,
    isPending,
  }: UseQueryResult<OrdersData> = useQuery({
    queryKey: ["orders"],
    queryFn: () => getOrdersAction(),
  });

  return { orders, isFetching, isError, isPending };
}
export function useSortedOrdersByOldest() {
  const {
    data: sortedOrders,
    isFetching,
    isError,
    isPending,
  }: UseQueryResult<OrdersData> = useQuery({
    queryKey: ["sorted-orders"],
    queryFn: () => getSortedOrdersByOldestAction(),
  });

  return { sortedOrders, isFetching, isError, isPending };
}

export function usePlaceOrder() {
  const queryClient = useQueryClient();
  const router = useRouter();

  const { mutate: placeOrder, isPending: isPlacingOrder } = useMutation({
    mutationFn: (orderData: PlaceOrder) => placeOrderAction(orderData),
    onSuccess: (data: CardOrederData | CashOrderData) => {
      if ("checkoutUrl" in data) {
        // Type guard to check if data is CardOrederData
        router.push(data.checkoutUrl); // Access checkoutUrl safely
        toast.success("Order is placed successfully.");
      } else {
        // Handle CashOrderData if necessary
        toast.success("Cash order placed successfully."); // Adjust the success message accordingly
      }
      toast.success("Order is placed successfully.");
      queryClient.invalidateQueries({ queryKey: ["cart", "orders"] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { placeOrder, isPlacingOrder };
}
