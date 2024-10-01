"use client";
import { useEffect, useState } from "react";

import CartItem from "./CartItem";
import { useAppSelector } from "@/hooks/reduxHooks";
import { cn } from "@/lib/utils";

type CartListProps = {
  cart: CartData;
};

export default function CartList({ cart }: CartListProps) {
  const { rowStyle, columnStyle } = useAppSelector((state) => state.cart);

  return (
    <ul className={cn(columnStyle && "grid grid-cols-3 gap-8")}>
      {/* Render cart items when cart is available */}
      {cart?.items.map((item) => (
        <CartItem
          total-price={cart.totalPrice}
          key={item.product._id}
          item={item}
        />
      ))}
    </ul>
  );
}
