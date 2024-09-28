"use client";
import { useEffect, useState } from "react";

import CartItem from "./CartItem";

type CartListProps = {
  cart: CartData;
};

export default function CartList({ cart }: CartListProps) {
  console.log("cart", cart);

  return (
    <ul>
      {/* Render cart items when cart is available */}
      {cart?.items.map((item) => <CartItem key={item.product._id} {...item} />)}
    </ul>
  );
}
