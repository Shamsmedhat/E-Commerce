"use client";
import Image from "next/image";
import { cn } from "@/lib/utils";

// translation
import { useTranslations } from "next-intl";

// fallback image
import imageFallback from "@/../public/assets/fallbackImage.jpeg";

// ui
import RatingStars from "@/components/common/RatingStars";
import AddToCart from "@/components/common/AddToCart";
import { Link } from "@/navigarion";

export default function HorizontalProductsSlider({
  product,
  locale,
}: {
  product: Product;
  locale: string;
}) {
  const t = useTranslations();

  const imageUrl = product.cover ?? imageFallback;

  return (
    // product card
    <div
      className={cn(
        locale === "en" ? "items-end" : "items-start",
        "flex h-[360px] flex-col justify-between gap-2 p-4 align-middle",
      )}
    >
      {/* product image */}
      <Link
        className="relative flex h-[160px] w-full items-center justify-center"
        href={`/product/${product._id}`}
      >
        <Image
          src={imageUrl}
          width={100}
          height={100}
          alt=""
          className="h-full max-h-[160px] w-auto object-contain"
        />
      </Link>

      {/* product info section */}
      <div
        className={cn(
          locale === "en" ? "items-end" : "items-start text-right",
          "flex flex-col",
        )}
      >
        {/* product category name */}
        <span className="text-sm text-primary-foreground/80">
          {product.category?.translations.data.name}
        </span>

        {/* product rating section */}
        {product.ratings?.count !== 0 && (
          <RatingStars rate={product.ratings?.average} />
        )}

        {/* product name */}
        <Link
          className="mb-2 items-start text-lg font-bold text-primary-foreground transition-all hover:text-primary"
          href={`/product/${product._id}`}
        >
          {product.translations?.data.name.length! > 30
            ? `...${product.translations?.data.name.slice(0, 30)}`
            : product.translations?.data.name}
        </Link>

        {/* product price */}
        <div className="flex w-full flex-row-reverse items-center">
          <div className="flex flex-col">
            <span className="text-end text-sm text-primary-foreground/70 line-through">
              1000 {t("fU01whrYbLGxy6qtBGMEo")}
            </span>
            <span className="font-bold text-primary-foreground">
              {product.price} {t("fU01whrYbLGxy6qtBGMEo")}
            </span>
          </div>
          <div>
            <AddToCart productId={product._id!} isSmall={true} />
          </div>
        </div>
      </div>
    </div>
  );
}