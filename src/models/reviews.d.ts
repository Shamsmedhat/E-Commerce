declare global {
  interface SingleReview {
    _id: string;
    user: {
      _id: string;
      username: string;
      email: string;
      firstName: string;
      lastName: string;
      photo: string;
      active: boolean;
      createdAt: string;
      updatedAt: string;
      __v: number;
      wishlist: string[];
    };
    product: string;
    rating: number;
    comment: string;
    createdAt: string;
    updatedAt: string;
  }
  interface ReviewsData {
    reviews: SingleReview[];
  }

  interface AddReviewForm {
    product: string;
    rating: number;
    comment: string;
  }

  interface AddReviewResponse {
    user: string;
    product: string;
    rating: number;
    comment: string;
    _id: string;
    createdAt: string;
    updatedAt: string;
  }

  interface AddReviewData {
    review: AddReviewResponse;
  }
}

export {};
