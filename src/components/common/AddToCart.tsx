"use client";

import { getCartAction } from "@/lib/actions/cart-actions";
import { useAddToCart, useCart } from "@/lib/utils/data/cart-data";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
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
  const { cart } = useCart();
  const [isProductAddedToCard, serIsProductAddedToCard] = useState(false);
  const allProductsCartId = cart?.items.map((i) => i.product._id);

  useEffect(() => {
    serIsProductAddedToCard(allProductsCartId?.includes(productId));
  }, [allProductsCartId, productId]);

  // Function to handle adding the product to the cart
  const handleAddingToCart = (productId: string) => {
    const productData = {
      product: productId,
      quantity: 1,
    };
    addToCart(productData); // Trigger adding product to the cart
    serIsProductAddedToCard((prv) => !prv);
  };

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

  if (isProductAddedToCard) {
    return <button>Already exist</button>;
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
