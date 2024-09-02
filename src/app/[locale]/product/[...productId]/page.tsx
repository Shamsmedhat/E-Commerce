import { products } from "@/_lib/data";
import ProductGallary from "./components/ProductGallary";

const images = [
  "https://m.media-amazon.com/images/I/71hDhuRKjqL._AC_SL1500_.jpg",
  "https://m.media-amazon.com/images/I/613y-nNxiwL._AC_SL1080_.jpg",
  "https://m.media-amazon.com/images/I/5123opPZhgL._AC_SL1500_.jpg",
  "https://m.media-amazon.com/images/I/81bhWT9lUnL._AC_SL1500_.jpg",
];
export default function ProductPage({ params }) {
  const {
    data: { category, name, overview: overview, rating, price },
  } = products.filter((p) => p.id === params.productId[0])[0];

  return (
    <section className="mt-7">
      <div className="flex bg-white py-8">
        <div className="w-1/2">
          <ProductGallary />
        </div>
        <div className="w-1/2">
          <span>{category}</span>
          <h2>{name}</h2>
          <p>{overview.overview}</p>
          <span>{rating}</span>
          <span>{price}</span>
          <div>
            <button>test</button>
            <button>test</button>
            <button>test</button>
            <button>test</button>
          </div>
        </div>
      </div>
    </section>
  );
}
