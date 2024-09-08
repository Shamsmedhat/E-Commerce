import { products } from "@/_lib/data";
import ProductGallary from "./components/ProductGallary";
import ProductDetails from "./components/ProductDetails";
import ProductTable from "./components/ProductTable";
import RelatedProducts from "@/components/common/RelatedProducts";

type Params = {
  locale: string;
  productId: string[];
};
export default function ProductPage({ params }: { params: Params }) {
  const {
    data: {
      category,
      name,
      overview: overview,
      rating,
      price,
      ratings,
      reviews,
      subCategory,
    },
  } = products.filter((p) => p.id === params.productId[0])[0];
  const relatedProduct = products.filter((r) => r.data.category === category);
  return (
    <>
      <section className="container mx-auto mt-10">
        <div className="flex flex-col rounded-md bg-white px-[2rem] py-10 shadow-sm md:flex-row md:pe-[4rem] lg:h-[60vh]">
          <div className="flex md:w-1/2">
            <ProductGallary />
          </div>
          <div className="ms-8 flex flex-shrink flex-col gap-y-4 md:w-1/2">
            <ProductDetails
              category={category}
              name={name}
              overview={overview}
              rating={rating}
              price={price}
              ratings={ratings}
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
          <ProductTable overview={overview} reviews={reviews} />
        </div>
      </section>
      <section className="w-full pb-20">
        <RelatedProducts relatedProduct={relatedProduct} />
      </section>
    </>
  );
}
