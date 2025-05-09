import React, { Suspense } from "react";
import MainSlider from "./_components/main-slider";
import DealsOfTheDay from "./_components/deals-of-the-day";
import TopSellingItems from "./_components/top-selling-items";
import TopRatedItems from "./_components/top-rated-items";
import DiscountSection from "./_components/discount-section";
import TopCategories from "./_components/top-categories";
// import { getCategoriesData } from "@/lib/utils/data/categories-data";
import { getCategoriesAction } from "@/lib/actions/categories-actions";

export default async function Page() {
  const categoriesData = await getCategoriesAction();
  // const res = await fetch("http://localhost:3000/api/products");

  // const data = await res.json();
  // console.log("data", data.data.data.products);

  // const data = await res.json();
  // console.log("data", data);
  return (
    <>
      <MainSlider categoriesData={categoriesData} />
      <DealsOfTheDay />
      <DiscountSection />
      <TopSellingItems />
      <TopRatedItems />
      <TopCategories categoriesData={categoriesData} />
    </>
  );
}
