"use client";

import { useAddToCart } from "@/lib/utils/data/cart-data";
import { useTranslations } from "next-intl";
import { LuShoppingCart } from "react-icons/lu";

export default function AddToCart({
  productId,
  isSmall = false,
}: {
  productId: string;
  isSmall?: boolean;
}) {
  const t = useTranslations();
  const { addToCart, isAddingToCart } = useAddToCart();

  function handleAddingToCart(productId: string) {
    const productData = {
      product: productId,
      quantity: 1,
    }; // Simple object

    addToCart(productData);
  }

  if (isSmall) {
    return (
      <div className="flex w-auto cursor-pointer justify-center">
        <button
          className="flex items-center justify-start gap-3 rounded-full bg-primary p-[0.7rem] align-middle text-xs text-white shadow-md transition-colors hover:bg-primary/80 lg:text-sm"
          onClick={() => handleAddingToCart(productId)}
        >
          <LuShoppingCart className="text-primary-foreground" size={15} />
        </button>
      </div>
    );
  }

  return (
    <div className="flex w-auto cursor-pointer justify-center">
      <button
        className="flex items-center justify-start gap-3 rounded-full bg-primary py-1 pe-4 ps-1 align-middle text-xs text-white shadow-md transition-colors hover:bg-primary/80 lg:text-sm"
        onClick={() => handleAddingToCart(productId)}
      >
        <span className="rounded-full bg-white p-2">
          <LuShoppingCart className="text-primary-foreground" size={15} />
        </span>
        <span>{t("-k0yk9GUHIDLWvq7B4mRs")}</span>
      </button>
    </div>
  );
}
