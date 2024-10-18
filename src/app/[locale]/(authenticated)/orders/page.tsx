import React from "react";
import OrdersTable from "./components/orders-table";
import Heading from "@/components/common/Heading";
import { getLocale, getTranslations } from "next-intl/server";

export default async function Page() {
  const t = await getTranslations();
  const locale = await getLocale();
  const isEn = locale === "en";

  return (
    <section className="container" dir={isEn ? "ltr" : "rtl"}>
      <Heading>{t("ULz9dLFPeav6LCqCrW-05")}</Heading>

      <div className="my-10 rounded-lg border border-primary-foreground/30 shadow-sm">
        <OrdersTable />
      </div>
    </section>
  );
}
