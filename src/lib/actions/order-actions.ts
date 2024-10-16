"use server";

import catchAsync, { AppError } from "../utils/catchAsync";
import getAuthorizationHeader from "./get-authorization-header";

// Get order data action
export const placeOrderAction = catchAsync(async (orderData: PlaceOrder) => {
  const res = await fetch(`${process.env.BASE_URL}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // Function to return the token
      ...(await getAuthorizationHeader()),
    },
    credentials: "include",
    body: JSON.stringify(orderData),
  });

  // Parse data into a object
  const data: APIResponse<OrderCash | OrderCard> = await res.json();

  // If the data is not success we pass the error as an AppError object
  if (data.status !== "success") {
    throw new AppError(data.message, 500);
  } else if (!data.data) {
    throw new AppError("Something went wrong!", 500);
  }

  // Return order data
  return data.data;
});
