"use client";

import { Button } from "@/components/ui/button";
import { useDeleteProductFromCart } from "@/lib/utils/data/cart-data";
import { useDeleteReview } from "@/lib/utils/data/reviews-data";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

type RemoveReviewProps = {
  reviewId: string;
  productId: string;
};

export default function RemoveReview({
  reviewId,
  productId,
}: RemoveReviewProps) {
  const t = useTranslations();
  const [isOpen, setIsOpen] = useState(false);
  const { deleteReview, isDeletingReview } = useDeleteReview();

  function handleDeleteReview({
    reviewId,
    productId,
  }: {
    reviewId: string;
    productId: string;
  }) {
    // Close the dialog immediately
    setIsOpen(false);

    deleteReview({ reviewId, productId });
  }
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t("4tFmkrCD1L9aQnQ6Qp5DA")}</DialogTitle>
          <DialogDescription>{t("-LhHWwqWeVRTa0nQxy7cI")}</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            type="submit"
            className="bg-red-600 text-white hover:bg-red-600/70"
            onClick={() => handleDeleteReview({ reviewId, productId })}
          >
            {t("cH44jtWKXtfVfaS0B6a85")}
          </Button>
        </DialogFooter>
      </DialogContent>
      <DialogTrigger>
        {/* delete btn */}
        <div className="mt-3 w-fit">
          <div className="flex items-center gap-2 rounded-md border-[0.5px] border-primary-foreground/60 px-2 py-1 text-sm text-primary-foreground/60 transition-colors hover:border-red-600/70 hover:text-red-600/70 dark:border-white/80 dark:text-white/80 dark:hover:border-red-600/70 dark:hover:text-red-600/70">
            <RiDeleteBin6Line />
          </div>
        </div>
      </DialogTrigger>
    </Dialog>
  );
}
