import {
  addToWishlistAction,
  getWishlistAction,
  removeToWishlistAction,
} from "@/lib/actions/wishlist.actions";
import {
  useMutation,
  useQuery,
  useQueryClient,
  UseQueryResult,
} from "@tanstack/react-query";
import { Session } from "next-auth";
import { toast } from "react-toastify";

export function useWishlist(session: Session | null) {
  const {
    data: wishlist,
    isFetching,
    isError,
    isPending,
  }: UseQueryResult<WishlistData> = useQuery({
    queryKey: ["wishlist"],
    queryFn: () => getWishlistAction(),
    enabled: !!session,
  });

  return { wishlist, isFetching, isError, isPending };
}

export function useAddToWishlist() {
  const queryClient = useQueryClient();
  const {
    mutate: addToWishlist,
    isPending: isAddingToWishlist,
    isSuccess: isAddingToWishlistSuccess,
    isError: isAddingToWishlistError,
  } = useMutation({
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
  // Function to handle array of objects
  const addMultipleToWishlist = async (
    productDataArray: { product: string }[],
  ) => {
    try {
      await Promise.all(
        productDataArray.map((productId) => addToWishlist(productId.product)),
      );
      // toast.success("All products have been added to the cart successfully.");
    } catch (error) {
      toast.error("An error occurred while adding products to the wishlist.");
    }
  };

  return {
    addToWishlist,
    addMultipleToWishlist,
    isAddingToWishlist,
    isAddingToWishlistSuccess,
    isAddingToWishlistError,
  };
}

export function useDeleteFromWishlist() {
  const queryClient = useQueryClient();
  const {
    mutate: removeFromWishlist,
    isPending: isRemovingFromWishlist,
    isSuccess: isRemovingFromWishlistSuccess,
    isError: isRemovingFromWishlistError,
  } = useMutation({
    mutationFn: async (productId: string) => {
      removeToWishlistAction(productId);
    },
    onSuccess: () => {
      toast.success("Product has been removed from the wishlist successfully.");
      queryClient.invalidateQueries({ queryKey: ["wishlist"] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return {
    removeFromWishlist,
    isRemovingFromWishlist,
    isRemovingFromWishlistSuccess,
    isRemovingFromWishlistError,
  };
}
