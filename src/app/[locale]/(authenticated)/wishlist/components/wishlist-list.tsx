"use client";

import { useAppSelector } from "@/hooks/reduxHooks";
import { cn } from "@/lib/utils";
import WishlistItem from "./wishlist-item";

type WishlistListProps = {
  wishlist: WishlistData;
};

export default function WishlistList({ wishlist }: WishlistListProps) {
  const { rowStyle, columnStyle } = useAppSelector((state) => state.cart);

  return (
    <ul className={cn(columnStyle && "grid grid-cols-3 gap-8")}>
      {/* Render cart items when cart is available */}
      {wishlist?.wishlist.map((item) => (
        <WishlistItem key={item._id} item={item} />
      ))}
    </ul>
  );
}
