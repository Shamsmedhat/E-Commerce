"use client";
import QuantityBtn from "@/components/common/QuantityBtn";
import { useAppSelector } from "@/hooks/reduxHooks";
import { cn } from "@/lib/utils";
import { useDeleteProductFromCart } from "@/lib/utils/data/cart-data";
import { getCategoryData } from "@/lib/utils/data/categories-data";
import { getSubCategoriesData } from "@/lib/utils/data/sub-category-data";
import { generateColors } from "@/lib/utils/generateCategoryColors";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

type CartItemProps = {
  item: ProductItem;
};

export default function CartItem({ item }: CartItemProps) {
  const t = useTranslations();
  const [isOpen, setIsOpen] = useState(false);

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
      })();
    } catch (error) {}
  }, [item.product.subCategory, item.product.category]);

  const { deleteProductFromCart, isDeleteingProductFromCart } =
    useDeleteProductFromCart();

  function handleDeleteFromCart(productId: string) {
    // Close the dialog immediately
    setIsOpen(false);

    deleteProductFromCart(productId);
  }

  const uniqCategoryColor = generateColors(
    category?.translations.data.name || "",
  );

  return (
    <li
      className={cn(
        columnStyle && "box-border flex flex-col border-b-8",
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
          {category?.translations.data.name} -{" "}
          {subCategory?.translations.data.name}
        </span>
        <h2>
          {isEn
            ? item.product.translations[0].data.name
            : item.product.translations[1].data.name}
        </h2>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{t("U3paCex62htmYg5U0ZrLP")}</DialogTitle>
              <DialogDescription>
                {t("SBOouAPG2Oyvyg38ZITbW")}{" "}
                {isEn
                  ? item.product.translations[0].data.name
                  : item.product.translations[1].data.name}
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button
                type="submit"
                className="bg-red-600 text-white hover:bg-red-600/70"
                onClick={() => handleDeleteFromCart(item.product._id)}
              >
                {t("cH44jtWKXtfVfaS0B6a85")}
              </Button>
            </DialogFooter>
          </DialogContent>
          <DialogTrigger>
            {/* delete btn */}
            <div className="mt-3">
              <div className="flex items-center gap-2 rounded-md border-[0.5px] border-primary-foreground/60 px-2 py-1 text-sm text-primary-foreground/60 transition-colors hover:border-red-600/70 hover:text-red-600/70">
                <RiDeleteBin6Line />
                <span>{t("aI_K7fOdvddq4B_2iocmy")}</span>
              </div>
            </div>
          </DialogTrigger>
        </Dialog>
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
        />
        {/* product price */}
        <div className={rowStyle && "mr-12"}>
          <span className="font-bold">
            {item.price} {t("fU01whrYbLGxy6qtBGMEo")}
          </span>
        </div>
      </div>
    </li>
  );
}
