"use client";

import { useTranslations } from "next-intl";
import { LuShoppingCart } from "react-icons/lu";

export default function AddToCart() {
  const t = useTranslations();

  return (
    <div className="flex w-auto cursor-pointer justify-center">
      <div className="flex items-center justify-start gap-3 rounded-full bg-primary py-1 pe-4 ps-1 align-middle text-xs text-white transition-colors hover:bg-primary/80 lg:text-sm">
        <span className="rounded-full bg-white p-2">
          <LuShoppingCart className="text-primary-foreground" size={15} />
        </span>
        <span>{t("-k0yk9GUHIDLWvq7B4mRs")}</span>
      </div>
    </div>
  );
}
