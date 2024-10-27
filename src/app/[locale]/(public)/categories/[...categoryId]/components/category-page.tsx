"use client";
import Image from "next/image";

// Icons
import { LuHeart, LuScale } from "react-icons/lu";

// Ui
import { ComboboxDemo } from "../../../../../../components/ui/combobox";
import TopSellingItems from "@/app/[locale]/(public)/(homepage)/_components/top-selling-items";
import AddToCart from "../../../../../../components/common/AddToCart";

// Navigation
import { Link } from "@/navigarion";

// Translations
import RatingStars from "@/components/common/RatingStars";
import { useLocale, useTranslations } from "next-intl";
import AsideSortSection from "./aside-sort-section";

// Types
type CategoryPageProps = {
  products: Product[];
  categoryId: string;
  searchParams: { subCategory?: string[]; brand?: string[]; rating?: string[] };
};

export default function CategoryPage({
  products,
  categoryId,
  searchParams,
}: CategoryPageProps) {
  // Translation
  const t = useTranslations();
  const locale = useLocale();
  const categoryName = products.map(
    (p) => p.category?.translations.data.name,
  )[0];

  // Variables
  const isEn = locale === "en";

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
          <AsideSortSection
            products={products}
            categoryName={categoryName}
            categoryId={categoryId}
          />

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
        {/* <DiscountSection /> */}
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
