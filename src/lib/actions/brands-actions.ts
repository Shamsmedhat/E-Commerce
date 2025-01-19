"use server";

import { getLocale } from "next-intl/server";
import catchAsync, { AppError } from "../utils/catchAsync";
import { BrandData } from "../types/brand";

export const getBrandsAction = catchAsync(async () => {
  const locale = await getLocale();
  const res = await fetch(
    `https://e-commerce.thelanerealestate.com/v1/brands`,
    {
      method: "GET",
      headers: {
        "Accept-Language": locale,
      },
    },
  );

  // Parse data into a object
  const data: APIResponse<BrandData> = await res.json();
  // If the data is not success we pass the error as an AppError object
  if (data.status !== "success") {
    throw new AppError(data.message, 404);
  } else if (!data.data) {
    throw new AppError("Something went wrong!", 500);
  }

  // Return cart data
  return data.data;
});
