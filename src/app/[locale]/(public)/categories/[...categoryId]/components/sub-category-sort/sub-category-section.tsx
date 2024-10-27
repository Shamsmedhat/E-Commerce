"use client";
import React, { useState } from "react";
import SubCategorySort from "./sub-category-sort";
import {
  useSubCategories,
  useSubCategory,
} from "@/lib/utils/data/sub-category-data";

export default function SubCategorySection({
  categoryId,
}: {
  categoryId: string;
}) {
  const [selectedSubCategory, setSelectedSubCategory] = useState<string[]>([]);

  //todo
  const { subCategories, isFetching, isError, isPending } =
    useSubCategories(categoryId);
  return (
    <ul className="flex flex-col">
      {subCategories?.subCategories.map((subCategory) => {
        return (
          <SubCategorySort
            key={subCategory._id}
            subCategoryName={subCategory.translations.data.name}
            selectedSubCategory={selectedSubCategory}
            setSelectedSubCategory={setSelectedSubCategory}
          />
        );
        ` `;
      })}
    </ul>
  );
}
