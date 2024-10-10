"use client";
import React, { useState } from "react";
import SubCategorySort from "./sub-category-sort";
import { useSearchParams } from "next/navigation";

export default function SubCategorySection({
  products,
}: {
  products: Product[];
}) {
  const [selectedSubCategory, setSelectedSubCategory] = useState<string[]>([]);
  const uniqueSubCategories = Array.from(
    new Set(products.map((p) => p.subCategory?.translations.data.name)),
  );

  return (
    <ul className="flex flex-col">
      {uniqueSubCategories.map((subCategoryName) => {
        // Find a product with this subcategory to pass to SubCategorySort
        const product = products.find(
          (p) => p.subCategory?.translations.data.name === subCategoryName,
        );
        return (
          <SubCategorySort
            key={product?._id!}
            product={product!}
            selectedSubCategory={selectedSubCategory}
            setSelectedSubCategory={setSelectedSubCategory}
          />
        );
      })}
    </ul>
  );
}
