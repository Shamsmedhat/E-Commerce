"use server";

import { getLocale } from "next-intl/server";
import catchAsync, { AppError } from "../utils/catchAsync";
import { BASE_URL } from "../constants/urls";

// Get subCategory //* by id
export const getSubCategoryAction = catchAsync(
  async (subCategoryId: string) => {
    const locale = await getLocale();

    const res = await fetch(`${BASE_URL}/sub-categories/${subCategoryId}`, {
      headers: {
        "Accept-Language": locale,
      },
    });

    const data: APIResponse<SubCategory> = await res.json();

    if (data.status !== "success") {
      throw new AppError(data.message, 500);
    } else if (!data.data) {
      throw new AppError("Something went wrong!", 500);
    }
    return data.data;
  },
);

// Get subCategory //* by category id
export const getSubCategoriesByCategoryIdAction = catchAsync(
  async (categoryId: string) => {
    // Get web locale
    const locale = await getLocale();

    const res = await fetch(
      `${BASE_URL}/sub-categories?category=${categoryId}`,
      {
        headers: {
          "Accept-Language": locale,
        },
      },
    );

    const data: APIResponse<SubCategory> = await res.json();

    if (data.status !== "success") {
      throw new AppError(data.message, 500);
    } else if (!data.data) {
      throw new AppError("Something went wrong!", 500);
    }

    return data.data;
  },
);
