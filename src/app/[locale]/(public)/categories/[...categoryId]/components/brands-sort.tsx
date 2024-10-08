"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { usePathname, useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import React, { useCallback } from "react";

type SubCategorySortProps = {
  key: string;
  product: Product;
  selectedBrands: string[]; // Passed from parent
  setSelectedBrands: React.Dispatch<React.SetStateAction<string[]>>; // Passed from parent
};

export default function BrandsSort({
  key,
  product,
  selectedBrands,
  setSelectedBrands,
}: SubCategorySortProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Create query string by merging current search params with key-value pairs
  const createQueryString = useCallback(
    (brands: string[]) => {
      const params = new URLSearchParams(searchParams.toString());

      // Clear previous subCategory params
      params.delete("brand");

      // Add selected subcategories one by one
      brands.forEach((subcategory) => {
        params.append("brand", subcategory); // Use 'append' for multiple same keys
      });

      return params.toString();
    },
    [searchParams],
  );

  const brandName = product.brand?.translations.data.name;

  const isChecked = brandName ? selectedBrands.includes(brandName) : false;

  const handleCheckboxChange = () => {
    if (brandName) {
      const updatedSubCategories = !isChecked
        ? [...selectedBrands, brandName] // Add subcategory
        : selectedBrands.filter((item) => item !== brandName); // Remove subcategory

      setSelectedBrands(updatedSubCategories);

      // Update URL with the current state of selectedSubCategories
      const updatedQueryString = createQueryString(updatedSubCategories);
      router.push(`${pathname}?${updatedQueryString}`);
    }
  };

  return (
    <li key={key}>
      <Checkbox
        id={brandName}
        className="me-3"
        checked={isChecked}
        onCheckedChange={handleCheckboxChange}
        value={selectedBrands}
      />
      <Label htmlFor={brandName} className="text-lg">
        {brandName || "Unnamed Subcategory"}
      </Label>
    </li>
  );
}
