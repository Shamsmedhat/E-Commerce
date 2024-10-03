"use client";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Skeleton } from "../ui/skeleton";
import { useParams } from "next/navigation";

export default function MainSliderSkeleton() {
  const params = useParams();

  return (
    <section className="container mb-[1rem] mt-[3rem] hidden md:block">
      {/* h2 heading */}
      <h2 dir={params.locale === "en" ? "ltr" : "rtl"} className="mb-5">
        <Skeleton className="h-[2.5rem] w-[15rem] bg-primary-foreground/30" />
      </h2>

      {/* This will show only on medium screens */}
      <div className="md:block lg:hidden">
        <MainSectionForMediumScreenSkeleton />
      </div>

      {/* This will show only on large screens */}
      <div className="hidden lg:block">
        <MainSectionForLargeScreenSkeleton locale={params.locale} />
      </div>
    </section>
  );
}

export async function MainSectionForMediumScreenSkeleton() {
  return (
    <ul className="mt-8 grid grid-cols-6 grid-rows-1 gap-3">
      <li className="flex h-[9rem] flex-col items-end overflow-hidden rounded-lg">
        <Skeleton className="h-full w-full bg-primary-foreground/30" />
      </li>
      <li className="flex flex-col items-end overflow-hidden rounded-lg">
        <Skeleton className="h-full w-full bg-primary-foreground/30" />
      </li>
      <li className="flex flex-col items-end overflow-hidden rounded-lg">
        <Skeleton className="h-full w-full bg-primary-foreground/30" />
      </li>
      <li className="flex flex-col items-end overflow-hidden rounded-lg">
        <Skeleton className="h-full w-full bg-primary-foreground/30" />
      </li>
      <li className="flex flex-col items-end overflow-hidden rounded-lg">
        <Skeleton className="h-full w-full bg-primary-foreground/30" />
      </li>
      <li className="flex flex-col items-end overflow-hidden rounded-lg">
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
