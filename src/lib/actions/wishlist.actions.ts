"use server";

import { getLocale } from "next-intl/server";
import catchAsync, { AppError } from "../utils/catchAsync";
import { revalidatePath } from "next/cache";
import getAuthorizationHeader from "./get-authorization-header";

//  Add Review action
export const addToWishlistAction = catchAsync(async (productId: string) => {
  const res = await fetch(`${process.env.BASE_URL}/reviews`, {
    method: "POST",
    headers: {
      // Function to return the token
      ...(await getAuthorizationHeader()),
    },
    credentials: "include",
  });

  // Parse data into a object
  const data = await res.json();

  // If the data is not success we pass the error as an AppError object
  if (!res.ok) {
    throw new AppError(
      data.message || "Failed to add to cart",
      res.status || 500,
    );
  }

  // Revalidate cart & home page to refresh the cache
  revalidatePath("/");

  // Return the data if it oky
  return data;
});
