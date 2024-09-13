"use client";
import QuantityBtn from "@/components/common/QuantityBtn";
import { useAppSelector } from "@/lib/hooks/reduxHooks";
import { cn } from "@/lib/utils";
import { categoryBorderColor } from "@/lib/utils/helpers";
import { PRODUCT_DATA } from "@/models/products";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function CartItem({
  subCategory,
  name,
  price,
  images,
  category,
}: PRODUCT_DATA) {
  const { rowStyle, columnStyle } = useAppSelector((state) => state.cart);

  return (
    <>
      <li
        className={cn(
          columnStyle && "box-border flex flex-[0_1_30%] flex-col border-b-8",
          rowStyle && "flex flex-row border-l-8",
          `${categoryBorderColor(category!)} `,
          "my-5 rounded-md bg-white p-3 shadow-sm",
        )}
      >
        {/* Product image */}
        <div>{/* <Image src="" alt="" />  */}</div>
        {/* product details */}
        <div>
          <span>{subCategory}</span>
          <h2>{name}</h2>
          <div>
            <button className="" onClick={() => {}}>
              test
            </button>
            <button className="" onClick={() => {}}>
              test
            </button>
          </div>
        </div>
        {/* product quantity */}
        <QuantityBtn />
        {/* product price */}
        <div>
          <span>{price}</span>
        </div>
      </li>
    </>
  );
}
