"use server";

import catchAsync, { AppError } from "../utils/catchAsync";
import getAuthorizationHeader from "./get-authorization-header";

export const getCartAction = catchAsync(async () => {
  const res = await fetch(`${process.env.BASE_URL}/carts`, {
    method: "GET",
    headers: {
      ...(await getAuthorizationHeader()),
    },
    credentials: "include",
  });

  const data: APIResponse<CartData> = await res.json();

  if (data.status !== "success") {
    throw new AppError(data.message, 500);
  } else if (!data.data) {
    throw new AppError("Something went wrong!", 500);
  }

  // Return cart data
  return data.data.cart;
});

export const addToCartAction = catchAsync(async (pData: Object) => {
  const res = await fetch(`${process.env.BASE_URL}/carts/product`, {
    method: "PATCH",
    headers: {
      ...(await getAuthorizationHeader()),
      "Content-Type": "application/json",
    },
    body: JSON.stringify(pData),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(
      JSON.stringify({
        message: data.message || "Failed to add to cart",
        statusCode: res.status,
      }),
    );
  }

  // Ensure the response is a plain object
  return JSON.parse(JSON.stringify(data)); // Ensuring only plain data is returned
});
