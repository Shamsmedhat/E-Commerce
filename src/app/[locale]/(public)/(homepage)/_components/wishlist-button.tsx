"use client";
import {
  useAddToWishlist,
  useDeleteFromWishlist,
  useWishlist,
} from "@/lib/utils/data/wishlist-data";
import React, { useEffect, useState, useTransition } from "react";
import { LuHeart } from "react-icons/lu";
import { FaHeart } from "react-icons/fa";
import { ImSpinner3 } from "react-icons/im";
import { useSession } from "next-auth/react";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { updateLocalStorageWishlist } from "@/lib/utils/helpers";
import { addToGuestWishlist } from "@/lib/features/wishlist/guest-wishlist-slice";
import { toast } from "react-toastify";

type WishlistButtonProps = {
  productId: string;
};

export default function WishlistButton({ productId }: WishlistButtonProps) {
  const { data: session, status } = useSession();
  const { wishlist, isFetching, isPending } = useWishlist(session);
  const { addToWishlist, isAddingToWishlist } = useAddToWishlist();
  const productsIdExistOnWishlist = wishlist?.wishlist.map((p) => p._id);
  const [isProductAddedWishlist, setIsProductAddedWishlist] = useState(
    productsIdExistOnWishlist?.includes(productId),
  );
  const { removeFromWishlist, isRemovingFromWishlist } =
    useDeleteFromWishlist();
  const guestWishlist = useAppSelector((state) => state.guestWishlist);
  const dispatch = useAppDispatch();

  const isProductExistsInUserWishlist = wishlist?.wishlist
    .map((i) => i._id)
    .includes(productId);
  const [isPendingUpdate, startTransition] = useTransition();

  // Check if the product is on the wishlist
  const allProductsWishlistId = guestWishlist?.map((i) => i.product);
  const isProductInGuestWishlist = allProductsWishlistId?.includes(productId);

  useEffect(() => {
    if (!session) {
      const storedWishlist = JSON.parse(
        localStorage.getItem("guest-cart") || "[]",
      );
      const isProductInWishlist = storedWishlist.some(
        (item: { product: string }) => item.product === productId,
      );
      setIsProductAddedWishlist(isProductInWishlist);
    } else {
      setIsProductAddedWishlist(isProductInGuestWishlist ?? false);
    }
  }, [productId, session, isProductInGuestWishlist]);

  function handleAddToWishlist() {
    if (session) {
      if (isProductExistsInUserWishlist) {
        toast.info("This product is already exists in wishlist.");
      } else {
        startTransition(() => {
          addToWishlist(productId);
          setIsProductAddedWishlist(true);
        });
      }
    } else {
      // Update localStorage
      updateLocalStorageWishlist(productId);

      // Update Redux state for guest cart
      dispatch(addToGuestWishlist({ product: productId }));

      setIsProductAddedWishlist(true);
      window.dispatchEvent(new Event("storage"));
    }
  }

  return (
    <div className="flex gap-2">
      <button onClick={() => handleAddToWishlist()}>
        <div className="text-pr rounded-full bg-primary-foreground/20 p-[10px] dark:bg-white">
          {isAddingToWishlist || isRemovingFromWishlist || isPendingUpdate ? (
            <ImSpinner3
              className="animate-spin dark:text-background"
              size={16}
            />
          ) : isProductAddedWishlist ||
            isProductInGuestWishlist ||
            isProductExistsInUserWishlist ? (
            <FaHeart strokeWidth={1} color="#febf31" />
          ) : (
            <LuHeart strokeWidth={1} className="dark:text-background" />
          )}
        </div>
      </button>
    </div>
  );
}
