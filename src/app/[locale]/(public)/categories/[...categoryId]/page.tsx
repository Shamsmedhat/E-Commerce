import React from "react";

import CategoriesPage from "@/app/[locale]/(public)/categories/[...categoryId]/components/category-page";
import { useProductsByCategory } from "@/lib/utils/data/products-data";
import {
  getProductsByCategoryAction,
  getProductsByCategoryIdAction,
} from "@/lib/actions/products-actions";

export default async function Page({
  params,
  searchParams,
}: {
  params: { locale: string; categoryId: string };
  searchParams: { subCategory: string[] };
}) {
  const data: ProductData = await getProductsByCategoryIdAction(
    params.categoryId[0],
  );
  const productsBySelectedCategory = data.products;

  console.log("searchParams", searchParams);
  return (
    <section className="w-full">
      <CategoriesPage
        products={productsBySelectedCategory}
        searchParams={searchParams}
      />
    </section>
  );
}
