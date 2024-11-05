"use server";

import { getLocale } from "next-intl/server";
import catchAsync, { AppError } from "../utils/catchAsync";
import getAuthorizationHeader from "./get-authorization-header";
import { revalidatePath } from "next/cache";

//  Place order action
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

// Get orders data action
// export const getOrdersAction = catchAsync(async (pageNumber) => {
//   const locale = await getLocale();
//   const res = await fetch(
//     `${process.env.BASE_URL}/orders/me?page=${pageNumber}`,
//     {
//       method: "GET",
//       headers: {
//         "Accept-Language": locale,
//         // Function to return the token
//         ...(await getAuthorizationHeader()),
//       },
//       credentials: "include",
//     },
//   );
//   console.log("pageNumber", pageNumber);
//   // Parse data into a object
//   const data: APIResponse<OrdersData> = await res.json();

//   console.log("data", data);
//   // If the data is not success we pass the error as an AppError object
//   if (data.status !== "success") {
//     throw new AppError(data.message, 500);
//   } else if (!data.data) {
//     throw new AppError("Something went wrong!", 500);
//   }

//   // Return order data
//   return data.data;
// });

// // Get orders data action
// export const getSortedOrdersByOldestAction = catchAsync(async () => {
//   const locale = await getLocale();

//   const res = await fetch(`${process.env.BASE_URL}/orders/me?sort=createdAt`, {
//     method: "GET",
//     headers: {
//       "Accept-Language": locale,
//       // Function to return the token
//       ...(await getAuthorizationHeader()),
//     },
//     credentials: "include",
//   });

//   // Parse data into a object
//   const data: APIResponse<OrdersData> = await res.json();

//   // If the data is not success we pass the error as an AppError object
//   if (data.status !== "success") {
//     throw new AppError(data.message, 500);
//   } else if (!data.data) {
//     throw new AppError("Something went wrong!", 500);
//   }

//   // Return order data
//   return data.data;
// });

// Get orders data action with sorting and pagination
export const getOrdersAction = catchAsync(
  async (pageNumber: number, isSort: boolean) => {
    const locale = await getLocale();
    const sortQuery = isSort ? "&sort=createdAt" : "";
    const res = await fetch(
      `${process.env.BASE_URL}/orders/me?page=${pageNumber}${sortQuery}`,
      {
        method: "GET",
        headers: {
          "Accept-Language": locale,
          ...(await getAuthorizationHeader()),
        },
        credentials: "include",
      },
    );

    const data: APIResponse<OrdersData> = await res.json();

    if (data.status !== "success") {
      throw new AppError(data.message, 500);
    } else if (!data.data) {
      throw new AppError("Something went wrong!", 500);
    }

    // Return order data
    return data.data;
  },
);
