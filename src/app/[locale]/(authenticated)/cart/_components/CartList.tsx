"use client";
import { useEffect, useState } from "react";

import CartItem from "./CartItem";

type CartListProps = {
  cart: CartData;
};

export default function CartList({ cart }: CartListProps) {
  return (
    <ul className="flex">
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
