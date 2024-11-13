"use client";

import Heading from "@/components/common/Heading";
import ToggleStyleBtn from "@/components/common/ToggleStyleBtn";
import React from "react";
import CartList from "./cart-list";
import SubmitBtn from "./submit-btn";
import CartSummary from "./cart-summary";
import { useTranslations } from "next-intl";

type CartContentProps = {
  cart: CartData;
};

export default function CartContent({ cart }: CartContentProps) {
  const t = useTranslations();

  return (
    <>
      {/* Cart content */}
      <div className="mb-6 flex-grow">
        {/* Heading */}
        <div className="flex items-center justify-between">
          <Heading>{t("_Kg79lEkLCt2SxOaeQJZ2")}</Heading>
          <ToggleStyleBtn />
        </div>
        {/* List of Cart items */}
        <div>
          <CartList cart={cart} />
        </div>
        {/* checkout submit btn */}
        <div>
          <SubmitBtn />
        </div>
      </div>
      {/* Cart summary */}
      <div className="flex h-fit min-w-full flex-col items-center rounded-lg bg-white pt-4 shadow-sm dark:bg-background lg:ms-[2rem] lg:min-w-[20%]">
        <CartSummary cart={cart} />
      </div>
    </>
  );
}
