"use client";
import Image from "next/image";

// ui
import { Tabs, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import TabNavContent from "./tab-nav-content";
import { useEffect, useState } from "react";
import { useProductsByCategory } from "@/lib/utils/products-data";
import { useQuery } from "@tanstack/react-query";
import { useLocale } from "next-intl";

// props type
type CategoriesAndProductsListProp = {
  categories: Category[] | undefined;
  products: Product[];
  isEn: boolean;
};

export default function TabNav({
  categories,
  isEn,
}: CategoriesAndProductsListProp) {
  // data (categories data)
  const categoriesData = categories?.map((category) => category.translations);
  console.log("categories", categories);
  console.log("categoriesData", categoriesData);

  const locale = useLocale();
  const defaultValue = categoriesData?.[0].data.name;
  const [category, setCategory] = useState(defaultValue);

  const { productsByCategory, isFetching, isError, isPending } =
    useProductsByCategory(category || "", locale);

  async function onCategoryClick(categoryName: string) {
    setCategory(categoryName);
  }

  // Handle Empty Categories
  if (!categories?.length) {
    return (
      <div>
        <h1>No categories available</h1>
      </div>
    );
  }

  return (
    <Tabs
      // set the default value tab to the first category
      defaultValue={defaultValue}
      className="my-[2rem] w-full"
      dir={isEn ? "ltr" : "rtl"}
    >
      <TabsList className="flex justify-center gap-5 rounded-md bg-white px-4 pt-2 shadow-sm lg:justify-start">
        {/* Tabnav categories list */}
        {categories?.map((category, i) => (
          <TabsTrigger
            key={category._id}
            value={category.translations.data.name}
            onClick={() => onCategoryClick(category.translations.data.name)}
            className="cursor-pointer border-transparent px-4 py-2 text-base font-medium text-primary-foreground/70 data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary"
          >
            {/* render category image with name based on locale*/}
            <span className="flex gap-2">
              <Image src={category.image} height={25} width={25} alt="" />
              <span className="hidden xl:block">
                {category.translations.data.name}
              </span>
            </span>
          </TabsTrigger>
        ))}
      </TabsList>

      {/* // Render the content of each Tab*/}
      <TabNavContent
        categories={categories}
        isEn={isEn}
        products={productsByCategory?.data.products}
      />
    </Tabs>
  );
}
