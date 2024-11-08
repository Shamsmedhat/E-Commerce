import {
  addToCartAction,
  deleteProductFromCartAction,
  getCartAction,
} from "@/lib/actions/cart-actions";
import {
  useMutation,
  useQuery,
  useQueryClient,
  UseQueryResult,
} from "@tanstack/react-query";
import { toast } from "react-toastify";

// using useQuery get the products based on the category selected function recive category name and locale
export function useAddToCart(usage = "cart") {
  const queryClient = useQueryClient();
  const { mutate: addToCart, isPending: isAddingToCart } = useMutation({
    mutationFn: async (productData: { product: string; quantity: number }) => {
      addToCartAction(productData);
    },
    onSuccess: () => {
      usage === "cart" &&
        toast.success("Product has been added to the cart successfully.");
      usage === "quantity" &&
        toast.success("The quantity of the product has been changed.");

      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { addToCart, isAddingToCart };
}

// using useQuery get the products based on the category selected function recive category name and locale
export function useDeleteProductFromCart() {
  const queryClient = useQueryClient();

  const {
    mutate: deleteProductFromCart,
    isPending: isDeleteingProductFromCart,
  } = useMutation({
    mutationFn: async (productId: string) => {
      deleteProductFromCartAction(productId);
    },
    onSuccess: () => {
      toast.success("Product has been deleted from the cart successfully.");
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { deleteProductFromCart, isDeleteingProductFromCart };
}

export function useCart() {
  const {
    data: cart,
    isFetching,
    isError,
    isPending,
  }: UseQueryResult<CartData> = useQuery({
    queryKey: ["cart"],
    queryFn: () => getCartAction(),
  });

  return { cart, isFetching, isError, isPending };
}
