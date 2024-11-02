"use client";
import { cn } from "@/lib/utils";

// ui
import { Skeleton } from "../ui/skeleton";

export default function HorizontalProductsSliderSkeleton({
  locale,
}: {
  locale: string;
}) {
  return (
    // product card
    <div
      className={cn(
        locale === "en" ? "items-end" : "items-start",
        "flex h-[360px] cursor-pointer flex-col justify-between gap-2 p-4 align-middle",
      )}
    >
      {/* product image */}
      <div className="relative flex h-[160px] w-full items-center justify-center">
        <Skeleton className="h-full w-full bg-primary-foreground/20" />
      </div>

      {/* product info section */}
      <div
        className={cn(
          locale === "en" ? "items-end" : "items-start text-right",
          "flex h-full w-full flex-col gap-1",
        )}
      >
        {/* product category name */}
        <span className="h-3 w-1/3 text-sm text-primary-foreground/80">
          <Skeleton className="h-full w-full bg-primary-foreground/20" />
        </span>

        {/* product rating section */}
        <Skeleton className="h-5 w-1/2 bg-primary-foreground/20" />

        {/* product name */}
        <h4 className="mb-2 h-14 w-full items-start text-lg font-bold text-primary-foreground">
          <Skeleton className="h-full w-full bg-primary-foreground/20" />
        </h4>

        {/* product price */}
        <div className="flex w-full flex-row-reverse items-center">
          <div className="flex">
            <span className="h-7 w-20 font-bold text-primary-foreground">
              <Skeleton className="h-full w-full bg-primary-foreground/20" />
            </span>
          </div>
        </div>
        <div className="h-8 w-1/2">
          <Skeleton className="h-full w-full bg-primary-foreground/20" />
        </div>
      </div>
    </div>
  );
}
