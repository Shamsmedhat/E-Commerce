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
import React from "react";

type PropsType = {
  field: {
    onChange: (value: string) => void;
    value: string;
  };
  allCategories: CategoriesData;
};
export default function AddProductSelectCategory({
  field,
  allCategories,
}: PropsType) {
  return (
    <FormItem>
      <FormLabel>category</FormLabel>
      <Select onValueChange={field.onChange} defaultValue={field.value}>
        <FormControl>
          <SelectTrigger>
            <SelectValue placeholder="Select a verified email to display" />
          </SelectTrigger>
        </FormControl>
        <SelectContent>
          {allCategories.categories.map((c) => (
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
