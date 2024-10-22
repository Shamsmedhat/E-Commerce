"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import SortSection from "./sub-category-sort/sub-category-section";
import BrandsSection from "./brands-sort/brands-section";
import RatingSection from "./Rating-sort/rating-section";
import { categoryColor } from "@/lib/utils/helpers";
import AsideSortSection from "./aside-sort-section";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";

type SmallScreenSortSectionTypes = {
  products: Product[];
  categoryName: string;
};

export default function SmallScreenSortSection({
  products,
  categoryName,
}: SmallScreenSortSectionTypes) {
  const t = useTranslations();
  const x = useSearchParams();
  console.log("xxxx", x);
  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle className="mb-5 text-2xl font-bold">
          {t("MpJWTay2TLMOWLqh1Wjbc")}
        </SheetTitle>
        <SheetDescription>
          <aside className="">
            {/* Sub category Section */}
            <div
              className={`bg-${categoryColor(categoryName!)} mb-[2rem] rounded-md p-5 text-white`}
            >
              {/* Title */}
              <h3 className="mb-3 text-xl font-bold">
                {t("dKK2yEL4B-GcSul9ZivDx")}
              </h3>

              {/* Sort component [Subcategories]*/}
              <div
                className="flex flex-col items-start space-x-2 text-lg font-bold"
                dir="ltr"
              >
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
              <div
                className="flex flex-col items-start space-x-2 text-lg font-bold"
                dir="ltr"
              >
                <BrandsSection products={products} />
              </div>
            </div>

            {/*Rating section */}
            <div className="mb-[2rem] min-w-[200px] rounded-md bg-white p-5 text-primary-foreground">
              <h3 className="mb-3 text-xl font-bold">
                {t("mADNIsXxfc4IBjTJ7ANrC")}
              </h3>

              {/* Sort component [Rating]*/}
              <div
                className="flex flex-col items-start space-x-2 text-lg font-bold"
                dir="ltr"
              >
                <RatingSection products={products} />
              </div>
            </div>
          </aside>
        </SheetDescription>
      </SheetHeader>
    </SheetContent>
  );
}
