"use client";
import React from "react";
import RatingSection from "./Rating-sort/rating-section";
import BrandsSection from "./brands-sort/brands-section";
import { getTranslations } from "next-intl/server";
import SortSection from "./sub-category-sort/sub-category-section";
import { categoryColor } from "@/lib/utils/helpers";
import SubCategorySection from "./sub-category-sort/sub-category-section";
import { useTranslations } from "next-intl";

type AsideSortSectionTypes = {
  products: Product[];
  categoryName: string;
  categoryId: string;
};

export default function AsideSortSection({
  products,
  categoryName,
  categoryId,
}: AsideSortSectionTypes) {
  const t = useTranslations();

  return (
    <aside className="hidden w-[15%] lg:block">
      {/* Sub category Section */}
      <div
        className={`bg-${categoryColor(categoryName!)} mb-[2rem] min-w-[200px] rounded-md p-5 text-white`}
      >
        {/* Title */}
        <h3 className="mb-3 text-xl font-bold">{t("dKK2yEL4B-GcSul9ZivDx")}</h3>

        {/* Sort component [Subcategories]*/}
        <div className="flex flex-col items-start space-x-2 text-lg font-bold">
          <SubCategorySection categoryId={categoryId} />
        </div>
      </div>

      {/* Brand Section */}
      <div className="mb-[2rem] min-w-[200px] rounded-md bg-white p-5 text-primary-foreground">
        {/* Title */}
        <h3 className="mb-3 text-xl font-bold">{t("0Yio04Ct9UZq80n-Mnrjp")}</h3>

        {/* Sort component [Brands]*/}
        <div className="flex flex-col items-start space-x-2 text-lg font-bold">
          <BrandsSection products={products} />
        </div>
      </div>

      {/*Rating section */}
      <div className="mb-[2rem] min-w-[200px] rounded-md bg-white p-5 text-primary-foreground">
        <h3 className="mb-3 text-xl font-bold">{t("mADNIsXxfc4IBjTJ7ANrC")}</h3>

        {/* Sort component [Rating]*/}
        <div className="flex flex-col items-start space-x-2 text-lg font-bold">
          <RatingSection products={products} />
        </div>
      </div>
    </aside>
  );
}
