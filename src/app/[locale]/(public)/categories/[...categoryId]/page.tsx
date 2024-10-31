import {
  getFilteredProductsAction,
  getProductsByCategoryIdAction,
} from "@/lib/actions/products-actions";

// ui
import CategoryPage from "@/app/[locale]/(public)/categories/[...categoryId]/components/category-page";

// Types
type PageProps = {
  params: { locale: string; categoryId: string };
  searchParams: { subCategory: string[]; brand: string[]; rating: string[] };
};
export default async function Page({ params, searchParams }: PageProps) {
  // Ensure searchParams.subCategory is always an array
  const subCategory = Array.isArray(searchParams.subCategory)
    ? searchParams.subCategory
    : [searchParams.subCategory].filter(Boolean);

  const ratings = Array.isArray(searchParams.rating)
    ? searchParams.rating
    : [searchParams.rating].filter(Boolean);
  const brands = Array.isArray(searchParams.brand)
    ? searchParams.brand
    : [searchParams.brand].filter(Boolean);

  // Fetch data based on subCategory presence
  let data: ProductData;

  data = await getFilteredProductsAction(
    params.categoryId[0],
    subCategory,
    ratings,
    brands,
  );

  // Get products
  const productsBySelectedCategory = data.products;

  return (
    <section className="w-full">
      {/* Categories page with all the category products & search params for sort data */}
      <CategoryPage
        products={productsBySelectedCategory}
        categoryId={params.categoryId[0]}
        searchParams={searchParams}
      />
    </section>
  );
}
