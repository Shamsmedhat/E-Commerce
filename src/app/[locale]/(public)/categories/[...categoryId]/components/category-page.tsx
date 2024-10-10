import Image from "next/image";
import { categoryColor } from "@/lib/utils/helpers";

// Icons
import { LuHeart, LuScale } from "react-icons/lu";

// Ui
import { ComboboxDemo } from "../../../../../../components/ui/combobox";
import DiscountSection from "@/app/[locale]/(public)/(homepage)/_components/discount-section";
import TopSellingItems from "@/app/[locale]/(public)/(homepage)/_components/top-selling-items";
import AddToCart from "../../../../../../components/common/AddToCart";
import BrandsSection from "./brands-sort/brands-section";
import SortSection from "./sub-category-sort/sub-category-section";

// Navigation
import { Link } from "@/navigarion";

// Translations
import { getLocale, getTranslations } from "next-intl/server";
import RatingSection from "./Rating-sort/rating-section";
import RatingStars from "@/components/common/RatingStars";

// Types
type CategoryPageProps = {
  products: Product[];
  searchParams: { subCategory: string[]; brand: string[]; rating: string[] };
};

export default async function CategoryPage({
  products,
  searchParams,
}: CategoryPageProps) {
  // Translation
  const t = await getTranslations();
  const locale = await getLocale();

  // Variables
  const isEn = locale === "en";
  const sortedCategories = searchParams.subCategory || [];
  const sortedBrands = searchParams.brand || [];
  const sortedRating = Array.isArray(searchParams.rating) // Ensure rating is an array
    ? searchParams.rating.map((r) => Number(r)) // Map over the array if it exists
    : searchParams.rating // If it's a single value, convert it to a number
      ? [Number(searchParams.rating)] // Wrap it in an array
      : []; // If no rating, return an empty array  console.log(sortedRating);

  const categoryName = products.map(
    (p) => p.category?.translations.data.name,
  )[0];

  function filterProducts(p: Product) {
    // We see the matches categories if there is sub category selected match the product subcategory or not
    const matchesCategory =
      // This checks if no categories are selected and return true to display all products
      sortedCategories.length === 0 ||
      // This condition checks whether the products subcategory name exists in the sortedCategories array.
      // If it does, it means the product belongs to one of the selected categories.
      sortedCategories.includes(p.subCategory?.translations.data.name!);

    // We see the matches brands if there is brand selected match the product brand or not
    const matchesBrand =
      // This checks if no brands are selected and return true to display all products
      sortedBrands.length === 0 ||
      // This condition checks whether the products brand name exists in the sortedBrands array.
      // If it does, it means the product belongs to one of the selected brands.
      sortedBrands.includes(p.brand?.translations.data.name!);

    // We see the matches brands if there is brand selected match the product brand or not
    const matchesRating =
      sortedRating.length === 0 || // If no rating filter is applied, show all products
      (Array.isArray(sortedRating) // Check if sortedRating is an array
        ? sortedRating.includes(p.ratings?.average!) // If it's an array, check if the product's rating is in the array
        : sortedRating === p.ratings?.average!); // If it's a single value, compare it directly

    // Ensures that the product is shown only if both the subcategory and brand match the selected filters.
    return matchesCategory && matchesBrand && matchesRating;
  }

  // If no data //TODO ui
  if (!products) return <p> no data</p>;

  return (
    <div>
      <div dir={isEn ? "ltr" : "rtl"}>
        {/* Category page header [Category name & products result] */}
        <header className="mx-auto my-10 flex w-[95%] justify-between">
          {/* Category name */}
          <h1 className="text-3xl font-bold">{categoryName}</h1>

          {/* Products result number*/}
          <span className="text-lg font-semibold text-primary-foreground">
            {products.length} {t("D0j4cQe3sepamyV6r68AM")}
          </span>
        </header>

        {/* Aside section & Products list */}
        <div className="flex justify-around pb-[4rem]">
          {/* Aside Section */}
          <aside className="w-[15%]">
            {/* Sub category Section */}
            <div
              className={`bg-${categoryColor(categoryName!)} mb-[2rem] min-w-[200px] rounded-md p-5 text-white`}
            >
              {/* Title */}
              <h3 className="mb-3 text-xl font-bold">
                {t("dKK2yEL4B-GcSul9ZivDx")}
              </h3>

              {/* Sort component [Subcategories]*/}
              <div className="flex flex-col items-start space-x-2 text-lg font-bold">
                <SortSection products={products} />
              </div>
            </div>

            {/* Brand Section */}
            <div className="mb-[2rem] min-w-[200px] rounded-md bg-white p-5 text-primary-foreground">
              {/* Title */}
              <h3 className="mb-3 text-xl font-bold">
                {t("0Yio04Ct9UZq80n-Mnrjp")}
              </h3>

              {/* Sort component [Brands]*/}
              <div className="flex flex-col items-start space-x-2 text-lg font-bold">
                <BrandsSection products={products} />
              </div>
            </div>

            {/*Rating section */}
            <div className="mb-[2rem] min-w-[200px] rounded-md bg-white p-5 text-primary-foreground">
              <h3 className="mb-3 text-xl font-bold">
                {t("mADNIsXxfc4IBjTJ7ANrC")}
              </h3>

              {/* Sort component [Rating]*/}
              <div className="flex flex-col items-start space-x-2 text-lg font-bold">
                <RatingSection products={products} />
              </div>
            </div>
          </aside>

          {/*Producsts section  */}
          <div className="w-[75%]">
            {/* Sort section */}
            <div className="rounded-md bg-white p-3">
              <span>
                {/* Title */}
                <h4 className="text-lg font-bold">
                  {t("MpJWTay2TLMOWLqh1Wjbc")}
                </h4>

                {/* Sort component [list]*/}
                <span className="ms-4">
                  <SortBy />
                </span>
              </span>
            </div>

            {/* Products cart */}
            <div className="row-auto mt-[2rem] grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
              {/* First filter the products based on the given sort valus */}
              {products
                .filter((p) => filterProducts(p))
                // After filter the products we map over it to display
                .map((p, i) => (
                  <div
                    key={i}
                    className="flex flex-col justify-between gap-4 rounded-md bg-white p-3"
                  >
                    {/* Product Image */}
                    <div className="relative mx-auto h-[180px] w-[70%]">
                      <Link href={`/product/${p._id}`}>
                        <Image
                          src={p.cover!}
                          alt={p.translations?.data.name!}
                          sizes="100%"
                          fill
                          className="object-scale-down"
                        />
                      </Link>
                    </div>

                    {/* Product details */}
                    <div
                      className="flex grow flex-col justify-between"
                      dir={isEn ? "ltr" : "rtl"}
                    >
                      {/* Sub category name */}
                      <span className="text-sm font-bold text-primary-foreground/70">
                        {p.subCategory?.translations.data.name}
                      </span>

                      {/* Rating */}
                      <span>
                        {p.ratings?.average ? (
                          <RatingStars rate={p.ratings?.average} />
                        ) : (
                          ""
                        )}
                      </span>

                      {/* Product name */}
                      <h3 className="text-xl font-bold text-primary-foreground">
                        <Link
                          href={`/product/${p._id}`}
                          className="transition-all hover:text-primary"
                        >
                          {p.translations?.data.name.length! > 40
                            ? `${p.translations?.data.name.slice(0, 40)}...`
                            : p.translations?.data.name}
                        </Link>
                      </h3>

                      {/* Price & discount */}
                      <div>
                        <span className="text-primary-foreground/50 line-through">
                          1000 {t("fU01whrYbLGxy6qtBGMEo")}
                        </span>
                        <p className="text-lg font-bold text-primary-foreground">
                          {p.price} {t("fU01whrYbLGxy6qtBGMEo")}
                        </p>
                      </div>

                      {/* Product buttons */}
                      <div className="my-4 flex items-center gap-3">
                        <AddToCart productId={p._id!} />
                        <div className="rounded-full bg-primary-foreground/20 p-2">
                          <LuHeart strokeWidth={1} size={18} />
                        </div>
                        <button>
                          <div className="rounded-full bg-primary-foreground/20 p-2">
                            <LuScale strokeWidth={1} size={18} />
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                ))
                .slice(0, 20)}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section for DiscountSection & TopSellingItems*/}
      <div className="my-[8rem]">
        <DiscountSection />
        <TopSellingItems />
      </div>
    </div>
  );
}

//TODO
function SortBy() {
  const frameworks = [
    {
      value: "next.js",
      label: "Next.js",
    },
    {
      value: "sveltekit",
      label: "SvelteKit",
    },
    {
      value: "nuxt.js",
      label: "Nuxt.js",
    },
    {
      value: "remix",
      label: "Remix",
    },
    {
      value: "astro",
      label: "Astro",
    },
  ];

  return <ComboboxDemo frameworks={frameworks} />;
}
