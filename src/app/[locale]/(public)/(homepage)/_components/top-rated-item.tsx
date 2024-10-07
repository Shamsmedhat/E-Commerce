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

export default function TopRatingItem({
  product,
  locale,
}: {
  product: Product;
  locale: string;
}) {
  const t = useTranslations();

  const imageUrl = product.cover ?? imageFallback;
  // console.log("product", product);

  return (
    // product card
    <div
      className={cn(
        locale === "en" ? "items-end" : "items-start",
        "flex h-[360px] cursor-pointer flex-col justify-between p-4 align-middle",
      )}
    >
      {/* product image */}
      <div className="relative flex h-[160px] w-full items-center justify-center">
        <Image
          src={imageUrl}
          width={300} // Increased the width for higher flexibility
          height={200} // This helps control the proportion of the image
          alt="Product image"
          className="h-full max-h-[160px] w-auto object-contain" // Adjusted for flexible sizing
        />
      </div>

      {/* product info section */}
      <div
        className={cn(
          locale === "en" ? "items-end text-left" : "items-start text-right",
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
        <h4 className="mb-2 text-lg font-bold text-primary-foreground">
          {product.translations?.data.name.length! > 30
            ? `...${product.translations?.data.name.slice(0, 30)}`
            : product.translations?.data.name}
        </h4>

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
