import { addImage } from "@/lib/actions/add-image";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useAddSingleImage() {
  const {
    mutate: addImageHook,
    data,
    error,
  } = useMutation({
    mutationFn: async (data: FormData | undefined) => addImage(data),
    onSuccess: (data) => {
      console.log("onSuccess", data);
      console.log("image succesfully uploaded");
    },
    onError: (err) => {
      console.log("onError", err);
      console.log("image failed to be uploaded");
    },
  });
  return { addImageHook, data, error };
}
