"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import successfullyOrder from "@/../public/assets/successfully.png";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Link, useRouter } from "@/navigarion";
export default function SuccefullyOrder() {
  const t = useTranslations();

  const router = useRouter();

  useEffect(() => {
    const updateHistory = (curr: string) => {
      window.history.pushState({ path: curr }, "", curr);
    };

    updateHistory("#success");

    const handlePopState = () => {
      router.replace("/");
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [router]);

  return (
    <div className="mt-8 flex flex-col items-center justify-center gap-3">
      <Image src={successfullyOrder} width={250} height={250} alt="ecommerce" />
      <p className="text-xl font-bold text-primary-foreground dark:text-white/80">
        {t("CNlBca7DecJE6gcQ1LArC")}
      </p>
      <p className="text-lg font-semibold italic text-primary-foreground/60 dark:text-muted-foreground">
        {t("PcAR76KKf_-RPWgxbdrOr")}
      </p>

      <Link href="/orders" className="mt-5">
        <Button className="text-lg uppercase text-white">
          {t("y79ohefeVDnKx9ZMEZ9ac")}
        </Button>
      </Link>
    </div>
  );
}
