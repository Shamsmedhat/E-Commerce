"use server";

import { getLocale } from "next-intl/server";
import catchAsync, { AppError } from "../utils/catchAsync";

// Get categories
export const getCategoriesAction = catchAsync<[], CategoriesData>(async () => {
  const locale = await getLocale();

  const res = await fetch(
    `https://e-commerce.thelanerealestate.com/v1/categories`,
    {
      headers: {
        "Accept-Language": locale,
      },
    },
  );

  if (!res.ok) {
    throw new AppError(
      `Failed to fetch categories: ${res.statusText}`,
      res.status,
    );
  }

  const data: APIResponse<CategoriesData> = await res.json();

  if (data.status !== "success") {
    throw new AppError(data.message, 500);
  } else if (!data.data) {
    throw new AppError("Something went wrong!", 500);
  }

  // Return the validated data
  return data.data;
});

// get category by id
export const getCategoryAction = catchAsync(async (categoryId: string) => {
  const locale = await getLocale();

  const res = await fetch(
    `https://e-commerce.thelanerealestate.com/v1/categories/${categoryId}`,
    {
      headers: {
        "Accept-Language": locale,
      },
    },
  );
  const data: APIResponse<Category> = await res.json();

  if (data.status !== "success") {
    throw new AppError(data.message, 500);
  } else if (!data.data) {
    throw new AppError("Something went wrong!", 500);
  }

  // return data
  return data.data;
});
