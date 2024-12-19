import {
  useMutation,
  useQueries,
  useQuery,
  useQueryClient,
  UseQueryResult,
} from "@tanstack/react-query";
import {
  getProductByIdAction,
  getProductByQueryAction,
  getProductsByCategoryAction,
  getProductsByCategoryIdAction,
  getTopRatingProductsAction,
  getTopSellingProductsAction,
} from "../../actions/products-actions";

export async function getProductByIdData(productId: string) {
  try {
    // Call the action function to get the response from the server
    const { product: data } = await getProductByIdAction(productId);

    // validation of the data
    if (!data || typeof data !== "object") {
      throw new Error("Invalid data received");
    }
    // Return the validated data
    return data;

    // handle error
  } catch (error) {
    console.error("Error in getProductByIdData:", error);
    throw new Error(`Data retrieval error: ${error}`);
  }
}
export function useProductByQueryData(query: string) {
  const {
    data: productByQuery,
    isFetching,
    isError,
  } = useQuery({
    queryKey: ["product-by-category", query], // identify the data based on the query
    queryFn: () => getProductByQueryAction(query),
    enabled: !!query, // only run the query if query is truthy
  });
  return { productByQuery, isFetching, isError };
}

export function useProductsByIds(productIds: string[]) {
  const queryConfigs = productIds.map((id) => ({
    queryKey: ["product-by-id", id],
    queryFn: () => getProductByIdAction(id),
    enabled: !!id, // Only fetch if ID exists
  }));

  const results = useQueries({ queries: queryConfigs }); // Wrap the array in an object

  const data = results.map((query) => query.data); // Extract data
  const isLoading = results.some((query) => query.isLoading); // Check if any are loading
  const isError = results.some((query) => query.isError); // Check for errors

  return { data, isLoading, isError };
}

// using useQuery get the products based on the category selected function recive category name
export function useProductsByCategory(categoryName: string) {
  const {
    data: productsByCategory,
    isFetching,
    isError,
    isPending,
  } = useQuery({
    queryKey: ["product-by-category", categoryName], // identify the data based on the categoryName
    queryFn: () => getProductsByCategoryAction(categoryName),
    enabled: !!categoryName, // only run the query if categoryName is truthy
  });
  return { productsByCategory, isFetching, isError, isPending };
}

// using useQuery get top selling products based on the most sales
export function useTopSellingProducts() {
  const {
    data: topSellingProducts,
    isFetching,
    isError,
    isPending,
  }: UseQueryResult<ProductData> = useQuery({
    queryKey: ["top-selling-products"],
    queryFn: () => getTopSellingProductsAction(),
  });
  return { topSellingProducts, isFetching, isError, isPending };
}

// using useQuery get top rating products based on the most average number in ratings
export function useTopRatingProducts() {
  const {
    data: topRatingProducts,
    isFetching,
    isError,
    isPending,
  }: UseQueryResult<ProductData> = useQuery({
    queryKey: ["top-rating-products"],
    queryFn: () => getTopRatingProductsAction(),
  });
  return { topRatingProducts, isFetching, isError, isPending };
}

// using useQuery get the products based on the category selected function recive category name
export function useProductsByCategoryId(categoryId: string) {
  const {
    data: productsByCategoryId,
    isFetching,
    isError,
    isPending,
  } = useQuery({
    queryKey: ["product-by-category1", categoryId], // identify the data based on the categoryName
    queryFn: () => getProductsByCategoryIdAction(categoryId),
    enabled: !!categoryId, // only run the query if categoryName is truthy
  });
  return { productsByCategoryId, isFetching, isError, isPending };
}

// using useQuery get the products based on the subCategoryId selected function recive subCategoryId & categoryId
// export function useProductsBySubCategory(
//   subCategoryIds: string[],
//   categoryId: string,
// ) {
//   const {
//     data: productsBySubCategory,
//     isFetching,
//     isError,
//     isPending,
//   } = useQuery({
//     queryKey: ["products-by-subCategory", subCategoryIds], // identify the data based on the subCategoryIds
//     queryFn: () => getProductsBySubCategoryAction(subCategoryIds, categoryId),
//     enabled: !!subCategoryIds, // only run the query if subCategoryId is truthy
//   });
//   return { productsBySubCategory, isFetching, isError, isPending };
// }
