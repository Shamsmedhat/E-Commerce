"use client";

import Heading from "@/components/common/Heading";
import ToggleStyleBtn from "@/components/common/ToggleStyleBtn";
import { Link } from "@/navigarion";
import { useLocale, useTranslations } from "next-intl";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import emptyOrdersImg from "@/../public/assets/emptyOrdersImg.svg";
import Image from "next/image";
export default function EmptyOrders() {
  const t = useTranslations();
  const locale = useLocale();
  const isEn = locale === "en";
  return (
    <section
      className="flex flex-col shadow-md md:flex-row"
      dir={isEn ? "ltr" : "rtl"}
    >
      {/* Cart content */}
      <div className="flex-grow">
        {/* cart msg */}
        <div className="rounded-lg bg-white p-6">
          {/* msg to user */}
          <p className="text-3xl text-primary-foreground">
            {t("aIfjHFZ4Eg8mZFaHELJ1H")}
          </p>

          {/* navigate to home */}
          <div className="my-4 flex items-center justify-center text-2xl text-primary underline">
            <Link href={"/"}>{t("9G6dgsrT99qPLy5YgOMf5")}</Link>
            <GoArrowUpRight size={18} />
          </div>

          {/* page image */}
          <div className="flex w-full items-center justify-center">
            <Image
              src={emptyOrdersImg}
              alt="E commerce"
              className="select-none"
              height={400}
              width={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
