"use client";
import Image from "next/image";

// navigation
import { Link } from "@/navigarion";

// translation
import { useTranslations } from "next-intl";

// ui
import AddToCart from "@/components/common/AddToCart";
import RatingStars from "@/components/common/RatingStars";
import { cn } from "@/lib/utils";

// icons
import { useAddToCart } from "@/lib/utils/data/cart-data";
import { LuHeart, LuScale } from "react-icons/lu";

// prop type
type ProductProps = {
  p: Product;
  i: number;
  productKey: string | undefined;
  isEn: boolean;
};

// product card component take the product info and the index of this product to change the UI layout basedon it , isEn  boolean (true) when the locale is English
export default function ProductCard({ p, i, productKey, isEn }: ProductProps) {
  const t = useTranslations();

  // is first product to render it differentially
  const isFirstProduct = i === 0;

  // is sec and third product to render it differentially
  const isSecAndThirdProduct = i === 1 || i === 2;

  //TODO finish ui mobile
  return (
    <li
      key={productKey || i}
      className={cn(
        // style in only first product
        isFirstProduct
          ? "col-span-1 row-span-2 flex h-full flex-col items-center justify-between bg-white p-5 shadow-sm xsm:col-span-2 md:row-span-1 xl:row-span-2"
          : // style in only sec and third product
            isSecAndThirdProduct
            ? "col-span-2 row-span-2 bg-white p-5 shadow-sm md:row-span-1"
            : // style in rest of the product
              "col-span-1 row-span-1 bg-white p-5 shadow-sm",
        "rounded-lg",
      )}
    >
      {/* container for image div and product details div */}
      <div
        className={cn(
          // isEn to display it when the locale is eng
          !isEn && "flex-row-reverse",
          isFirstProduct && isSecAndThirdProduct && "md:flex-row",
          !isFirstProduct && !isSecAndThirdProduct && "flex flex-col gap-2",
          "flex h-full w-full gap-[1.5rem]",
        )}
      >
        {/* product image div*/}
        <div
          className={cn(
            // style in only first product
            isFirstProduct && "md:w-1/4 xl:w-1/2",
            // style in only sec and third product
            isSecAndThirdProduct && "md:w-1/4",
            !isFirstProduct && !isSecAndThirdProduct && "h-[180px] w-full",

            // basic style
            "relative",
          )}
        >
          <Link href={`/product/${p._id}`}>
            <Image
              src={p.cover!}
              alt={p.translations?.data.name!}
              fill
              className="object-scale-down"
            />
          </Link>
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
            "flex flex-1 flex-col justify-evenly",
          )}
        >
          {/* sub category */}
          <span className="font-bold text-primary-foreground/70">
            {p.subCategory?.translations.data.name}
          </span>

          {/* Product title */}
          <h3
            className={cn(
              // Style for the first product
              isFirstProduct && "text-xl xsm:text-base md:text-xl xl:text-2xl",
              // Style for the second and third products
              isSecAndThirdProduct && "text-xl xsm:text-base md:text-xl",
              // Basic style
              "font-bold text-primary-foreground",
            )}
          >
            <Link
              href={`/product/${p._id}`}
              className="transition-all hover:text-primary"
            >
              {p.translations?.data.name.length! > 40
                ? `${p.translations?.data.name.slice(0, 40)}...`
                : p.translations?.data.name}
            </Link>
          </h3>

          {/* display the Product description only in first product*/}
          {isFirstProduct && (
            <p className="hidden text-primary-foreground/70 xl:block">
              {p.translations?.data.overview?.split(" ").slice(0, 20).join(" ")}{" "}
              ...
            </p>
          )}

          {/* display the stars component only when there is rating */}
          {p.ratings?.average !== 0 && (
            <div className="flex items-center gap-2">
              <RatingStars rate={p.ratings?.average} />
              <span className="text-sm text-primary-foreground">
                {t("flKadk1uiQBgrD9BptCEt")} {p.ratings?.count}
              </span>
            </div>
          )}

          {/* Priceing & Buttons Section */}
          <div
            className={cn(
              // style in only first product
              isFirstProduct && "flex-col gap-4",
              // style in only sec and third product
              isSecAndThirdProduct && "flex-col gap-4 xl:flex-row xl:gap-0",
              !isFirstProduct && !isSecAndThirdProduct && "flex-col gap-1",
              // basic style
              "mt-3 flex items-center justify-start xl:mt-0",
            )}
          >
            {/* Priceing */}
            <span className="flex w-full gap-2 xl:text-xl">
              {/* //TODO discound  */}
              <span className="text-sm text-primary-foreground/40 line-through">
                1000 {t("fU01whrYbLGxy6qtBGMEo")}
              </span>
              {/* product price */}
              <span className="font-extrabold text-primary-foreground">
                {p.price} {t("fU01whrYbLGxy6qtBGMEo")}
              </span>
            </span>

            {/* Buttons Section */}
            <div className="flex w-full items-start justify-start gap-3 xsm:flex-col-reverse sm:flex-row sm:items-center">
              {/* cart btn */}
              <AddToCart productId={p._id!} />
              {/* <AddToCartServer productId={p._id!} /> */}

              <div className="flex gap-2">
                {/* wishlist btn */}
                <button>
                  <div className="rounded-full bg-primary-foreground/20 p-2">
                    <LuHeart strokeWidth={1} />
                  </div>
                </button>

                {/* compair btn */}
                <button>
                  <div className="rounded-full bg-primary-foreground/20 p-2">
                    <LuScale strokeWidth={1} />
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
