import { getBrandsAction } from "@/lib/actions/brands-actions";
import { useQuery } from "@tanstack/react-query";

export function useBrands() {
  const {
    data: brands,
    isFetching,
    isError,
    isPending,
  } = useQuery({
    queryKey: ["brands"],
    queryFn: () => getBrandsAction(),
  });

  return { brands, isFetching, isError, isPending };
}
