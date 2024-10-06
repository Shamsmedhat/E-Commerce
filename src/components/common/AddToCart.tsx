"use client";

import { useEffect, useState } from "react";

// Translations
import { useTranslations } from "next-intl";

// Icones
import { LuShoppingCart } from "react-icons/lu";
import { TfiShoppingCartFull } from "react-icons/tfi";
import { FcApproval } from "react-icons/fc";

// Data hooks
import {
  useAddToCart,
  useCart,
  useDeleteProductFromCart,
} from "@/lib/utils/data/cart-data";
import { cn } from "@/lib/utils";

type AddToCartProps = {
  productId: string;
  isSmall?: boolean;
};

export default function AddToCart({
  productId,
  isSmall = false,
}: AddToCartProps) {
  // Translations
  const t = useTranslations();

  // States
  const { addToCart, isAddingToCart } = useAddToCart();
  const [isProductAddedToCard, setIsProductAddedToCard] = useState(false);
  const { deleteProductFromCart, isDeleteingProductFromCart } =
    useDeleteProductFromCart();

  // React query
  const { cart, isFetching, isError: isCartError } = useCart();
  // Get all product's ids that exist in the cart
  const allProductsCartId = cart?.items.map((i) => i.product._id);

  // Is the current btn is exist in the product already in the cart ?
  const isProductInCard = allProductsCartId?.includes(productId);

  // Effect [change btn ui if the product is already in the cart]
  useEffect(() => {
    // No cart recived
    if (isCartError) {
      setIsProductAddedToCard(false);
    } else {
      // Cart data exist
      setIsProductAddedToCard(isProductInCard ?? false);
    }
  }, [isProductInCard, isCartError]);

  // Function to handle adding the product to the cart
  function handleAddingToCart(productId: string) {
    // Product data object and make the quantity is one by default
    const productData = {
      product: productId,
      quantity: 1,
    };
    setIsProductAddedToCard(true);
    addToCart(productData);
  }

  // Function to handle remove the product to the cart

  return (
    <div className="flex w-auto cursor-pointer flex-col justify-center">
      {isProductAddedToCard && (
        <div
          className={cn("my-2 flex w-full items-center justify-center text-sm")}
        >
          <span className="font-bold text-green-500">
            {t("sBwmG4Xwcsv2mcubWVteU")}
          </span>
          <FcApproval />
        </div>
      )}
      <button
        className={cn(
          isSmall ? "p-[0.7rem]" : "py-1 pe-4 ps-1",
          "flex items-center justify-start gap-3 rounded-full bg-primary align-middle text-xs text-white shadow-md transition-colors hover:bg-primary/80 lg:text-sm",
        )}
        onClick={() => handleAddingToCart(productId)}
      >
        <span className="rounded-full bg-white p-2">
          <LuShoppingCart className="text-primary-foreground" size={15} />
        </span>
        {isSmall ? null : <span>{t("-k0yk9GUHIDLWvq7B4mRs")}</span>}
      </button>
    </div>
  );
}
