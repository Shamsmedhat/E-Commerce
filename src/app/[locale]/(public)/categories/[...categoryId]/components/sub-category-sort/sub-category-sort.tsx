"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { usePathname, useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";

type SubCategorySortProps = {
  key: string;
  // product: Product;
  subCategoryId: string;
  subCategoryName: string;
  // selectedSubCategory: string[]; // Passed from parent
  // setSelectedSubCategory: React.Dispatch<React.SetStateAction<string[]>>; // Passed from parent
  subCategoryIds: string[];
  categoryId: string;
};

export default function SubCategorySort({
  key,
  subCategoryId,
  subCategoryName,
  subCategoryIds,
  categoryId,
}: SubCategorySortProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (values: string[]) => {
      const params = new URLSearchParams(searchParams.toString());

      values.forEach((id) => {
        // Check if the ID already exists in the params
        if (params.getAll("subCategory").includes(id)) {
          // Remove the ID if it exists
          const existingValues = params
            .getAll("subCategory")
            .filter((value) => value !== id);
          params.delete("subCategory");
          existingValues.forEach((value) =>
            params.append("subCategory", value),
          );
        } else {
          // Append the ID if it does not exist
          params.append("subCategory", id);
        }
      });

      return params.toString();
    },
    [searchParams],
  );

  function handleSortCheck(values: string[]) {
    const searchParam = createQueryString(values);
    router.push(`${pathname}?${searchParam}`);
  }

  const isChecked = searchParams.getAll("subCategory").includes(subCategoryId);

  return (
    <li
      key={key}
      className="flex flex-row-reverse items-center gap-2 lg:flex-row lg:gap-0"
    >
      <Checkbox
        id={subCategoryId}
        className="me-3 border-white"
        checked={isChecked}
        onCheckedChange={() => handleSortCheck([subCategoryId])}
        // value={}
      />
      <Label htmlFor={subCategoryId} className="cursor-pointer text-lg">
        {subCategoryName || "Unnamed Subcategory"}
      </Label>
    </li>
  );
}
