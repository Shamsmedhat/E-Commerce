"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

// Translations
import { useTranslations } from "next-intl";

// Icones
import { LuShoppingCart } from "react-icons/lu";
import { FcApproval } from "react-icons/fc";
import { CgSpinnerAlt } from "react-icons/cg";
import { TfiShoppingCartFull } from "react-icons/tfi";

// Data hooks
import { useAddToCart, useCart } from "@/lib/utils/data/cart-data";

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
  const [isProductAddedToCart, setIsProductAddedToCart] = useState(false);

  // React query
  const { cart, isFetching, isError: isCartError } = useCart();

  // Get all product's ids that exist in the cart
  const allProductsCartId = cart?.cart.items.map((i) => i.product._id);

  // Is the current btn exist in the product already in the cart?
  const isProductInCart = allProductsCartId?.includes(productId);

  // Effect [change btn UI if the product is already in the cart]
  useEffect(() => {
    if (isCartError) {
      setIsProductAddedToCart(false);
    } else {
      setIsProductAddedToCart(isProductInCart ?? false);
    }
  }, [isProductInCart, isCartError]);

  // Function to handle adding the product to the cart
  function handleAddingToCart(productId: string) {
    const currentProduct = cart?.cart.items.find(
      (p) => p.product._id === productId,
    );

    let quantity = 1;
    if (currentProduct) {
      // Only increment the quantity if it's a new action
      quantity = currentProduct.quantity + 1;
    }

    // Product data object with updated quantity
    const productData = {
      product: productId,
      quantity: quantity, // Ensure we set 1 or increment by 1
    };

    setIsProductAddedToCart(true);
    addToCart(productData);
  }

  return (
    <div className="flex w-auto cursor-pointer flex-col justify-center">
      {isProductAddedToCart && (
        <div
          className={cn(
            "flex-row-reverse",
            "my-2 flex w-full flex-row-reverse items-center justify-center gap-2 text-sm",
          )}
        >
          <span className="font-bold text-green-600">
            {t("sBwmG4Xwcsv2mcubWVteU")}
          </span>
          <FcApproval />
        </div>
      )}
      <button
        className={cn(
          isAddingToCart && "cursor-not-allowed",
          isSmall ? "mx-3 p-1" : "py-1 pe-4 ps-1",
          "flex max-w-fit items-center justify-start gap-3 rounded-full bg-primary align-middle text-xs text-white shadow-md transition-colors hover:bg-primary/80 lg:text-sm",
        )}
        disabled={isAddingToCart}
        onClick={() => handleAddingToCart(productId)}
      >
        <span
          className={cn(
            isProductAddedToCart ? "bg-green-600/40" : "bg-white",
            "rounded-full p-2",
          )}
        >
          {isProductAddedToCart ? (
            <TfiShoppingCartFull className="text-white" size={15} />
          ) : (
            <LuShoppingCart className="text-primary-foreground" size={15} />
          )}
        </span>
        {isAddingToCart ? (
          <span>
            <CgSpinnerAlt className="animate-spin" size={30} color="#fff" />
          </span>
        ) : isSmall ? null : (
          <span>{t("-k0yk9GUHIDLWvq7B4mRs")}</span>
        )}
      </button>
    </div>
  );
}
