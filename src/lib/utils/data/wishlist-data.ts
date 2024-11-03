import { addToWishlistAction } from "@/lib/actions/wishlist.actions";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

export function useAddToWishlist() {
  const queryClient = useQueryClient();
  const { mutate: addToWishlist, isPending: isAddingToWishlist } = useMutation({
    mutationFn: async (productId: string) => {
      addToWishlistAction(productId);
    },
    onSuccess: () => {
      toast.success("Product has been added to the wishlist successfully.");
      queryClient.invalidateQueries({ queryKey: ["wishlist"] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { addToWishlist, isAddingToWishlist };
}
