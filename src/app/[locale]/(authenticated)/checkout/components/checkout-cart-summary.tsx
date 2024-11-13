"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { handleEnText } from "@/lib/utils/helpers";

// Translation
import { useLocale, useTranslations } from "next-intl";

// Redux
import { useAppSelector } from "@/hooks/reduxHooks";

// Types
type CartListProps = {
  cart: CartData;
  className: string;
};

export default function CheckoutCartSummary({
  cart,
  className,
}: CartListProps) {
  // Translation
  const t = useTranslations();
  const locale = useLocale();
  const { shippingFees } = useAppSelector((state) => state.shippingFees);

  return (
    <div className={cn(className, "rounded-lg dark:bg-black/30")}>
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
            <span
              className={cn(shippingFees ? "text-red-500" : "text-green-500")}
            >
              {shippingFees ? `+ ${shippingFees}` : shippingFees}{" "}
              {t("fU01whrYbLGxy6qtBGMEo")}
            </span>
          </div>

          {/* total & subtotal */}
          <div className="flex flex-col space-y-2 text-end text-primary-foreground/80 dark:text-muted-foreground">
            <span>{t("xboHPEA9mmA4V1MQVedoM")}</span>
            <span>{t("V7cnNa_QK7BF0Poh6mjxY")}</span>
            <span>{t("FqoMK_5G5QKc7UcLIlqH-")}</span>
          </div>
        </div>

        {/* total & shipping info */}
        <div className="flex flex-col items-center justify-between">
          {/* total */}
          <div className="flex w-full justify-between py-3 font-bold capitalize text-primary">
            <span>
              {cart.cart.totalPrice + shippingFees} {t("fU01whrYbLGxy6qtBGMEo")}
            </span>
            <span className="font-bold text-primary">
              {t("qFZLbWLkdt6bLleI_7dJb")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
