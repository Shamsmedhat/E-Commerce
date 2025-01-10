"use server";

import { revalidatePath } from "next/cache";
import catchAsync, { AppError } from "../utils/catchAsync";
import getAuthorizationHeader from "./get-authorization-header";
import { getLocale } from "next-intl/server";

// Get cart data action
export const getCartAction = catchAsync(async () => {
  const locale = await getLocale();
  const res = await fetch(`https://e-commerce.thelanerealestate.com/v1/carts`, {
    method: "GET",
    headers: {
      "Accept-Language": locale,
      // Function to return the token
      ...(await getAuthorizationHeader()),
    },
    credentials: "include",
    // next: { tags: ["cart-tag"] },
  });

  // Parse data into a object
  const data: APIResponse<CartData> = await res.json();
  // If the data is not success we pass the error as an AppError object
  if (data.status !== "success") {
    throw new AppError(data.message, 404);
  } else if (!data.data) {
    throw new AppError("Something went wrong!", 500);
  }

  // Return cart data
  return data.data;
});

// Add new product or update to the cart by recive the product id and product quantity defult is 1
export const addToCartAction = catchAsync(
  async (productData: { product: string; quantity: number }) => {
    const res = await fetch(
      `https://e-commerce.thelanerealestate.com/v1/carts/product`,
      // `${process.env.BASE_URL}/carts/product`,
      {
        method: "PATCH",
        headers: {
          ...(await getAuthorizationHeader()),
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      },
    );

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
    revalidatePath("/cart");
    revalidatePath("/");

    // Return the data if it oky
    return data;
  },
);

// Delete product from the cart by recive the product id
export const deleteProductFromCartAction = catchAsync(
  async (productId: string) => {
    await fetch(
      `https://e-commerce.thelanerealestate.com/v1/carts/product/${productId}`,
      {
        method: "DELETE",
        headers: {
          ...(await getAuthorizationHeader()),
        },
      },
    );

    // Revalidate cart & home page to refresh the cache
    revalidatePath("/cart");
    revalidatePath("/");
  },
);
