"use client";
import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { categoryColor } from "@/lib/utils/helpers";
import { useTranslations } from "next-intl";
import BrandsSection from "./brands-sort/brands-section";
import RatingSection from "./Rating-sort/rating-section";
import SubCategorySection from "./sub-category-sort/sub-category-section";

type SmallScreenSortSectionTypes = {
  products: Product[];
  categoryName: string;
  categoryId: string;
};

export default function SmallScreenSortSection({
  products,
  categoryName,
  categoryId,
}: SmallScreenSortSectionTypes) {
  const t = useTranslations();
  return (
    <SheetContent className="" side={"left"}>
      <SheetHeader>
        <SheetTitle> {t("MpJWTay2TLMOWLqh1Wjbc")}</SheetTitle>
        <SheetDescription>
          <aside className="">
            {/* Sub category Section */}
            <div
              className={`bg-${categoryColor(categoryName!)} mb-[2rem] min-w-[200px] rounded-md p-5 text-white`}
            >
              {/* Title */}
              <h3 className="mb-3 text-xl font-bold">
                {t("dKK2yEL4B-GcSul9ZivDx")}
              </h3>

              {/* Sort component [Subcategories]*/}
              <div className="flex flex-col items-end space-x-2 text-lg font-bold">
                <SubCategorySection categoryId={categoryId} />
              </div>
            </div>

            {/* Brand Section */}
            <div className="mb-[2rem] min-w-[200px] rounded-md bg-white p-5 text-primary-foreground dark:bg-black/30 dark:text-white">
              {/* Title */}
              <h3 className="mb-3 text-xl font-bold">
                {t("0Yio04Ct9UZq80n-Mnrjp")}
              </h3>

              {/* Sort component [Brands]*/}
              <div className="flex flex-col items-end space-x-2 text-lg font-bold">
                <BrandsSection products={products} />
              </div>
            </div>

            {/*Rating section */}
            <div className="mb-[2rem] min-w-[200px] rounded-md bg-white p-5 text-primary-foreground dark:bg-black/30 dark:text-white">
              <h3 className="mb-3 text-xl font-bold">
                {t("mADNIsXxfc4IBjTJ7ANrC")}
              </h3>

              {/* Sort component [Rating]*/}
              <div className="flex flex-col items-end space-x-2 text-lg font-bold">
                <RatingSection products={products} />
              </div>
            </div>
          </aside>
        </SheetDescription>
      </SheetHeader>
    </SheetContent>
  );
}
