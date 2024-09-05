import { products } from "@/_lib/data";
import ProductGallary from "./components/ProductGallary";
import ProductDetails from "./components/ProductDetails";
import ProductTable from "./components/ProductTable";

const images = [
  "https://m.media-amazon.com/images/I/71hDhuRKjqL._AC_SL1500_.jpg",
  "https://m.media-amazon.com/images/I/613y-nNxiwL._AC_SL1080_.jpg",
  "https://m.media-amazon.com/images/I/5123opPZhgL._AC_SL1500_.jpg",
  "https://m.media-amazon.com/images/I/81bhWT9lUnL._AC_SL1500_.jpg",
];

type Params = {
  locale: string;
  productId: string[];
};
export default function ProductPage({ params }: { params: Params }) {
  const {
    data: { category, name, overview: overview, rating, price, ratings },
  } = products.filter((p) => p.id === params.productId[0])[0];
  console.log(ratings);
  return (
    <section className="mx-auto px-[8rem]">
      <div className="flex h-[60vh] rounded-md bg-white py-10 pe-[4rem] shadow-sm">
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
      </div>
      <div className="my-10 rounded-md bg-white p-7 shadow-sm">
        <ProductTable overview={overview} />
      </div>
    </section>
  );
}
