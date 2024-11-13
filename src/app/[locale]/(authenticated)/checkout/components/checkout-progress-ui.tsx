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
      <ul className="flex items-center justify-center gap-4 text-xl text-primary-foreground/80">
        <li className="flex items-center justify-center gap-2 py-5">
          <span className="dark:text-white">{t("MsTKb7d1eF3xjrrCqH58m")}</span>
          <span
            className={cn(
              step === 3
                ? "border-primary bg-primary dark:border-primary dark:bg-primary"
                : "border-primary-foreground/20 bg-transparent dark:border-white/70",
              "rounded-full border-2 p-2",
            )}
          >
            <MdOutlineDoneOutline
              className={cn(step === 3 && "text-white", "dark:text-white")}
            />
          </span>
        </li>

        <li className="flex items-center justify-center gap-2 py-5">
          <span
            className={cn(
              step === 3
                ? "bg-primary dark:bg-primary"
                : "bg-primary-foreground/20 dark:bg-white/30",
              "mx-4 h-2 w-36 rounded-md",
            )}
          ></span>
          <span className="dark:text-white/80">
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
              "mx-4 h-2 w-36 rounded-md",
            )}
          ></span>
          <span className="dark:text-white/80">
            {t("X73uyJtHXlL_VOZZYWFyl")}
          </span>
          <span className="rounded-full border-2 border-primary bg-primary p-2">
            <FaRegAddressCard color="#fff" />
          </span>
        </li>
      </ul>
    </nav>
  );
}
