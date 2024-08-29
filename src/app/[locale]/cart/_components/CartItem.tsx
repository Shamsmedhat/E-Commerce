"use client";
import { Input } from "@/components/ui/input";
import { useAppSelector } from "@/lib/hooks/reduxHooks";
import { cn } from "@/lib/utils";
import { categoryBorderColor } from "@/lib/utils/helpers";
import { PRODUCT_DATA } from "@/models/products";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function CartItem({
  subCategory,
  name,
  price,
  images,
  category,
}: PRODUCT_DATA) {
  const { rowStyle, columnStyle } = useAppSelector((state) => state.cart);
  const [qty, setQty] = useState(0);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Ensure non-negative numbers
    const value = Math.max(0, Number(e.target.value));
    setQty(value);
  };
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
        <div className="flex h-fit w-fit flex-row border-[1px]">
          <button
            onClick={() => setQty((qty) => qty + 1)}
            className="px-2 hover:bg-green-200 hover:transition-colors hover:duration-200"
          >
            <Plus size={15} />
          </button>
          <div>
            <Input
              type="number"
              className="no-spinner w-[3.5rem] rounded-none border-y-0 p-0 text-center focus-visible:ring-primary"
              value={qty}
              onChange={handleChange}
            />
          </div>
          <button
            onClick={() => setQty((qty) => Math.max(0, qty - 1))}
            className="px-2 hover:bg-red-200 hover:transition-colors hover:duration-200"
          >
            <Minus size={15} />
          </button>
        </div>
        {/* product price */}
        <div>
          <span>{price}</span>
        </div>
      </li>
    </>
  );
}
