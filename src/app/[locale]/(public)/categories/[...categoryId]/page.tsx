import { getProductsByCategoryIdAction } from "@/lib/actions/products-actions";

// ui
import CategoriesPage from "@/app/[locale]/(public)/categories/[...categoryId]/components/category-page";

// Types
type PageProps = {
  params: { locale: string; categoryId: string };
  searchParams: { subCategory: string[]; brand: string[] };
};

export default async function Page({ params, searchParams }: PageProps) {
  // Get data
  const data: ProductData = await getProductsByCategoryIdAction(
    params.categoryId[0],
  );

  // Get products
  const productsBySelectedCategory = data.products;

  return (
    <section className="w-full">
      {/* Categories page with all the category products & search params for sort data */}
      <CategoriesPage
        products={productsBySelectedCategory}
        searchParams={searchParams}
      />
    </section>
  );
}
