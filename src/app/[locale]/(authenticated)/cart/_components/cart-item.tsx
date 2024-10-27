"use client";
import QuantityBtn from "@/components/common/QuantityBtn";
import { useAppSelector } from "@/hooks/reduxHooks";
import { cn } from "@/lib/utils";
import { useCategory } from "@/lib/utils/data/categories-data";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import { BsInfoCircle } from "react-icons/bs";

import DeleteProductFromCart from "./delete-product-from-cart";
import { useSubCategory } from "@/lib/utils/data/sub-category-data";

type CartItemProps = {
  item: ProductItem;
};

export default function CartItem({ item }: CartItemProps) {
  const t = useTranslations();

  const { rowStyle, columnStyle } = useAppSelector((state) => state.cart);

  const locale = useLocale();
  const isEn = locale === "en";

  const [productPrice, setProductPrice] = useState(item.price);
  const {
    subCategory,
    isError: isSubCategoryError,
    isFetching: isSubCategoryFetching,
    isPending: isSubCategoryPending,
  } = useSubCategory(item.product.subCategory);

  const {
    category,
    isError: isCategoryError,
    isFetching: isCategoryFetching,
    isPending: isCategoryPending,
  } = useCategory(item.product.category);

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
          src={item.product.cover}
          alt={item.product.translations.data.name}
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
        <h2>{item.product.translations.data.name}</h2>
        {(item.product.stock <= 3 || item.quantity === item.product.stock) && (
          <div
            className={cn(
              isEn ? "flex-row" : "flex-row-reverse",
              "flex w-fit items-center gap-1 text-start text-sm text-red-600",
            )}
          >
            <BsInfoCircle />
            <span>{item.product.stock}</span>
            <span>{t("ulEKKGYVTG1jhVjuPy2B0")}</span>
          </div>
        )}

        <DeleteProductFromCart isEn={isEn} item={item} />
      </div>

      <div
        className={cn(
          columnStyle && "flex w-full items-center justify-evenly",
          rowStyle && "flex items-center",
        )}
      >
        {/* product quantity */}
        <QuantityBtn
          className={rowStyle && "mr-12"}
          currentQty={item.quantity}
          productPrice={productPrice}
          setProductPrice={setProductPrice}
          productId={item.product._id}
          stock={item.product.stock}
        />
        {/* product price */}
        <div className={rowStyle && "mr-12"}>
          <span className="font-bold">
            {productPrice.toFixed(3)} {t("fU01whrYbLGxy6qtBGMEo")}
          </span>
        </div>
      </div>
    </li>
  );
}
