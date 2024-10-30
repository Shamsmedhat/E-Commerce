"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { usePathname, useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import React, { useCallback } from "react";

type SubCategorySortProps = {
  key: string;
  product: Product;
};

export default function BrandsSort({ key, product }: SubCategorySortProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  console.log("product", product);
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
    <li key={key}>
      <Checkbox
        id={product.brand._id}
        className="me-3"
        checked={isChecked}
        onCheckedChange={() =>
          handleCheckboxChange([String(product.brand._id)])
        }
      />
      <Label htmlFor={product.brand._id} className="text-lg">
        {product.brand.translations.data.name || "Unnamed Subcategory"}
      </Label>
    </li>
  );
}
