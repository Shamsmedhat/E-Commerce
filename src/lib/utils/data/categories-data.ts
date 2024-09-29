import {
  getCategoriesAction,
  getCategoryAction,
} from "../../actions/categories-actions";
import { AppError } from "../catchAsync";

export async function getCategoriesData() {
  try {
    // Call the action function to get the response from the server
    const { data, status } = await getCategoriesAction();

    // validation of the data
    if (!data || typeof data !== "object") {
      throw new Error("Invalid data received");
    }
    // Return the validated data
    return data;

    // handle error
  } catch (error) {
    console.error("Error in getCategoriesData:", error);
    throw new Error(`Data retrieval error: ${error}`);
  }
}

export async function getCategoryData(categoryId: string) {
  // Call the action function to get the response from the server
  const result: { [key: string]: Category } | AppError =
    await getCategoryAction(categoryId);

  // Type guard to check if result is an AppError
  if (result instanceof AppError) {
    // Handle the error (e.g., log it or throw it further)
    throw new AppError(result.message, 500);
  }

  // Type guard to check if result contains the subCategory key
  if ("category" in result) {
    const data: { category: Category } = {
      category: result.category,
    };

    return data;
  } else {
    throw new Error("Invalid data structure: 'category' not found");
  }
}
