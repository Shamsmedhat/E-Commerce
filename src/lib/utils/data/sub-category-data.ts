import { getSubCategoryAction } from "../../actions/sub-category-actions";
import { AppError } from "../catchAsync";

export async function getSubCategoriesData(subCategoryId: string) {
  // Call the action function to get the response from the server
  const result: { [key: string]: SubCategory } | AppError =
    await getSubCategoryAction(subCategoryId);

  // Type guard to check if result is an AppError
  if (result instanceof AppError) {
    // Handle the error (e.g., log it or throw it further)
    throw new AppError(result.message, 500);
  }

  // Type guard to check if result contains the subCategory key
  if ("subCategory" in result) {
    const data: { subCategory: SubCategory } = {
      subCategory: result.subCategory,
    };

    return data;
  } else {
    throw new Error("Invalid data structure: 'subCategory' not found");
  }
}
