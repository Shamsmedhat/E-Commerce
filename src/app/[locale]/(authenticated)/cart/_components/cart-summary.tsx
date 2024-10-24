"use client";
import MyButton from "@/components/common/MyButton";
import { LuInfo } from "react-icons/lu";
import { useTranslations } from "next-intl";
import React from "react";
import { Link } from "@/navigarion";
import { cn } from "@/lib/utils";
type CartListProps = {
  cart: CartData;
  className?: string;
};
export default function CartSummary({ cart, className }: CartListProps) {
  const t = useTranslations();
  return (
    <>
      <div className={cn(className, "px-4")}>
        {/* title */}
        <h3 className="border-b-2 border-primary-foreground/10 py-3 text-xl font-semibold uppercase">
          {t("ubNic2h-DPEijW_LliPJA")}
        </h3>
        {/* details */}
        <div>
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
            <div className="flex w-full justify-between py-3 capitalize">
              <span>
                {cart.cart.totalPrice} {t("fU01whrYbLGxy6qtBGMEo")}
              </span>
              <span className="text-primary-foreground/80">
                {t("qFZLbWLkdt6bLleI_7dJb")}
              </span>
            </div>
            {/* shipping info */}
            <div className="flex pb-4 capitalize text-primary-foreground/80">
              <span className="me-2 text-sm">{t("iJr6n_6R_oPs2Fl2S_yoR")}</span>
              <LuInfo className="text-primary" size={20} />
            </div>
          </div>
        </div>
      </div>
      <Link
        href="/checkout"
        className="w-full rounded-b-lg bg-primary py-2 text-center text-lg font-bold uppercase text-white"
      >
        {t("uGXddxwBlKfC6WsNEeTG4")}
      </Link>
    </>
  );
}
