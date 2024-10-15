"use client";
import MyButton from "@/components/common/MyButton";
import { LuInfo } from "react-icons/lu";
import { useLocale, useTranslations } from "next-intl";
import React from "react";
import { Link } from "@/navigarion";
import { cn } from "@/lib/utils";
import { handleEnText } from "@/lib/utils/helpers";
type CartListProps = {
  cart: CartData;
  className: string;
};
export default function CheckoutCartSummary(cart: CartListProps) {
  const t = useTranslations();
  const locale = useLocale();
  return (
    <div className={cn(cart.className, "rounded-lg")}>
      {/* title */}
      <h3
        className={cn(
          handleEnText(locale),
          "border-b-2 border-primary-foreground/10 px-4 py-3 text-xl font-semibold uppercase",
        )}
      >
        {t("ubNic2h-DPEijW_LliPJA")}
      </h3>
      {/* details */}
      <div className="px-4">
        {/* total items &  subtotal*/}
        <div className="flex justify-between border-b-2 border-primary-foreground/10 py-5 capitalize">
          {/* total amount & total price */}
          <div className="flex flex-col space-y-2 text-start">
            <span>
              {cart.cart.items.length} {t("sIM23trGHtwnWeOwsUstH")}
            </span>
            <span>
              {cart.cart.totalPrice} {t("fU01whrYbLGxy6qtBGMEo")}
            </span>
          </div>
          {/* total & subtotal */}
          <div className="flex flex-col space-y-2 text-end">
            <span className="text-primary-foreground/80">
              {t("xboHPEA9mmA4V1MQVedoM")}
            </span>
            <span className="text-primary-foreground/80">
              {t("V7cnNa_QK7BF0Poh6mjxY")}
            </span>
          </div>

          {/* total */}
        </div>
        {/* total & shipping info */}
        <div className="flex flex-col items-center justify-between">
          {/* total */}
          <div className="flex w-full justify-between py-3 font-bold capitalize text-primary">
            <span>
              {cart.cart.totalPrice} {t("fU01whrYbLGxy6qtBGMEo")}
            </span>
            <span className="font-bold text-primary">
              {t("qFZLbWLkdt6bLleI_7dJb")}
            </span>
          </div>
        </div>
      </div>
      <Link
        href=""
        onClick={(e) => console.log(e)}
        className="inline-block w-full rounded-b-lg bg-primary py-2 text-center text-lg font-bold uppercase text-white"
      >
        {t("QEgjD8lvc-b6ZhqVzBqwN")}
      </Link>
    </div>
  );
}
