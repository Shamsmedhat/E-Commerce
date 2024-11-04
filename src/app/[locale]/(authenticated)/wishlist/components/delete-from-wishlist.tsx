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

type DeleteFromWishlistProps = {
  item: WishlistItem;
  isEn: boolean;
};

export default function DeleteFromWishlist({
  item,
  isEn,
}: DeleteFromWishlistProps) {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations();
  const {
    isRemovingFromWishlist,
    isRemovingFromWishlistError,
    isRemovingFromWishlistSuccess,
    removeFromWishlist,
  } = useDeleteFromWishlist();

  function handleDeleteFromWishlist(productId: string) {
    // Close the dialog immediately
    setIsOpen(false);

    removeFromWishlist(productId);
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
          <div className="flex items-center gap-2 rounded-md border-[0.5px] border-primary-foreground/60 px-2 py-1 text-sm text-primary-foreground/60 transition-colors hover:border-red-600/70 hover:text-red-600/70">
            <RiDeleteBin6Line />
            <span>{t("aI_K7fOdvddq4B_2iocmy")}</span>
          </div>
        </div>
      </DialogTrigger>
    </Dialog>
  );
}
