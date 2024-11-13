"use client";

import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import React from "react";
import { FaRegAddressCard } from "react-icons/fa";
import { MdOutlineDoneOutline, MdOutlinePayment } from "react-icons/md";

export default function CheckoutProgressUi({ step }: { step: number }) {
  const t = useTranslations();
  return (
    <nav className="border-b border-primary">
      <ul className="flex items-center justify-center gap-0 text-xl text-primary-foreground/80 sm:gap-4">
        <li className="flex items-center justify-center gap-2 py-5">
          <span className="sr-only text-sm dark:text-white xsm:not-sr-only xmd:text-base">
            {t("MsTKb7d1eF3xjrrCqH58m")}
          </span>
          <span
            className={cn(
              step === 3
                ? "border-primary bg-primary dark:border-primary dark:bg-primary"
                : "border-primary-foreground/20 bg-transparent dark:border-white/70",
              "rounded-full border-2 p-2",
            )}
          >
            <MdOutlineDoneOutline
              className={cn(
                step === 3 && "text-white",
                "h-4 w-4 dark:text-white xmd:h-5 xmd:w-5",
              )}
            />
          </span>
        </li>

        <li className="flex items-center justify-center gap-2 py-5">
          <span
            className={cn(
              step === 3
                ? "bg-primary dark:bg-primary"
                : "bg-primary-foreground/20 dark:bg-white/30",
              "mx-4 h-2 w-11 rounded-md xsm:w-16 sm:w-20 md:w-28 xmd:w-36",
            )}
          ></span>
          <span className="sr-only text-sm dark:text-white/80 xsm:not-sr-only xmd:text-base">
            {t("-aN40eBi4jXBqrH8rJM27")}
          </span>
          <span
            className={cn(
              step === 1
                ? "border-primary-foreground/20 bg-transparent dark:border-white/70"
                : step === 2 || step === 3
                  ? "border-primary bg-primary dark:border-primary dark:bg-primary"
                  : "",
              "rounded-full border-2 p-2",
            )}
          >
            <MdOutlinePayment
              className={cn(
                (step === 2 || step === 3) &&
                  "text-white dark:bg-primary dark:text-white",
                step === 1 && "dark:text-white",
                "h-4 w-4 xmd:h-5 xmd:w-5",
              )}
            />
          </span>
        </li>

        <li className="flex items-center justify-center gap-2 py-5">
          <span
            className={cn(
              step === 1
                ? "bg-primary-foreground/20 dark:bg-white/30"
                : step === 2 || step === 3
                  ? "bg-primary dark:bg-primary"
                  : "bg-primary-foreground/20",
              "mx-4 h-2 w-11 rounded-md xsm:w-16 sm:w-20 md:w-28 xmd:w-36",
            )}
          ></span>
          <span className="sr-only text-sm dark:text-white/80 xsm:not-sr-only xmd:text-base">
            {t("X73uyJtHXlL_VOZZYWFyl")}
          </span>
          <span className="rounded-full border-2 border-primary bg-primary p-2">
            <FaRegAddressCard
              color="#fff"
              className="h-4 w-4 xmd:h-5 xmd:w-5"
            />
          </span>
        </li>
      </ul>
    </nav>
  );
}
