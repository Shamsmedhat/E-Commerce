import {
  addReviewAction,
  deleteReviewAction,
} from "@/lib/actions/reviews-actions";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

export function useAddReview() {
  // const queryClient = useQueryClient();

  const { mutate: addReview, isPending: isAddingReview } = useMutation({
    mutationFn: (reviewData: AddReviewForm) => addReviewAction(reviewData),
    onSuccess: (data: AddReviewData) => {
      toast.success("Your review is added successfully.");

      // queryClient.invalidateQueries({ queryKey: ["cart", "orders"] });
    },
    onError: (err) => {
      toast.error("You have already reviewed this product.");
    },
  });

  return { addReview, isAddingReview };
}

export function useDeleteReview() {
  // const queryClient = useQueryClient();

  const { mutate: deleteReview, isPending: isDeletingReview } = useMutation({
    mutationFn: async ({
      reviewId,
      productId,
    }: {
      reviewId: string;
      productId: string;
    }) => {
      return deleteReviewAction(reviewId, productId);
    },
    onSuccess: () => {
      toast.success("Review has been deleted successfully.");
      // queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
    onError: (err: Error) => {
      toast.error(err.message);
    },
  });

  return { deleteReview, isDeletingReview };
}
