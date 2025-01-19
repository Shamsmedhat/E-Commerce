import { getCategoriesAction } from "@/lib/actions/categories-actions";
import AddProduct from "./_components/add-product";
import { getSubCategoryAction } from "@/lib/actions/sub-category-actions";

export default async function page() {
  const allCategories = await getCategoriesAction();
  return (
    <div>
      <h1>Dashboard</h1>
      <AddProduct allCategories={allCategories} />
    </div>
  );
}
