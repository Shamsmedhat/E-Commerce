"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { usePathname, useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import React, { useCallback } from "react";

type SubCategorySortProps = {
  key: string;
  product: Product;
  selectedSubCategory: string[]; // Passed from parent
  setSelectedSubCategory: React.Dispatch<React.SetStateAction<string[]>>; // Passed from parent
};

export default function SubCategorySort({
  key,
  product,
  selectedSubCategory,
  setSelectedSubCategory,
}: SubCategorySortProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Create query string by merging current search params with key-value pairs
  const createQueryString = useCallback(
    (subCategories: string[]) => {
      const params = new URLSearchParams(searchParams.toString());

      // Clear previous subCategory params
      params.delete("subCategory");

      // Add selected subcategories one by one
      subCategories.forEach((subcategory) => {
        params.append("subCategory", subcategory); // Use 'append' for multiple same keys
      });

      return params.toString();
    },
    [searchParams],
  );

  const subCategoryName = product.subCategory?.translations.data.name;

  const isChecked = subCategoryName
    ? selectedSubCategory.includes(subCategoryName)
    : false;

  const handleCheckboxChange = () => {
    if (subCategoryName) {
      const updatedSubCategories = !isChecked
        ? [...selectedSubCategory, subCategoryName] // Add subcategory
        : selectedSubCategory.filter((item) => item !== subCategoryName); // Remove subcategory

      setSelectedSubCategory(updatedSubCategories);

      // Update URL with the current state of selectedSubCategories
      const updatedQueryString = createQueryString(updatedSubCategories);
      router.push(`${pathname}?${updatedQueryString}`);
    }
  };

  return (
    <li key={key}>
      <Checkbox
        id={subCategoryName}
        className="me-3"
        checked={isChecked}
        onCheckedChange={handleCheckboxChange}
        value={selectedSubCategory}
      />
      <Label htmlFor={subCategoryName} className="text-lg">
        {subCategoryName || "Unnamed Subcategory"}
      </Label>
    </li>
  );
}
