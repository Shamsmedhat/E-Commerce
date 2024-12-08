"use server";

import { getLocale } from "next-intl/server";
import catchAsync, { AppError } from "../utils/catchAsync";
import getAuthorizationHeader from "./get-authorization-header";
import { revalidatePath } from "next/cache";
import { BASE_URL } from "../constants/urls";

// Get products //* by the category id
export async function getReviewByProductIdAction(
  productId: string,
): Promise<ReviewsData> {
  // get web locae
  const locale = await getLocale();
  const res = await fetch(`${BASE_URL}/reviews?product=${productId}`, {
    headers: {
      "Accept-Language": locale,
    },
  });
  const data: APIResponse<ReviewsData> = await res.json();

  if (data.status !== "success") {
    throw new AppError(data.message, 500);
  } else if (!data.data) {
    throw new AppError("Something went wrong!", 500);
  }

  // return data
  return data.data;
}

//  Add Review action
export const addReviewAction = catchAsync(async (reviewData: AddReviewForm) => {
  const res = await fetch(`${BASE_URL}/reviews`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // Function to return the token
      ...(await getAuthorizationHeader()),
    },
    credentials: "include",
    body: JSON.stringify(reviewData),
  });

  // Parse data into a object
  const data: APIResponse<AddReviewData> = await res.json();

  // If the data is not success we pass the error as an AppError object
  if (data.status !== "success") {
    throw new AppError(data.message, 500);
  } else if (!data.data) {
    throw new AppError("Something went wrong!", 500);
  }

  revalidatePath(`/product/${reviewData.product}`);

  // Return order data
  return data.data;
});

export const deleteReviewAction = catchAsync(
  async (reviewId: string, productId: string) => {
    await fetch(`${BASE_URL}/reviews/${reviewId}/me`, {
      method: "DELETE",
      headers: {
        ...(await getAuthorizationHeader()),
      },
    });

    // Revalidate cart & home page to refresh the cache
    revalidatePath(`/product/${productId}`);
  },
);
