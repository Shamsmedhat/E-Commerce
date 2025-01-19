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
import { useBrands } from "@/lib/utils/data/brands-data";
import React from "react";

type PropsType = {
  field: {
    onChange: (value: string) => void;
    value: string;
  };
};
export default function AddProductSelectBrand({ field }: PropsType) {
  const { brands } = useBrands();
  return (
    <FormItem>
      <FormLabel>brand</FormLabel>
      <Select onValueChange={field.onChange} defaultValue={field.value}>
        <FormControl>
          <SelectTrigger>
            <SelectValue placeholder="Select a verified email to display" />
          </SelectTrigger>
        </FormControl>
        <SelectContent>
          {brands?.brands.map((c) => (
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
