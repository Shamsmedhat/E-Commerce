"use client";
import {
  useAddToWishlist,
  useDeleteFromWishlist,
  useWishlist,
} from "@/lib/utils/data/wishlist-data";
import React, { useState, useTransition } from "react";
import { LuHeart } from "react-icons/lu";
import { FaHeart } from "react-icons/fa";
import { ImSpinner3 } from "react-icons/im";

type WishlistButtonProps = {
  productId: string;
};

export default function WishlistButton({ productId }: WishlistButtonProps) {
  const { wishlist, isFetching, isPending } = useWishlist();
  const { addToWishlist, isAddingToWishlist } = useAddToWishlist();
  const { removeFromWishlist, isRemovingFromWishlist } =
    useDeleteFromWishlist();

  const [isPendingUpdate, startTransition] = useTransition();

  // Check if the product is on the wishlist
  const productsIdExistOnWishlist = wishlist?.wishlist.map((p) => p._id);
  const isProductOnWishlist = productsIdExistOnWishlist?.includes(productId);

  function handleAddToWishlist() {
    startTransition(() => {
      addToWishlist(productId);
    });
  }

  function handleRemoveFromWishlist() {
    startTransition(() => {
      removeFromWishlist(productId);
    });
  }

  return (
    <div className="flex gap-2">
      <button
        onClick={
          isProductOnWishlist ? handleRemoveFromWishlist : handleAddToWishlist
        }
      >
        <div className="text-pr rounded-full bg-primary-foreground/20 p-[10px]">
          {isAddingToWishlist || isRemovingFromWishlist || isPendingUpdate ? (
            <ImSpinner3 className="animate-spin" size={16} />
          ) : isProductOnWishlist ? (
            <FaHeart strokeWidth={1} color="#febf31" />
          ) : (
            <LuHeart strokeWidth={1} />
          )}
        </div>
      </button>
    </div>
  );
}
