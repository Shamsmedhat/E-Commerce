"use server";

import axios from "axios";
import { getLocale } from "next-intl/server";

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
