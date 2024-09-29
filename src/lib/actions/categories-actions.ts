"use server";

import axios from "axios";
import { getLocale } from "next-intl/server";
import catchAsync, { AppError } from "../utils/catchAsync";

// get all catefories
export async function getCategoriesAction(): Promise<CategoriesAPIResponse> {
  const locale = await getLocale();

  try {
    const res = await axios<CategoriesAPIResponse>(
      `${process.env.BASE_URL}/categories`,
      {
        headers: {
          "Accept-Language": locale,
        },
      },
    );

    // return data
    return res.data;
  } catch (error) {
    // Axios error object handling
    if (axios.isAxiosError(error)) {
      // Handle specific Axios error, Server responded with a status code other than 2xx
      if (error.response) {
        console.error(
          `Error: ${error.response.status} - ${error.response.statusText}`,
        );
        throw new Error(`Server error: ${error.response.status}`);
        // No response received after request was sent network issues or the server is down
      } else if (error.request) {
        console.error("No response received:", error.request);
        throw new Error("No response received from server.");
        // Some other error happened configuration issues, incorrect URLs, or errors that occur while setting up the request
      } else {
        console.error("Axios error:", error.message);
        throw new Error(error.message || "An unknown error occurred.");
      }
      // Non-Axios error JavaScript runtime errors, logic errors, or other kinds of exceptions
    } else {
      console.error("Unexpected error:", error);
      throw new Error("An unexpected error occurred.");
    }
  }
}

// get category by id
export const getCategoryAction = catchAsync(async (categoryId: string) => {
  const locale = await getLocale();

  const res = await fetch(`${process.env.BASE_URL}/categories/${categoryId}`, {
    headers: {
      "Accept-Language": locale,
    },
  });
  const data: APIResponse<Category> = await res.json();

  if (data.status !== "success") {
    throw new AppError(data.message, 500);
  } else if (!data.data) {
    throw new AppError("Something went wrong!", 500);
  }

  // return data
  return data.data;
});
