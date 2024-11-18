"use client";

import CartItem from "./cart-item";
import { useAppSelector } from "@/hooks/reduxHooks";
import { cn } from "@/lib/utils";

type CartListProps = {
  cart: CartData;
};

export default function CartList({ cart }: CartListProps) {
  const { rowStyle, columnStyle } = useAppSelector((state) => state.cart);
  return (
    <ul
      className={cn(
        columnStyle &&
          "grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:gap-8",
      )}
    >
      {/* Render cart items when cart is available */}
      {cart?.cart.items.map((item) => (
        <CartItem
          total-price={cart.cart.totalPrice}
          key={item.product._id}
          item={item}
        />
      ))}
    </ul>
  );
}
