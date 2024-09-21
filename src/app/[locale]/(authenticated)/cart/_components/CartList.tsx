"use client";

import { cn } from "@/lib/utils";
import CartItem from "./CartItem";
import { PRODUCT } from "@/models/products";
import { useAppSelector } from "@/hooks/reduxHooks";

export default function CartList({ data }: { data: PRODUCT[] }) {
  const { columnStyle } = useAppSelector((item) => item.cart);
  return (
    <ul className={cn(columnStyle && "flex flex-wrap justify-between")}>
      {data
        .map((p) => (
          <CartItem
            subCategory={p.data.subCategory}
            name={p.data.name}
            price={p.data.price}
            images={p.data.images}
            category={p.data.category}
            key={p.id}
          />
        ))
        .slice(0, 7)}
    </ul>
  );
}
