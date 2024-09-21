"use client";
import Heading from "@/components/common/Heading";
import TabNav from "./TabNav";
import { useTranslations } from "next-intl";

export default function DealsOfTheDay() {
  const t = useTranslations();
  return (
    <section className="container mb-7">
      {/* h2 heading */}
      <Heading>{t("EMm4-Oay1VcXIpDa1EQ_Y")}</Heading>
      <TabNav />
    </section>
  );
}
