"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { LuShoppingCart } from "react-icons/lu";
import { FcApproval } from "react-icons/fc";
import { CgSpinnerAlt } from "react-icons/cg";
import { TfiShoppingCartFull } from "react-icons/tfi";

// Redux hooks
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { addToGuestCart } from "@/lib/features/cart/guest-cart-slice";
import { useSession } from "next-auth/react";
import { useAddToCart, useCart } from "@/lib/utils/data/cart-data";
import { updateLocalStorageCart } from "@/lib/utils/helpers";

// Types
type AddToCartProps = {
  productId: string;
  isSmall?: boolean;
};

export default function AddToCart({
  productId,
  isSmall = false,
}: AddToCartProps) {
  const t = useTranslations();
  const [isProductAddedToCart, setIsProductAddedToCart] = useState(false);
  const { addToCart, isAddingToCart } = useAddToCart();
  const { data: session, status } = useSession();
  const guestCart = useAppSelector((state) => state.guestCart);

  // Redux for guest cart
  const dispatch = useAppDispatch();
  const { cart, isError: isCartError } = useCart(session);
  const isProductInUserCart = cart?.cart.items.some(
    (p) => p.product._id === productId,
  );
  const allProductsCartId = guestCart?.map((i) => i.product);

  // Is the current btn exist in the product already in the cart?
  const isProductInCart = allProductsCartId?.includes(productId);

  // Check if product is in localStorage cart
  useEffect(() => {
    if (!session) {
      const storedCart = JSON.parse(localStorage.getItem("guest-cart") || "[]");
      const isProductInCart = storedCart.some(
        (item: { product: string; quantity: number }) =>
          item.product === productId,
      );
      setIsProductAddedToCart(isProductInCart);
    } else {
      setIsProductAddedToCart(isProductInCart ?? false);
    }
  }, [productId, session, isProductInCart]);

  // Handle adding product to the cart
  let quantity = 1;
  function handleAddingToCart() {
    // Product data object with updated quantity
    const productData = {
      product: productId,
      quantity: quantity, // Ensure we set 1 or increment by 1
    };

    // If there is a logged in user
    if (session) {
      // For logged-in users, use the addToCart hook
      setIsProductAddedToCart(true);
      addToCart(productData);
    } else {
      // Update localStorage
      updateLocalStorageCart(productId, quantity);

      // Update Redux state for guest cart
      dispatch(addToGuestCart({ product: productId, quantity }));

      setIsProductAddedToCart(true);
      window.dispatchEvent(new Event("storage"));
    }
  }

  return (
    <div className="flex w-auto cursor-pointer flex-col justify-center">
      {(isProductAddedToCart || isProductInUserCart) && (
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
            isProductAddedToCart || isProductInUserCart
              ? "bg-green-600/40"
              : "bg-white",
            "rounded-full p-2",
          )}
        >
          {isProductAddedToCart || isProductInUserCart ? (
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
