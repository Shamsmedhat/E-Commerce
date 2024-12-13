"use server";

import { getLocale } from "next-intl/server";
import catchAsync, { AppError } from "../utils/catchAsync";
import { revalidatePath } from "next/cache";
import getAuthorizationHeader from "./get-authorization-header";

// Get wishlist data action
export const getWishlistAction = catchAsync(async () => {
  const locale = await getLocale();
  const res = await fetch(
    `https://e-commerce.thelanerealestate.com/v1/wishlists`,
    {
      method: "GET",
      headers: {
        "Accept-Language": locale,
        // Function to return the token
        ...(await getAuthorizationHeader()),
      },
      credentials: "include",
    },
  );

  // Parse data into a object
  const data: APIResponse<WishlistData> = await res.json();

  // If the data is not success we pass the error as an AppError object
  if (data.status !== "success") {
    throw new AppError(data.message, 500);
  } else if (!data.data) {
    throw new AppError("Something went wrong!", 500);
  }

  // Return cart data
  return data.data;
});

//  Add Review action
export const addToWishlistAction = catchAsync(async (productId: string) => {
  const res = await fetch(
    `https://e-commerce.thelanerealestate.com/v1/wishlists/${productId}`,
    {
      method: "POST",
      headers: {
        // Function to return the token
        ...(await getAuthorizationHeader()),
      },
      credentials: "include",
    },
  );

  // Parse data into a object
  const data = await res.json();

  // If the data is not success we pass the error as an AppError object
  if (!res.ok) {
    throw new AppError(
      data.message || "Failed to add to wishlist",
      res.status || 500,
    );
  }

  // Revalidate cart & home page to refresh the cache
  revalidatePath("/");

  // Return the data if it oky
  return data;
});

//  Add Review action
export const removeToWishlistAction = catchAsync(async (productId: string) => {
  const res = await fetch(
    `https://e-commerce.thelanerealestate.com/v1/wishlists/${productId}`,
    {
      method: "DELETE",
      headers: {
        // Function to return the token
        ...(await getAuthorizationHeader()),
      },
      credentials: "include",
    },
  );

  // Parse data into a object
  const data = await res.json();

  // If the data is not success we pass the error as an AppError object
  if (!res.ok) {
    throw new AppError(
      data.message || "Failed to reomve from wishlist",
      res.status || 500,
    );
  }

  // Revalidate cart & home page to refresh the cache
  revalidatePath("/");

  // Return the data if it oky
  return data;
});
