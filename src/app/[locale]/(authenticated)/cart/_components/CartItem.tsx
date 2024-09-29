"use client";
import QuantityBtn from "@/components/common/QuantityBtn";
import { useAppSelector } from "@/hooks/reduxHooks";
import { cn } from "@/lib/utils";
import { getCategoryData } from "@/lib/utils/data/categories-data";
import { getSubCategoriesData } from "@/lib/utils/data/sub-category-data";
import { generateColors } from "@/lib/utils/generateCategoryColors";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function CartItem({ item }: { item: ProductItem }) {
  const t = useTranslations();

  const { rowStyle, columnStyle } = useAppSelector((state) => state.cart);
  const [subCategory, setSubCategory] = useState<SubCategory | null>(null);
  const [category, setCategory] = useState<Category | null>(null);
  const locale = useLocale();
  const isEn = locale === "en";

  useEffect(() => {
    try {
      (async () => {
        const [subCategoryData, categoryData] = await Promise.all([
          getSubCategoriesData(item.product.subCategory),
          getCategoryData(item.product.category),
        ]);

        setSubCategory(subCategoryData.subCategory);
        setCategory(categoryData.category);
        console.log("subCategoryData", subCategoryData);

        console.log("categoryData", categoryData);
      })();
    } catch (error) {}
  }, [item.product.subCategory, item.product.category]);

  const uniqCategoryColor = generateColors(
    category?.translations.data.name || "",
  );

  return (
    <>
      <li
        className={cn(
          columnStyle &&
            "box-border flex flex-[0_1_30%] shrink flex-col border-b-8",
          rowStyle && "flex flex-grow flex-row border-l-8",
          // `${categoryBorderColor(category!)} `,
          "my-5 items-center gap-8 rounded-md bg-white p-3 shadow-sm",
        )}
        style={{ borderColor: uniqCategoryColor.backgroundColor }}
      >
        {/* Product image */}
        <div className="mx-4">
          <Image
            src={item.product.cover}
            alt={item.product.translations[0].data.name}
            width={75}
            height={75}
          />
        </div>
        {/* product details */}
        <div className="flex h-full flex-grow flex-col justify-evenly">
          <span className="text-sm text-primary-foreground/70">
            {category?.translations.data.name} -{" "}
            {subCategory?.translations.data.name}
          </span>

          <h2>
            {isEn
              ? item.product.translations[0].data.name
              : item.product.translations[1].data.name}
          </h2>

          <div className="mt-3">
            <button
              className="flex items-center gap-2 rounded-md border-[0.5px] border-primary-foreground/60 px-2 py-1 text-sm text-primary-foreground/60 transition-colors hover:border-red-600/70 hover:text-red-600/70"
              onClick={() => {}}
            >
              <RiDeleteBin6Line />
              <span>{t("aI_K7fOdvddq4B_2iocmy")}</span>
            </button>
          </div>
        </div>

        <div
          className={cn(
            columnStyle && "flex w-full items-center justify-evenly",
            rowStyle && "flex items-center",
          )}
        >
          {/* product quantity */}
          <QuantityBtn className={rowStyle && "mr-12"} />
          {/* product price */}
          <div className={rowStyle && "mr-12"}>
            <span className="font-bold">
              {item.price} {t("fU01whrYbLGxy6qtBGMEo")}
            </span>
          </div>
        </div>
      </li>
    </>
  );
}
