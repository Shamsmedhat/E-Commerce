"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { usePathname, useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import React, { useCallback } from "react";

type SubCategorySortProps = {
  key: string;
  //todo
  product: Product | any;
};

export default function BrandsSort({ key, product }: SubCategorySortProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const createQueryString = useCallback(
    (values: string[]) => {
      const params = new URLSearchParams(searchParams.toString());

      values.forEach((id) => {
        // Check if the ID already exists in the params
        if (params.getAll("brand").includes(id)) {
          // Remove the ID if it exists
          const existingValues = params
            .getAll("brand")
            .filter((value) => value !== id);
          params.delete("brand");
          existingValues.forEach((value) => params.append("brand", value));
        } else {
          // Append the ID if it does not exist
          params.append("brand", id);
        }
      });

      return params.toString();
    },
    [searchParams],
  );

  function handleCheckboxChange(values: string[]) {
    const searchParam = createQueryString(values);
    router.push(`${pathname}?${searchParam}`);
  }

  const isChecked = searchParams
    .getAll("brand")
    .includes(String(product.brand._id));

  return (
    <li
      key={key}
      className="flex flex-row-reverse items-center gap-2 lg:flex-row lg:gap-0"
    >
      <Checkbox
        id={product.brand._id}
        className="me-3 dark:border-white"
        checked={isChecked}
        onCheckedChange={() =>
          handleCheckboxChange([String(product.brand._id)])
        }
      />
      <Label htmlFor={product.brand._id} className="cursor-pointer text-lg">
        {product.brand.translations.data.name || "Unnamed Subcategory"}
      </Label>
    </li>
  );
}
