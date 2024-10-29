import {
  getProductsByCategoryIdAction,
  getProductsBySubCategoryAction,
} from "@/lib/actions/products-actions";

// ui
import CategoryPage from "@/app/[locale]/(public)/categories/[...categoryId]/components/category-page";

// Types
type PageProps = {
  params: { locale: string; categoryId: string };
  searchParams: { subCategory: string[]; brand: string[] };
};
export default async function Page({ params, searchParams }: PageProps) {
  // Ensure searchParams.subCategory is always an array
  const subCategory = Array.isArray(searchParams.subCategory)
    ? searchParams.subCategory
    : [searchParams.subCategory].filter(Boolean);

  // Fetch data based on subCategory presence
  let data: ProductData;
  if (subCategory.length) {
    data = await getProductsBySubCategoryAction(
      subCategory,
      params.categoryId[0],
    );
  } else {
    data = await getProductsByCategoryIdAction(params.categoryId[0]);
  }

  console.log("params", params);
  console.log("searchParams", searchParams);

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
