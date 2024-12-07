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
import { Session } from "next-auth";
import { toast } from "react-toastify";

export function useCart(session: Session | null) {
  const {
    data: cart,
    isFetching,
    isError,
    isPending,
  }: UseQueryResult<CartData> = useQuery({
    queryKey: ["cart"],
    queryFn: () => getCartAction(),
    enabled: !!session,
  });
  return { cart, isFetching, isError, isPending };
}

// using useQuery get the products based on the category selected function recive category name and locale
// export function useAddToCart(usage = "cart") {
//   const queryClient = useQueryClient();
//   const { mutate: addToCart, isPending: isAddingToCart } = useMutation({
//     mutationFn: async (productData: { product: string; quantity: number }) => {
//       addToCartAction(productData);
//     },
//     onSuccess: () => {
//       usage === "cart" &&
//         toast.success("Product has been added to the cart successfully.");
//       usage === "quantity" &&
//         toast.success("The quantity of the product has been changed.");

//       queryClient.invalidateQueries({ queryKey: ["cart"] });
//     },
//     onError: (err) => {
//       toast.error(err.message);
//     },
//   });

//   return { addToCart, isAddingToCart };
// }
export function useAddToCart(usage = "cart") {
  const queryClient = useQueryClient();
  const { mutateAsync: addToCart, isPending: isAddingToCart } = useMutation({
    mutationFn: async (productData: { product: string; quantity: number }) => {
      return addToCartAction(productData); // Assuming addToCartAction returns a promise
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

  // Function to handle array of objects
  const addMultipleToCart = async (
    productDataArray: { product: string; quantity: number }[],
  ) => {
    try {
      await Promise.all(
        productDataArray.map((productData) => addToCart(productData)),
      );
      // toast.success("All products have been added to the cart successfully.");
    } catch (error) {
      toast.error("An error occurred while adding products to the cart.");
    }
  };

  return { addToCart, addMultipleToCart, isAddingToCart };
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
