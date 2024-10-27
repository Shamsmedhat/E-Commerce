"use server";

import axios from "axios";
import { getLocale } from "next-intl/server";
import { AppError } from "../utils/catchAsync";

//todo convert all actions to fetch

// Get product  //* by id
export async function getProductByIdAction(
  productId: string,
): Promise<SingleProduct> {
  // get web locae
  const locale = await getLocale();
  const res = await fetch(`${process.env.BASE_URL}/products/${productId}`, {
    headers: {
      "Accept-Language": locale,
    },
  });
  const data: APIResponse<SingleProduct> = await res.json();

  if (data.status !== "success") {
    throw new AppError(data.message, 500);
  } else if (!data.data) {
    throw new AppError("Something went wrong!", 500);
  }
  // return data
  return data.data;
}

// Get products //* by category
export async function getProductsByCategoryAction(
  categoryName: string,
): Promise<ProductsAPIResponse> {
  // get web locae
  const locale = await getLocale();

  try {
    const res = await axios<ProductsAPIResponse>(
      `${process.env.BASE_URL}/products?category>translations>data>name=${categoryName}`,
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

// Get products //* by the category id
export async function getProductsByCategoryIdAction(
  categoryId: string,
): Promise<ProductData> {
  // get web locae
  const locale = await getLocale();
  const res = await fetch(
    `${process.env.BASE_URL}/products?category>_id=${categoryId}`,
    {
      headers: {
        "Accept-Language": locale,
      },
    },
  );
  const data: APIResponse<ProductData> = await res.json();

  if (data.status !== "success") {
    throw new AppError(data.message, 500);
  } else if (!data.data) {
    throw new AppError("Something went wrong!", 500);
  }
  // return data
  return data.data;
}

// Get products //* by selling rate
export async function getBestSellingProductsAction(
  categoryName: string,
): Promise<ProductsAPIResponse> {
  // get web locae
  const locale = await getLocale();

  try {
    const res = await axios<ProductsAPIResponse>(
      `${process.env.BASE_URL}/products?category>translations>data>name=${categoryName}`,
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

// Get products //* by most selling
export async function getTopSellingProductsAction() {
  const locale = await getLocale();
  const res = await fetch(`${process.env.BASE_URL}/products?sort=-sales`, {
    headers: {
      "Accept-Language": locale,
    },
  });
  const data: APIResponse<ProductData> = await res.json();

  if (data.status !== "success") {
    throw new AppError(data.message, 500);
  } else if (!data.data) {
    throw new AppError("Something went wrong!", 500);
  }

  // return data
  return data.data;
}
// Get products //* by top rating
export async function getTopRatingProductsAction() {
  const locale = await getLocale();
  const res = await fetch(
    `${process.env.BASE_URL}/products?sort=-ratings>average`,
    {
      headers: {
        "Accept-Language": locale,
      },
    },
  );
  const data: APIResponse<ProductData> = await res.json();

  if (data.status !== "success") {
    throw new AppError(data.message, 500);
  } else if (!data.data) {
    throw new AppError("Something went wrong!", 500);
  }

  // return data
  return data.data;
}

// Get products //* by subCategory
export async function getProductsBySubCategoryAction(
  subCategoryIds: string[],
  categoryId: string,
): Promise<ProductData> {
  // get web locae
  const locale = await getLocale();
  const subCategoryQuery = subCategoryIds
    .map((id) => `subCategory>_id=${id}`)
    .join("&");
  const res = await fetch(
    `${process.env.BASE_URL}/products?category>_id=${categoryId}&${subCategoryQuery}`,
    {
      headers: {
        "Accept-Language": locale,
      },
    },
  );
  const data: APIResponse<ProductData> = await res.json();

  if (data.status !== "success") {
    throw new AppError(data.message, 500);
  } else if (!data.data) {
    throw new AppError("Something went wrong!", 500);
  }
  // return data
  return data.data;
}

// Get products //* by brand
export async function getProductsByBrandAction(
  categoryId: string,
  brandId: string,
): Promise<ProductData> {
  // get web locae
  const locale = await getLocale();
  const res = await fetch(
    `${process.env.BASE_URL}/products?brand>_id=${brandId}&category>_id=${categoryId}`,
    {
      headers: {
        "Accept-Language": locale,
      },
    },
  );
  const data: APIResponse<ProductData> = await res.json();

  if (data.status !== "success") {
    throw new AppError(data.message, 500);
  } else if (!data.data) {
    throw new AppError("Something went wrong!", 500);
  }
  // return data
  return data.data;
}

// Get products //* by rating
export async function getProductsByRatingAction(
  categoryId: string,
  ratingNum: number,
): Promise<ProductData> {
  // get web locae
  const locale = await getLocale();
  const res = await fetch(
    `${process.env.BASE_URL}/products?ratings>average=${ratingNum}&category>_id=${categoryId}`,
    {
      headers: {
        "Accept-Language": locale,
      },
    },
  );
  const data: APIResponse<ProductData> = await res.json();

  if (data.status !== "success") {
    throw new AppError(data.message, 500);
  } else if (!data.data) {
    throw new AppError("Something went wrong!", 500);
  }
  // return data
  return data.data;
}
