import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { NewProductFields } from "@/lib/types/product";
import { useSubCategories } from "@/lib/utils/data/sub-category-data";
import React from "react";

interface FieldProps {
  onChange: (value: string) => void;
  value: string;
}

type PropsType = {
  field: {
    onChange: (value: string) => void;
    value: string;
  };
  allCategories: CategoriesData;
  form: {
    watch: (field: string) => string;
  };
};
interface CategoriesData {
  // Define the structure of CategoriesData here
}

export default function AddProductSelectSubCategory({
  field,
  allCategories,
  form,
}: PropsType) {
  const categoryID = form.watch("category");
  const { subCategories } = useSubCategories(categoryID);
  return (
    <FormItem>
      <FormLabel>subCategory</FormLabel>
      <Select onValueChange={field.onChange} defaultValue={field.value}>
        <FormControl>
          <SelectTrigger>
            <SelectValue placeholder="Select a verified email to display" />
          </SelectTrigger>
        </FormControl>
        <SelectContent>
          {subCategories?.subCategories.map((c) => (
            <SelectItem key={c._id} value={c._id}>
              {c.translations.data.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <FormMessage />
    </FormItem>
  );
}
