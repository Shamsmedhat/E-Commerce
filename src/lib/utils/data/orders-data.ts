import {
  getOrdersAction,
  getTotalOrdersAction,
  // getSortedOrdersByOldestAction,
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

export function useOrders(pageNumber: number, isSort: boolean) {
  const {
    data: orders,
    isFetching,
    isError,
    isPending,
  }: UseQueryResult<OrdersData> = useQuery({
    queryKey: ["orders", pageNumber, isSort],
    queryFn: () => getOrdersAction(pageNumber, isSort),
  });

  return { orders, isFetching, isError, isPending };
}
export function useTotalOrders() {
  const {
    data: totalOrders,
    isFetching,
    isError,
    isPending,
  }: UseQueryResult<OrdersData> = useQuery({
    queryKey: ["total-orders"],
    queryFn: () => getTotalOrdersAction(),
  });

  return { totalOrders, isFetching, isError, isPending };
}

export function usePlaceOrder() {
  const queryClient = useQueryClient();
  const router = useRouter();

  const {
    mutate: placeOrder,
    isPending: isPlacingOrder,
    isSuccess: isOrderSuccess,
  } = useMutation({
    //todo
    mutationFn: (orderData: PlaceOrder | any): any =>
      placeOrderAction(orderData),
    onSuccess: (data: CardOrederData | CashOrderData) => {
      queryClient.invalidateQueries({ queryKey: ["cart", "orders"] });
      if ("checkoutUrl" in data) {
        // Type guard to check if data is CardOrederData
        router.push(data.checkoutUrl); // Access checkoutUrl safely
        toast.success("Order is placed successfully.");
      } else {
        toast.success("Order is placed successfully.");
      }
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { placeOrder, isPlacingOrder, isOrderSuccess };
}
