import { getProductByIdData } from "@/lib/utils/data/products-data";
import { getLocale } from "next-intl/server";
import React from "react";
import ProductDetails from "./components/ProductDetails";
import ProductGallary from "./components/ProductGallary";
import ProductTable from "./components/ProductTable";

type Params = {
  locale: string;
  productId: string[];
};

export default async function ProductPage({ params }: { params: Params }) {
  const locale = await getLocale();
  const isEn = locale === "en";
  const productId = params.productId[0];
  const product = await getProductByIdData(productId);

  if (!product) {
    //TODO skeleton
    return <h1>Loading........</h1>;
  }
  const {
    brand,
    category,
    cover,
    gallery,
    price,
    ratings,
    stock,
    subCategory,
    translations,
  } = product;

  return (
    <>
      <section className="container mx-auto mt-10">
        <div
          className="flex flex-col rounded-md bg-white px-[2rem] py-6 shadow-sm md:flex-row md:pe-[4rem] lg:min-h-[60vh]"
          dir={isEn ? "ltr" : "rtl"}
        >
          <div className="flex md:w-1/2">
            <ProductGallary gallery={gallery} />
          </div>
          <div className="ms-8 flex flex-shrink flex-col gap-y-4 md:w-1/2">
            <ProductDetails
              category={category.translations.data.name}
              name={translations.data.name}
              overview={translations.data.overview}
              rating={ratings.average}
              price={price}
              ratings={ratings.count}
              stock={stock}
            />
          </div>
        </div>

        <div className="my-10 rounded-md bg-white p-7 shadow-sm">
          {/* //TODO  reviews={reviews}  */}
          <ProductTable
            category={category}
            brand={brand}
            subCategory={subCategory}
            translations={translations}
          />
        </div>
      </section>
      <section className="w-full pb-20">
        {/* <RelatedProducts relatedProduct={relatedProduct} /> */}
      </section>
    </>
  );
}
