// "use client";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Skeleton } from "../ui/skeleton";
import { cn } from "@/lib/utils";

export default function MainSliderSkeleton({ locale }: { locale: string }) {
  return (
    <section className="container mb-[1rem] mt-[3rem] block">
      {/* h2 heading */}
      <h2 dir={locale === "en" ? "ltr" : "rtl"} className="mb-5">
        <Skeleton className="h-[2.5rem] w-[15rem] bg-primary-foreground/30" />
      </h2>

      {/* This will show only on medium screens */}
      <div className="md:block lg:hidden">
        <MainSectionForSmallScreenSkeleton locale={locale} />
      </div>

      {/* This will show only on large screens */}
      <div className="hidden lg:block">
        <MainSectionForLargeScreenSkeleton locale={locale} />
      </div>
    </section>
  );
}

export function MainSectionForSmallScreenSkeleton({
  locale,
}: {
  locale: string;
}) {
  const isEn = locale === "en";
  return (
    <ul
      className="grid h-[80vh] grid-cols-6 grid-rows-5 gap-3 xsm:grid-rows-4"
      dir={isEn ? "ltr" : "rtl"}
    >
      {/* Slider ------------------------------------------------------------- */}

      <li className="col-span-6 row-span-2 overflow-hidden rounded-lg">
        <Skeleton className="h-full w-full bg-primary-foreground/30" />
      </li>

      {/* Beverages ------------------------------------------------------------- */}

      <li className="relative col-span-3 row-span-1 flex flex-col items-start overflow-hidden rounded-lg p-2 xsm:col-span-2 xsm:row-span-1">
        <Skeleton className="h-full w-full bg-primary-foreground/30" />
      </li>

      {/* Babies ------------------------------------------------------------- */}

      <li className="relative col-span-3 row-span-1 flex flex-col items-start p-2 xsm:col-span-2 xsm:row-span-1">
        <Skeleton className="h-full w-full bg-primary-foreground/30" />
      </li>

      {/* Personal Care ------------------------------------------------------ */}

      <li className="relative col-span-3 row-span-1 flex flex-col items-start overflow-hidden rounded-lg p-2 xsm:col-span-2 xsm:row-span-1">
        <Skeleton className="h-full w-full bg-primary-foreground/30" />
      </li>

      {/* Electronics ------------------------------------------------------------- */}

      <li
        className={cn(
          isEn ? "" : "flex flex-col",
          "relative col-span-3 row-span-1 items-start p-2 xsm:col-span-2 xsm:row-span-1",
        )}
      >
        <Skeleton className="h-full w-full bg-primary-foreground/30" />
      </li>

      {/* Home & Pet ------------------------------------------------------------- */}

      <li className="relative col-span-3 row-span-1 flex flex-col items-start overflow-hidden p-2 xsm:col-span-2 xsm:row-span-1">
        <Skeleton className="h-full w-full bg-primary-foreground/30" />
      </li>

      {/* Food ------------------------------------------------------------- */}

      <li className="relative col-span-3 row-span-1 flex flex-col items-start p-2 xsm:col-span-2 xsm:row-span-1">
        <Skeleton className="h-full w-full bg-primary-foreground/30" />
      </li>
    </ul>
  );
}

export function MainSectionForLargeScreenSkeleton({
  locale,
}: {
  locale: string | string[];
}) {
  const isEn = locale === "en";
  return (
    <ul
      className="grid h-[80vh] grid-cols-6 grid-rows-3 gap-3"
      dir={isEn ? "ltr" : "rtl"}
    >
      {/* Slider ------------------------------------------------------------- */}

      <li className="col-span-4 row-span-2 overflow-hidden rounded-lg bg-primary-foreground/30">
        <div className="h-[20rem]">
          <div className="">
            <Skeleton className="h-full w-full bg-primary-foreground" />
          </div>
        </div>
      </li>

      {/* Beverages ------------------------------------------------------------- */}

      <li className="relative flex flex-col items-start overflow-hidden rounded-lg">
        <Skeleton className="h-full w-full bg-primary-foreground/30" />
      </li>

      {/* Babies ------------------------------------------------------------- */}

      <li className="before relative flex flex-col items-start before:absolute before:inset-0 before:rounded-lg">
        <Skeleton className="h-full w-full bg-primary-foreground/30" />
      </li>

      {/* Personal Care ------------------------------------------------------ */}

      <li className="relative col-span-2 flex flex-col items-start overflow-hidden rounded-lg">
        <Skeleton className="h-full w-full bg-primary-foreground/30" />
      </li>

      {/* Electronics ------------------------------------------------------------- */}

      <li className="before relative col-span-2 flex flex-col items-start overflow-hidden before:absolute before:inset-0 before:rounded-lg">
        <Skeleton className="h-full w-full bg-primary-foreground/30" />
      </li>

      {/* Home & Pet ------------------------------------------------------------- */}

      <li className="before relative col-span-2 flex flex-col items-start overflow-hidden before:absolute before:inset-0 before:rounded-lg">
        <Skeleton className="h-full w-full bg-primary-foreground/30" />
      </li>

      {/* Food ------------------------------------------------------------- */}

      <li className="before relative col-span-2 flex flex-col items-start before:absolute before:inset-0 before:rounded-lg">
        <Skeleton className="h-full w-full bg-primary-foreground/30" />
      </li>
    </ul>
  );
}
