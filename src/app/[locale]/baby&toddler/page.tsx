import CategoriesPage from "@/components/custom/CategoriesPage";
import { products } from "@/_lib/data";

export default function Page() {
  const electronicsProducts = products.filter(
    (product) => product.data.category === "الطفل",
  );
  return (
    <section className="w-full">
      <CategoriesPage category={electronicsProducts} />
    </section>
  );
}
