import MainSliderSkeleton from "@/components/skeletons/main-slider-skeleton";
import { getLocale } from "next-intl/server";
import React from "react";

export async function Page() {
  const locale = await getLocale();
  return (
    <>
      <MainSliderSkeleton locale={locale} />
    </>
  );
}

export default Page;
