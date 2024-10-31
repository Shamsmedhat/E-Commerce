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
  //todo
  const { subCategories, isFetching, isError, isPending } =
    useSubCategories(categoryId);

  if (isFetching || isPending) {
    return <p>loading...</p>;
  }

  if (!subCategories) {
    return <p>no subcategories</p>;
  }

  const subCategoryIds = subCategories?.subCategories.map((s) => s._id);
  return (
    <ul className="flex flex-col gap-2">
      {subCategories?.subCategories.map((subCategory) => {
        return (
          <SubCategorySort
            key={subCategory._id}
            subCategoryId={subCategory._id}
            subCategoryName={subCategory.translations.data.name}
            subCategoryIds={subCategoryIds}
            categoryId={categoryId}
          />
        );
      })}
    </ul>
  );
}
