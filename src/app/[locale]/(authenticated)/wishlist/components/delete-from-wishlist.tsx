"use client";

import React, { useState, useTransition } from "react";
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
import { useTranslations } from "next-intl";
import { useDeleteFromWishlist } from "@/lib/utils/data/wishlist-data";
import { useSession } from "next-auth/react";
import { useAppDispatch } from "@/hooks/reduxHooks";
import { removeFromGuestWishlist } from "@/lib/features/wishlist/guest-wishlist-slice";
import { useRouter } from "@/navigarion";
import { toast } from "react-toastify";

type DeleteFromWishlistProps = {
  item: WishlistItem;
  isEn: boolean;
};

export default function DeleteFromWishlist({
  item,
  isEn,
}: DeleteFromWishlistProps) {
  const t = useTranslations();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const {
    isRemovingFromWishlist,
    isRemovingFromWishlistError,
    isRemovingFromWishlistSuccess,
    removeFromWishlist,
  } = useDeleteFromWishlist();
  const { data: session, status } = useSession();
  const dispatch = useAppDispatch();
  const removeFromLocalStorage = (productId: string) => {
    const wishlist = localStorage.getItem("guest-wishlist");
    if (wishlist) {
      const stoardWishlist = JSON.parse(wishlist);
      const updatedWishlist = stoardWishlist.filter(
        (wishlistItem: any) => wishlistItem.product !== productId,
      );
      localStorage.setItem("guest-wishlist", JSON.stringify(updatedWishlist));
    }
  };
  function handleDeleteFromWishlist(productId: string) {
    // Close the dialog immediately
    setIsOpen(false);

    if (session) {
      // User is logged in, delete from server-side cart
      removeFromWishlist(productId);
      toast.success(
        "Product has been removed from your wishlist successfully.",
      );
    } else {
      // User is not logged in, delete from localStorage
      removeFromLocalStorage(productId);
      dispatch(removeFromGuestWishlist({ product: productId }));
      router.refresh();
      window.dispatchEvent(new Event("storage"));
      toast.success(
        "Product has been removed from your wishlist successfully.",
      );
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t("vk-o-d_L7uJUxxTWzXX3P")}</DialogTitle>
          <DialogDescription>
            {t("SBOouAPG2Oyvyg38ZITbW")} {item.translations.data.name}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            type="submit"
            className="bg-red-600 text-white hover:bg-red-600/70"
            onClick={() => handleDeleteFromWishlist(item._id)}
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
