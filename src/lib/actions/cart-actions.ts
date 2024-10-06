"use server";

import { revalidatePath } from "next/cache";
import catchAsync, { AppError } from "../utils/catchAsync";
import getAuthorizationHeader from "./get-authorization-header";

// Get cart data action
export const getCartAction = catchAsync(async () => {
  const res = await fetch(`${process.env.BASE_URL}/carts`, {
    method: "GET",
    headers: {
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
    throw new AppError(data.message, 500);
  } else if (!data.data) {
    throw new AppError("Something went wrong!", 500);
  }

  // Return cart data
  return data.data.cart;
});

// Add new product to the cart by recive the product id and product quantity defult is 1
export const addToCartAction = catchAsync(
  async (productData: { product: string; quantity: number }) => {
    const res = await fetch(`${process.env.BASE_URL}/carts/product`, {
      method: "PATCH",
      headers: {
        ...(await getAuthorizationHeader()),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
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
    revalidatePath("/cart");
    revalidatePath("/");

    // Return the data if it oky
    return data;
  },
);

// Delete product from the cart by recive the product id
export const deleteProductFromCartAction = catchAsync(
  async (productId: string) => {
    await fetch(`${process.env.BASE_URL}/carts/product/${productId}`, {
      method: "DELETE",
      headers: {
        ...(await getAuthorizationHeader()),
      },
    });

    // Revalidate cart & home page to refresh the cache
    revalidatePath("/cart");
    revalidatePath("/");
  },
);

// Check if the product is in the cart or not
// export async function checkIfTheItemInCart(
//   productId: string,
//   cartItems: ProductItem[],
// ) {
//   const x = await getCartAction();
//   console.log("XXXXXXXXXXXXXXX", x);
//   // return cartItems.some((item) => item.product._id === productId);
// }
