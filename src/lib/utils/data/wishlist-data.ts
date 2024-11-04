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
import { toast } from "react-toastify";

export function useWishlist() {
  const {
    data: wishlist,
    isFetching,
    isError,
    isPending,
  }: UseQueryResult<WishlistData> = useQuery({
    queryKey: ["wishlist"],
    queryFn: () => getWishlistAction(),
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

  return {
    addToWishlist,
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
