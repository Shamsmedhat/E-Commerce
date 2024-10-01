import {
  addToCartAction,
  deleteProductFromCartAction,
} from "@/lib/actions/cart-actions";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

// using useQuery get the products based on the category selected function recive category name and locale
export function useAddToCart() {
  const { mutate: addToCart, isPending: isAddingToCart } = useMutation({
    mutationFn: async (productData: { product: string; quantity: number }) => {
      addToCartAction(productData);
    },
    onSuccess: () => {
      toast.success("Product has been added to the cart successfully.");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { addToCart, isAddingToCart };
}

// using useQuery get the products based on the category selected function recive category name and locale
export function useDeleteProductFromCart() {
  const {
    mutate: deleteProductFromCart,
    isPending: isDeleteingProductFromCart,
  } = useMutation({
    mutationFn: async (productId: string) => {
      deleteProductFromCartAction(productId);
    },
    onSuccess: () => {
      toast.success("Product has been deleted from the cart successfully.");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { deleteProductFromCart, isDeleteingProductFromCart };
}
