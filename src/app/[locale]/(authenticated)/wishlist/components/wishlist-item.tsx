"use client";
import QuantityBtn from "@/components/common/QuantityBtn";
import { useAppSelector } from "@/hooks/reduxHooks";
import { cn } from "@/lib/utils";
import { useCategory } from "@/lib/utils/data/categories-data";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import { BsInfoCircle } from "react-icons/bs";

import { useSubCategory } from "@/lib/utils/data/sub-category-data";
import DeleteFromWishlist from "./delete-from-wishlist";
import AddToCart from "@/components/common/AddToCart";

type WishlistItemProps = {
  item: WishlistItem;
};

export default function WishlistItem({ item }: WishlistItemProps) {
  const t = useTranslations();

  const { rowStyle, columnStyle } = useAppSelector((state) => state.cart);

  const locale = useLocale();
  const isEn = locale === "en";

  const {
    subCategory,
    isError: isSubCategoryError,
    isFetching: isSubCategoryFetching,
    isPending: isSubCategoryPending,
  } = useSubCategory(item.subCategory);

  const {
    category,
    isError: isCategoryError,
    isFetching: isCategoryFetching,
    isPending: isCategoryPending,
  } = useCategory(item.category);

  return (
    <li
      className={cn(
        columnStyle && "box-border flex flex-col border-b-8",
        rowStyle && "flex flex-grow flex-row border-l-8",
        // `${categoryBorderColor(category!)} `,
        "my-5 items-center gap-8 rounded-md bg-white p-3 shadow-sm",
      )}
    >
      {/* Product image */}
      <div className="mx-4">
        <Image
          src={item.cover}
          alt={item.translations.data.name}
          // make sure all images is the same width to avoid UI issue
          className="min-h-[75px] min-w-[75px] object-scale-down"
          width={75}
          height={75}
        />
      </div>
      {/* product details */}
      <div
        className={cn(
          rowStyle && "w-[50%]",
          columnStyle && "w-full",
          "flex h-full flex-col justify-evenly",
        )}
      >
        <span className="text-sm text-primary-foreground/70">
          {category?.category.translations.data.name} -{" "}
          {subCategory?.subCategory.translations.data.name}
        </span>
        <h2>{item.translations.data.name}</h2>
        {item.stock <= 3 && (
          <div
            className={cn(
              isEn ? "flex-row" : "flex-row-reverse",
              "flex w-fit items-center gap-1 text-start text-sm text-red-600",
            )}
          >
            <BsInfoCircle />
            <span>{item.stock}</span>
            <span>{t("ulEKKGYVTG1jhVjuPy2B0")}</span>
          </div>
        )}
      </div>

      <div
        className={cn(
          columnStyle && "flex w-full items-center justify-evenly",
          rowStyle && "flex items-center",
        )}
      >
        {/* product price */}
        <div>
          <span className="font-bold">
            {item.price.toFixed(3)} {t("fU01whrYbLGxy6qtBGMEo")}
          </span>
        </div>
      </div>

      <div
        className={cn(
          columnStyle && "flex w-full items-center justify-evenly",
          rowStyle && "flex items-center",
        )}
      >
        <DeleteFromWishlist isEn={isEn} item={item} />
      </div>

      <div
        className={cn(
          columnStyle && "flex w-full items-center justify-evenly",
          rowStyle && "flex items-center",
        )}
      >
        <AddToCart productId={item._id} />
      </div>
    </li>
  );
}
