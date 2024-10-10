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
      <div className="flex-grow">
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
        <div className="">
          <SubmitBtn />
        </div>
      </div>
      {/* Cart summary */}
      <div className="ms-[3rem] flex h-fit min-w-[20%] flex-col items-center rounded-lg bg-white pt-4 shadow-sm">
        <CartSummary cart={cart} />
      </div>
    </>
  );
}
