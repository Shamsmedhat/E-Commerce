import React from "react";
import { Label } from "@/components/ui/label";
import { Checkbox } from "../ui/checkbox";
import { ComboboxDemo } from "../ui/combobox";
import { LuHeart, LuScale, LuShoppingCart } from "react-icons/lu";

import DiscountSection from "@/app/[locale]/(public)/(homepage)/_components/discount-section";
import TopSellingItems from "@/app/[locale]/(public)/(homepage)/_components/top-selling-items";
import { categoryColor } from "@/lib/utils/helpers";
import Image from "next/image";
import { Link } from "@/navigarion";

type CategoryPageProps = {
  products: Product[];
  categoryName: string;
};

export default function CategoryPage({
  products,
  // categoryName,
}: CategoryPageProps) {
  console.log("categoryName");
  // console.log("categoryName", categoryName);

  if (!products) return <p> no data</p>;

  return (
    <>
      <header className="mx-auto mb-[2rem] flex w-[95%] justify-between">
        {/* <h1 className="text-3xl font-bold">{categoryName}</h1> */}
        <span className="text-lg font-semibold text-primary-foreground">
          {products.length} نتـيجة
        </span>
      </header>
      <div className="flex justify-around pb-[4rem]">
        {/* Aside Section */}
        <aside className="w-[15%]">
          {/* Category Section */}
          <div
            // className={`bg-${categoryColor(categoryName)} mb-[2rem] rounded-md p-5 text-white`}
            className={`mb-[2rem] rounded-md p-5 text-white`}
          >
            <h3 className="mb-3 text-xl font-bold">الفئـة</h3>
            <div className="flex flex-col items-start space-x-2 text-lg font-bold">
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
            </div>
          </div>

          {/* Sub category Section */}
          <div className="mb-[2rem] rounded-md bg-white p-5 text-primary-foreground">
            <h3 className="mb-3 text-xl font-bold">الفئـة الفرعية</h3>
            <div className="flex flex-col items-start space-x-2 text-lg font-bold">
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
            </div>
          </div>

          {/* Brand Section */}
          <div className="mb-[2rem] rounded-md bg-white p-5 text-primary-foreground">
            <h3 className="mb-3 text-xl font-bold">العـلامة التجارية</h3>
            <div className="flex flex-col items-start space-x-2 text-lg font-bold">
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
            </div>
          </div>

          {/*Rating section */}
          <div className="mb-[2rem] rounded-md bg-white p-5 text-primary-foreground">
            <h3 className="mb-3 text-xl font-bold">التقييـم</h3>
          </div>
        </aside>

        {/*Producsts section  */}
        <div className="w-[75%]">
          <div className="rounded-md bg-white p-3">
            <span>
              <span className="text-lg font-bold">ترتـيب حسب</span>
              <span className="ms-4">
                <SortBy />
              </span>
            </span>
          </div>

          <div className="grid-row-4 mt-[2rem] grid grid-cols-4 gap-4">
            {products
              .map((p, i) => (
                <div key={i} className="rounded-md bg-white p-3">
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
                  {/* Price & discound */}
                  <span className="text-primary-foreground/50 line-through">
                    20000 جنيـة
                  </span>
                  <p className="text-lg font-bold text-primary-foreground">
                    {p.price} جنيـة
                  </p>
                  <div className="my-4 flex items-center gap-3">
                    <button>
                      <div className="rounded-full bg-primary p-2">
                        <LuShoppingCart
                          className="text-primary-foreground"
                          size={15}
                        />
                      </div>
                    </button>
                    <button>
                      <div className="rounded-full bg-primary-foreground/20 p-2">
                        <LuHeart strokeWidth={1} size={18} />
                      </div>
                    </button>
                    <button>
                      <div className="rounded-full bg-primary-foreground/20 p-2">
                        <LuScale strokeWidth={1} size={18} />
                      </div>
                    </button>
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
    </>
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
