"use client";

// ui
import { cn } from "@/lib/utils";

// icons
import { Skeleton } from "../ui/skeleton";

// prop type
type ProductProps = {
  isEn: boolean;
  i: number;
};

// product card component take the product info and the index of this product to change the UI layout basedon it , isEn  boolean (true) when the locale is English
export default function ProductCardSkeleton({ isEn, i }: ProductProps) {
  // is first product to render it differentially
  const isFirstProduct = i === 0;

  // is sec and third product to render it differentially
  const isSecAndThirdProduct = i === 1 || i === 2;

  //TODO finish ui mobile
  return (
    <li
      key={i}
      className={cn(
        // style in only first product
        isFirstProduct
          ? "col-span-2 row-span-2 flex h-full flex-col items-center justify-between bg-white p-5 shadow-sm dark:bg-background/40 xsm:col-span-2 md:col-span-2 md:row-span-1 xl:row-span-2"
          : // style in only sec and third product
            isSecAndThirdProduct
            ? "col-span-2 row-span-2 bg-white p-5 shadow-sm dark:bg-background/40 md:col-span-2 md:row-span-1"
            : // style in rest of the product
              "col-span-2 row-span-2 bg-white p-5 shadow-sm dark:bg-background/40 md:col-span-2 md:row-span-1 xl:col-span-1 xl:row-span-1",
        "rounded-lg",
      )}
    >
      {/* container for image div and product details div */}
      <div
        className={cn(
          // isEn to display it when the locale is eng
          !isEn && "flex-row-reverse",
          isFirstProduct && "flex flex-col md:flex-row",
          isSecAndThirdProduct && "flex flex-col md:flex-row",
          !isFirstProduct &&
            !isSecAndThirdProduct &&
            "flex flex-col gap-2 md:flex-row xl:flex-col",
          "flex h-full w-full justify-center gap-[1.5rem]",
        )}
      >
        {/* product image div*/}
        <div
          className={cn(
            // style in only first product
            isFirstProduct && "md:w-1/4 xl:w-1/2",
            // style in only sec and third product
            isSecAndThirdProduct && "md:w-1/4",
            !isFirstProduct &&
              !isSecAndThirdProduct &&
              "w-1/3 md:w-1/4 xl:h-[10rem] xl:w-full",

            // basic style
            "relative h-full w-full",
          )}
        >
          <div className="inline-block h-full w-full">
            <Skeleton className="h-full w-full bg-primary-foreground/20" />
          </div>
        </div>

        {/* product details */}
        <div
          className={cn(
            // style in only first product
            isFirstProduct && "xl:w-[50%]",
            // style in only sec and third product
            isSecAndThirdProduct && "flex flex-col justify-around",
            !isFirstProduct && !isSecAndThirdProduct && "gap-2",
            // basic style
            "flex flex-1 flex-col justify-evenly gap-4",
          )}
        >
          {/* sub category */}
          <span className="h-5 w-14">
            <Skeleton className="h-full w-full bg-primary-foreground/20" />
          </span>

          {/* Product title */}
          <h3
            className={cn(
              // Style for the first product
              isFirstProduct && "text-xl xsm:text-base md:text-xl xl:text-2xl",
              // Style for the second and third products
              isSecAndThirdProduct && "text-xl xsm:text-base md:text-xl",
              // Basic style
              "h-8 w-full font-bold text-primary-foreground",
            )}
          >
            <div className="h-full w-full transition-all hover:text-primary">
              <Skeleton className="h-full w-full bg-primary-foreground/20" />
            </div>
          </h3>

          {/* display the Product description only in first product*/}
          {isFirstProduct && (
            <p className="hidden h-20 w-full text-primary-foreground/70 xl:block">
              <Skeleton className="h-full w-full bg-primary-foreground/20" />
            </p>
          )}

          {/* display the stars component only when there is rating */}
          <div className="flex h-7 w-1/2 items-center gap-2">
            <Skeleton className="h-full w-full bg-primary-foreground/20" />
            <span className="text-sm text-primary-foreground">
              <Skeleton className="h-full w-full bg-primary-foreground/20" />
            </span>
          </div>

          {/* Priceing & Buttons Section */}
          <div
            className={cn(
              // style in only first product
              isFirstProduct && "flex-col justify-start gap-4",
              // style in only sec and third product
              isSecAndThirdProduct &&
                "flex-col justify-between gap-4 xl:flex-row xl:gap-0",
              !isFirstProduct &&
                !isSecAndThirdProduct &&
                "flex-col justify-start gap-1",
              // basic style
              "mt-3 flex items-start xl:mt-0",
            )}
          >
            {/* Priceing */}
            <span className="flex h-7 w-full gap-2">
              {/* product price */}
              <span className="font-extrabold text-primary-foreground">
                <Skeleton className="h-full w-full bg-primary-foreground/20" />
              </span>
            </span>

            {/* Buttons Section */}
            <div className="flex h-7 w-full items-start justify-start gap-3 xsm:flex-col-reverse sm:flex-row sm:items-end">
              {/* cart btn */}
              <Skeleton className="h-full w-full bg-primary-foreground/20" />
              {/* <AddToCartServer productId={p._id!} /> */}

              <div className="flex h-7 w-14 gap-2">
                {/* wishlist btn */}
                <button>
                  <div className="bg-primary-foreground/20/20 rounded-full p-[10px]">
                    <Skeleton className="h-full w-full bg-primary-foreground/20" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
