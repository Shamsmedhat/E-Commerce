import React from "react";

// export default function page({
//   params,
// }: {
//   params: { locale: string; categoryId: string[] };
// }) {
//   // console.log(params);
//   return <div>category {params.categoryId[0]}</div>;
// }

import CategoriesPage from "@/components/custom/CategoryPage";
import { useProductsByCategory } from "@/lib/utils/data/products-data";
import {
  getProductsByCategoryAction,
  getProductsByCategoryIdAction,
} from "@/lib/actions/products-actions";

export default async function Page({
  params,
}: {
  params: { locale: string; categoryName: string };
}) {
  const data = await getProductsByCategoryIdAction(params.categoryName[0]);
  const productsBySelectedCategory = data.products;

  return (
    <section className="w-full">
      <CategoriesPage
        products={productsBySelectedCategory}
        // categoryName={params.categoryName[0]}
      />
    </section>
  );
}
