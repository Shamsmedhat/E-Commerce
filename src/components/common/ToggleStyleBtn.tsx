"use client";
import { toggleToRow, toggleToColumn } from "@/lib/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/reduxHooks";
import { cn } from "@/lib/utils";
import { Grip, Menu } from "lucide-react";
export default function ToggleStyleBtn() {
  const dispatch = useAppDispatch();
  const { rowStyle, columnStyle } = useAppSelector((state) => state.cart);
  return (
    <div className="flex w-auto items-center justify-between rounded-full bg-white px-1 py-1">
      <div
        className={cn(
          rowStyle && `bg-primary text-white`,
          "me-1 flex items-center rounded-full p-1 transition-colors duration-500 ease-in-out",
        )}
      >
        <button onClick={() => dispatch(toggleToRow(true))}>
          <Menu size={20} />
        </button>
      </div>
      <div
        className={cn(
          columnStyle && `bg-primary text-white`,
          "me-1 flex items-center rounded-full p-1 transition-colors duration-500 ease-in-out",
        )}
      >
        <button onClick={() => dispatch(toggleToColumn(true))}>
          <Grip size={20} />
        </button>
      </div>
    </div>
  );
}
