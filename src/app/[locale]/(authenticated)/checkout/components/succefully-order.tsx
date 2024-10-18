"use client";

import Image from "next/image";
import React from "react";
import successfullyOrder from "@/../public/assets/successfully.png";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Link } from "@/navigarion";
export default function SuccefullyOrder() {
  const t = useTranslations();
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <Image src={successfullyOrder} width={250} height={250} alt="ecommerce" />
      <p className="text-xl font-bold text-primary-foreground">
        {t("CNlBca7DecJE6gcQ1LArC")}
      </p>
      <p className="text-lg font-semibold italic text-primary-foreground/60">
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
