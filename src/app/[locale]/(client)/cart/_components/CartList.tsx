"use client";

import { cn } from "@/lib/utils";
import CartItem from "./CartItem";
import { useAppSelector } from "@/lib/hooks/reduxHooks";
import { PRODUCT } from "@/models/products";

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
