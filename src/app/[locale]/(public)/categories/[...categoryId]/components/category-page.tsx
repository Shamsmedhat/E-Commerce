import React from "react";
import { Label } from "@/components/ui/label";
import { Checkbox } from "../../../../../../components/ui/checkbox";
import { ComboboxDemo } from "../../../../../../components/ui/combobox";
import { LuHeart, LuScale, LuShoppingCart } from "react-icons/lu";

import DiscountSection from "@/app/[locale]/(public)/(homepage)/_components/discount-section";
import TopSellingItems from "@/app/[locale]/(public)/(homepage)/_components/top-selling-items";
import { categoryColor } from "@/lib/utils/helpers";
import Image from "next/image";
import { Link } from "@/navigarion";
import AddToCart from "../../../../../../components/common/AddToCart";
import { getLocale, getTranslations } from "next-intl/server";
import SubCategorySort from "./sub-category-sort";
import SortSection from "./sub-category-section";
import BrandsSection from "./brands-section";

type CategoryPageProps = {
  products: Product[];
  searchParams: { subCategory: string[]; brand: string[] };
};

export default async function CategoryPage({
  products,
  searchParams,
}: CategoryPageProps) {
  const t = await getTranslations();
  const locale = await getLocale();
  const isEn = locale === "en";
  const sortedCategories = searchParams.subCategory || [];
  const sortedBrands = searchParams.brand || [];
  if (!products) return <p> no data</p>;

  const categoryName = products.map(
    (p) => p.category?.translations.data.name,
  )[0];

  return (
    <div dir={isEn ? "ltr" : "rtl"}>
      {/* Category page header [Category name & products result] */}
      <header className="mx-auto my-10 flex w-[95%] justify-between">
        {/* Category name */}
        <h1 className="text-3xl font-bold">{categoryName}</h1>

        {/* Products result */}
        <span className="text-lg font-semibold text-primary-foreground">
          {products.length} {t("D0j4cQe3sepamyV6r68AM")}
        </span>
      </header>

      {/* Aside section & Products list */}
      <div className="flex justify-around pb-[4rem]">
        {/* Aside Section */}
        <aside className="w-[15%]">
          {/* Category Section */}

          {/* Sub category Section */}
          <div
            className={`bg-${categoryColor(categoryName!)} mb-[2rem] rounded-md p-5 text-white`}
          >
            <h3 className="mb-3 text-xl font-bold">
              {t("dKK2yEL4B-GcSul9ZivDx")}
            </h3>
            <div className="flex flex-col items-start space-x-2 text-lg font-bold">
              <SortSection products={products} />
            </div>
          </div>

          {/* Brand Section */}
          <div className="mb-[2rem] rounded-md bg-white p-5 text-primary-foreground">
            <h3 className="mb-3 text-xl font-bold">العـلامة التجارية</h3>
            <BrandsSection products={products} />
            {/* <div className="flex flex-col items-start space-x-2 text-lg font-bold">
              <div>
                <Checkbox id="terms" className="me-3" />
                <Label htmlFor="terms">أختيــار فئة</Label>
              </div>
              <div>
                <Checkbox id="terms" className="me-3" />
                <Label htmlFor="terms">أختيــار فئة</Label>
              </div>
              <div>
                <Checkbox id="terms" className="me-3" />
                <Label htmlFor="terms">أختيــار فئة</Label>
              </div>
              <div>
                <Checkbox id="terms" className="me-3" />
                <Label htmlFor="terms">أختيــار فئة</Label>
              </div>
            </div> */}
          </div>

          {/*Rating section */}
          <div className="mb-[2rem] rounded-md bg-white p-5 text-primary-foreground">
            <h3 className="mb-3 text-xl font-bold">التقييـم</h3>
          </div>
        </aside>

        {/*Producsts section  */}
        <div className="w-[75%]">
          {/* Sort section */}
          <div className="rounded-md bg-white p-3">
            <span>
              {/*  */}
              <span className="text-lg font-bold">
                {t("MpJWTay2TLMOWLqh1Wjbc")}
              </span>
              <span className="ms-4">
                <SortBy />
              </span>
            </span>
          </div>
          {/* Products cart */}
          <div className="grid-row-4 mt-[2rem] grid grid-cols-4 gap-4">
            {products
              .filter((p) => {
                const matchesCategory =
                  sortedCategories.length === 0 ||
                  sortedCategories.includes(
                    p.subCategory?.translations.data.name!,
                  );

                const matchesBrand =
                  sortedBrands.length === 0 ||
                  sortedBrands.includes(p.brand?.translations.data.name!);

                return matchesCategory && matchesBrand;
              })
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

      <div className="my-[8rem]">
        <DiscountSection />
        <TopSellingItems />
      </div>
    </div>
  );
}

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
