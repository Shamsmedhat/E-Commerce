"use server";

import axios from "axios";
import { getLocale } from "next-intl/server";
import { AppError } from "../utils/catchAsync";
import getAuthorizationHeader from "./get-authorization-header";

//todo convert all actions to fetch

// Get product  //* by query
export async function getProductByQueryAction(
  query: string,
): Promise<ProductData> {
  // get web locae
  const locale = await getLocale();
  const res = await fetch(
    `https://e-commerce.thelanerealestate.com/v1/products?search=${query}`,
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
// Get product  //* by id
export async function getProductByIdAction(
  productId: string,
): Promise<SingleProduct> {
  // get web locae
  const locale = await getLocale();
  const res = await fetch(
    `https://e-commerce.thelanerealestate.com/v1/products/${productId}`,
    {
      headers: {
        "Accept-Language": locale,
      },
    },
  );
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
      `https://e-commerce.thelanerealestate.com/v1/products?category>translations>data>name=${categoryName}`,
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
    `https://e-commerce.thelanerealestate.com/v1/products?category>_id=${categoryId}`,
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
      `https://e-commerce.thelanerealestate.com/v1/products?category>translations>data>name=${categoryName}`,
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
  const res = await fetch(
    `https://e-commerce.thelanerealestate.com/v1/products?sort=-sales`,
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
// Get products //* by top rating
export async function getTopRatingProductsAction() {
  const locale = await getLocale();
  const res = await fetch(
    `https://e-commerce.thelanerealestate.com/v1/products?sort=-ratings>average`,
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
    `https://e-commerce.thelanerealestate.com/v1/products?brand>_id=${brandId}&category>_id=${categoryId}`,
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
    `https://e-commerce.thelanerealestate.com/v1/products?ratings>average=${ratingNum}&category>_id=${categoryId}`,
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

// Get products with optional filters for subCategory, rating, and brand
export async function getFilteredProductsAction(
  categoryId: string,
  subCategoryIds?: string[],
  ratings?: string[],
  brandIds?: string[],
): Promise<ProductData> {
  // Get locale
  const locale = await getLocale();

  // Initialize query with category filter
  let query = `category>_id=${categoryId}`;

  // Add subcategory filter using "|" if subCategoryIds are provided
  if (subCategoryIds && subCategoryIds.length > 0) {
    const subCategoryQuery = `subCategory>_id=${subCategoryIds.join("|")}`;
    query += `&${subCategoryQuery}`;
  }

  // Add rating filter using "|" if ratings are provided
  if (ratings && ratings.length > 0) {
    const ratingQuery = `ratings>average=${ratings.join("|")}`;
    query += `&${ratingQuery}`;
  }

  // Add brand filter using "|" if brandIds are provided
  if (brandIds && brandIds.length > 0) {
    const brandQuery = `brand>_id=${brandIds.join("|")}`;
    query += `&${brandQuery}`;
  }

  // Fetch products with constructed query
  const res = await fetch(
    `https://e-commerce.thelanerealestate.com/v1/products?${query}`,
    {
      headers: {
        "Accept-Language": locale,
      },
    },
  );

  // Parse response data
  const data: APIResponse<ProductData> = await res.json();

  // Handle errors
  if (data.status !== "success") {
    throw new AppError(data.message, 500);
  } else if (!data.data) {
    throw new AppError("Something went wrong!", 500);
  }

  // Return product data
  return data.data;
}

export async function addNewProduct(productData: NewProductFields) {
  const res = await fetch(
    "https://e-commerce.thelanerealestate.com/v1/products",
    {
      method: "POST",
      body: JSON.stringify(productData),
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        // Function to return the token
        ...(await getAuthorizationHeader()),
      },
    },
  );
  console.log(res);

  if (!res.ok) {
    console.log(`error from fetch ${res}`);
  }
  const data = await res.json();
  console.log(data);

  return data;
}
