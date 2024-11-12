import { getProductByIdData } from "@/lib/utils/data/products-data";
import { getLocale, getTranslations } from "next-intl/server";
import React from "react";
import ProductDetails from "./components/product-details";
import ProductGallary from "./components/product-gallary";
import ProductTable from "./components/product-table";
import { getReviewByProductIdAction } from "@/lib/actions/reviews-actions";
import RelatedProducts from "@/components/common/RelatedProducts";
import ProductsSlider from "@/components/common/products-slider";
import { getProductsByCategoryIdAction } from "@/lib/actions/products-actions";

type Params = {
  locale: string;
  productId: string[];
};

export default async function ProductPage({ params }: { params: Params }) {
  const t = await getTranslations();
  const locale = await getLocale();
  const isEn = locale === "en";
  const productId = params.productId[0];
  const product = await getProductByIdData(productId);
  const productReviews = await getReviewByProductIdAction(productId);
  const productsWithSameCategory = await getProductsByCategoryIdAction(
    product.category._id,
  );

  if (!product) {
    //TODO skeleton
    return <h1>Loading...</h1>;
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
    _id,
  } = product;

  return (
    <>
      <section className="container mx-auto mt-10 px-4">
        <div
          className="flex flex-col rounded-md bg-white px-[0.5rem] py-6 shadow-sm dark:bg-background md:px-[2rem] md:pe-[4rem] lg:h-auto lg:flex-row"
          dir={isEn ? "ltr" : "rtl"}
        >
          <div className="flex lg:w-1/2">
            <ProductGallary gallery={gallery!} />
          </div>
          <div className="ms-2 flex flex-shrink flex-col gap-y-4 md:ms-8 lg:w-1/2">
            <ProductDetails
              productId={_id}
              category={category.translations.data.name}
              name={translations.data.name}
              overview={translations.data.overview}
              rating={ratings!.average}
              price={price}
              ratings={ratings!.count}
              stock={stock}
            />
          </div>
        </div>

        <div className="my-10 overflow-hidden rounded-md bg-white p-2 shadow-sm dark:bg-background md:p-7">
          <ProductTable
            productId={productId}
            category={category}
            brand={brand}
            subCategory={subCategory}
            reviews={productReviews}
            translations={translations}
          />
        </div>
      </section>
      <section className="w-full pb-20">
        <ProductsSlider
          products={productsWithSameCategory.products}
          title={t("JPKX_XZ_nNCNyORC3Z58V")}
        />
      </section>
    </>
  );
}
