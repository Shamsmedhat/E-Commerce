import { useQuery, UseQueryResult } from "@tanstack/react-query";
import {
  getSubCategoriesByCategoryIdAction,
  getSubCategoryAction,
} from "../../actions/sub-category-actions";

// Get //* SubCategory by id
export function useSubCategory(subCategoryId: string) {
  const {
    data: subCategory,
    isFetching,
    isError,
    isPending,
  }: UseQueryResult<SubCategory> = useQuery({
    queryKey: ["subCategory", subCategoryId],
    queryFn: ({ queryKey }) => {
      return getSubCategoryAction(queryKey[1] as string); // Get the the subCategoryId
    },
    enabled: !!subCategoryId, // Only run the query if subCategoryId is defined
  });

  return { subCategory, isFetching, isError, isPending };
}

export function useSubCategories(categoryId: string) {
  const {
    data: subCategories,
    isFetching,
    isError,
    isPending,
  }: UseQueryResult<SubCategories> = useQuery({
    queryKey: ["subCategories", categoryId],
    queryFn: ({ queryKey }) => {
      return getSubCategoriesByCategoryIdAction(queryKey[1] as string); // Get the the categoryId
    },
    enabled: !!categoryId, // Only run the query if categoryId is defined
  });

  return { subCategories, isFetching, isError, isPending };
}
