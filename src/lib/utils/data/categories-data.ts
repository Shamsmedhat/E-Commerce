import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { getCategoryAction } from "../../actions/categories-actions";

export function useCategory(categoryId: string) {
  const {
    data: category,
    isFetching,
    isError,
    isPending,
  }: UseQueryResult<Category> = useQuery({
    queryKey: ["category", categoryId],
    queryFn: ({ queryKey }) => {
      return getCategoryAction(queryKey[1] as string); // Get the the categoryId
    },
    enabled: !!categoryId, // Only run the query if categoryId is defined
  });

  return { category, isFetching, isError, isPending };
}
