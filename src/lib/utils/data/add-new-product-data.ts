import { addNewProduct } from "@/lib/actions/products-actions";
import { useMutation } from "@tanstack/react-query";
import { NewProductFields } from "@/lib/types/product";

export function useAddNewProduct() {
  const {
    mutate: addProduct,
    data,
    error,
  } = useMutation({
    mutationFn: async (data: NewProductFields) => addNewProduct(data),
    onSuccess: (data) => {
      console.log(data);
      console.log("Product added successfully");
    },
    onError: () => {
      console.log("Product failed to be added");
    },
  });

  return { addProduct, data, error };
}
