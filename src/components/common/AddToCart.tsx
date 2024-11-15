"use client";

import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { FcApproval } from "react-icons/fc";
import { LuShoppingCart } from "react-icons/lu";
import { TfiShoppingCartFull } from "react-icons/tfi";

// Redux hooks
import { useAppDispatch } from "@/hooks/reduxHooks";
import { addToGuestCart } from "@/lib/features/cart/guest-cart-slice";

// Types
type AddToCartProps = {
  productId: string;
  isSmall?: boolean;
};

// Helper function to handle localStorage
const updateLocalStorageCart = (productId: string, quantity: number) => {
  const storedCart = JSON.parse(
    localStorage.getItem("stored-guest-cart") || "[]",
  );

  // Check if the product already exists in the cart
  const existingProduct = storedCart.find(
    (item: { product: string; quantity: number }) => item.product === productId,
  );

  if (existingProduct) {
    // Update quantity if the product exists
    existingProduct.quantity += quantity;
  } else {
    // Add new product to the cart
    storedCart.push({ product: productId, quantity });
  }

  // Save updated cart back to localStorage
  localStorage.setItem("stored-guest-cart", JSON.stringify(storedCart));
};

export default function AddToCart({
  productId,
  isSmall = false,
}: AddToCartProps) {
  const t = useTranslations();
  const [isProductAddedToCart, setIsProductAddedToCart] = useState(false);

  // Redux for guest cart
  const dispatch = useAppDispatch();

  // Check if product is in localStorage cart
  useEffect(() => {
    const storedCart = JSON.parse(
      localStorage.getItem("stored-guest-cart") || "[]",
    );
    const isProductInCart = storedCart.some(
      (item: { product: string; quantity: number }) =>
        item.product === productId,
    );
    setIsProductAddedToCart(isProductInCart);
  }, [productId]);

  // Handle adding product to the cart
  const handleAddingToCart = () => {
    const quantity = 1; // Default quantity to add

    // Update localStorage
    updateLocalStorageCart(productId, quantity);

    // Update Redux state for guest cart
    dispatch(addToGuestCart({ product: productId, quantity }));

    setIsProductAddedToCart(true);
  };

  return (
    <div className="flex w-auto cursor-pointer flex-col justify-center">
      {isProductAddedToCart && (
        <div className="my-2 flex w-full flex-row-reverse items-center justify-center gap-2 text-sm">
          <span className="font-bold text-green-600">
            {t("sBwmG4Xwcsv2mcubWVteU")}
          </span>
          <FcApproval />
        </div>
      )}
      <button
        className={cn(
          isSmall ? "mx-3 p-1" : "py-1 pe-4 ps-1",
          "flex max-w-fit items-center justify-start gap-3 rounded-full bg-primary align-middle text-xs text-white shadow-md transition-colors hover:bg-primary/80 lg:text-sm",
        )}
        onClick={handleAddingToCart}
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
        {!isSmall && <span>{t("-k0yk9GUHIDLWvq7B4mRs")}</span>}
      </button>
    </div>
  );
}
