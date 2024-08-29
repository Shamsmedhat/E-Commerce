"use client";
import MyButton from "@/components/common/MyButton";
import { Info } from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";

export default function CartSummary() {
  const t = useTranslations();
  return (
    <>
      <div className="px-4">
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
              <span>7 {t("sIM23trGHtwnWeOwsUstH")}</span>
              <span>36,560 {t("fU01whrYbLGxy6qtBGMEo")}</span>
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
              <span>36,560 {t("fU01whrYbLGxy6qtBGMEo")}</span>
              <span className="text-primary-foreground/80">
                {t("qFZLbWLkdt6bLleI_7dJb")}
              </span>
            </div>
            {/* shipping info */}
            <div className="flex pb-4 capitalize text-primary-foreground/80">
              <span className="me-2 text-sm">{t("iJr6n_6R_oPs2Fl2S_yoR")}</span>
              <Info className="text-primary" size={20} />
            </div>
          </div>
        </div>
      </div>
      <MyButton
        onClick={(e) => console.log(e)}
        className="w-full rounded-t-none text-lg font-bold uppercase text-white"
      >
        {t("uGXddxwBlKfC6WsNEeTG4")}
      </MyButton>
    </>
  );
}
