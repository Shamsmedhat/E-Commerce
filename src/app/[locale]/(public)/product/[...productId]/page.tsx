import { products } from "@/lib/utils/data-v1";
import ProductGallary from "./components/ProductGallary";
import ProductDetails from "./components/ProductDetails";
import ProductTable from "./components/ProductTable";
import RelatedProducts from "@/components/common/RelatedProducts";
import { getProductByIdData } from "@/lib/utils/products-data";

type Params = {
  locale: string;
  productId: string[];
};
export default async function ProductPage({ params }: { params: Params }) {
  const productId = params.productId[0];
  const data = await getProductByIdData(productId);

  if (!data.product) {
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
  } = data.product;

  console.log("data", data);
  return (
    <>
      <section className="container mx-auto mt-10">
        <div className="flex flex-col rounded-md bg-white px-[2rem] py-10 shadow-sm md:flex-row md:pe-[4rem] lg:h-[60vh]">
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
        {/* <div className="flex h-[60vh] min-w-[1447px] flex-row rounded-md bg-white py-10 pe-[4rem] shadow-sm">
          <div className="flex w-1/2">
            <ProductGallary />
          </div>
          <div className="ms-8 flex w-1/2 flex-shrink flex-col gap-y-4">
            <ProductDetails
              category={category}
              name={name}
              overview={overview}
              rating={rating}
              price={price}
              ratings={ratings}
            />
          </div>
        </div> */}

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
