"use client";

import React, { useState } from "react";
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
import { useDeleteProductFromCart } from "@/lib/utils/data/cart-data";
import { useTranslations } from "next-intl";
import { getSession } from "next-auth/react"; // Import NextAuth for session checking

type DeleteProductFromCartProps = {
  item: ProductItem;
  isEn: boolean;
};

export default function DeleteProductFromCart({
  item,
  isEn,
}: DeleteProductFromCartProps) {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations();
  const { deleteProductFromCart, isDeleteingProductFromCart } =
    useDeleteProductFromCart();

  // Helper function to remove product from localStorage
  const removeFromLocalStorage = (productId: string) => {
    const cart = localStorage.getItem("guest-cart");
    if (cart) {
      const parsedCart = JSON.parse(cart);
      const updatedCart = parsedCart.filter(
        (cartItem: any) => cartItem.product !== productId,
      );
      localStorage.setItem("guest-cart", JSON.stringify(updatedCart));
    }
  };

  async function handleDeleteFromCart(productId: string) {
    // Close the dialog immediately
    setIsOpen(false);

    const session = await getSession(); // Check for session
    if (session) {
      // User is logged in, delete from server-side cart
      deleteProductFromCart(productId);
    } else {
      // User is not logged in, delete from localStorage
      removeFromLocalStorage(productId);
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t("U3paCex62htmYg5U0ZrLP")}</DialogTitle>
          <DialogDescription>
            {t("SBOouAPG2Oyvyg38ZITbW")} {item.product.translations.data.name}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            type="submit"
            className="bg-red-600 text-white hover:bg-red-600/70"
            onClick={() => handleDeleteFromCart(item.product._id)}
            disabled={isDeleteingProductFromCart} // Disable button while deleting
          >
            {t("cH44jtWKXtfVfaS0B6a85")}
          </Button>
        </DialogFooter>
      </DialogContent>
      <DialogTrigger>
        {/* delete btn */}
        <div className="w-fit">
          <div className="flex items-center gap-2 rounded-md border-[0.5px] border-primary-foreground/60 px-2 py-1 text-sm text-primary-foreground/60 transition-colors hover:border-red-600/70 hover:text-red-600/70 dark:border-white/70 dark:text-white/70 dark:hover:border-red-600/70 dark:hover:text-red-600/70">
            <RiDeleteBin6Line />
            <span>{t("aI_K7fOdvddq4B_2iocmy")}</span>
          </div>
        </div>
      </DialogTrigger>
    </Dialog>
  );
}
