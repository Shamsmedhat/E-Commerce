"use client";
import AddToCart from "@/components/common/AddToCart";
import QuantityBtn from "@/components/common/QuantityBtn";
import RatingStars from "@/components/common/RatingStars";
// import { PRODUCT_DATA } from "@/models/products";
import { LuHeart, LuScale } from "react-icons/lu";

import { useTranslations } from "next-intl";
import { useState } from "react";

type ProductDetailsProps = {
  productId: string;
  category: string;
  name: string;
  overview: string | undefined;
  rating: number;
  price: number;
  ratings: number;
  stock: number;
};

export default function ProductDetails({
  productId,
  category,
  name,
  overview,
  rating = 0,
  price,
  ratings,
  stock,
}: ProductDetailsProps) {
  const [isShowMore, setIsShowMore] = useState(false);
  const t = useTranslations();
  return (
    <div className="mt-4 flex flex-shrink flex-grow flex-col justify-evenly md:mt-0">
      <span className="text-md font-bold text-primary-foreground/50 dark:text-white">
        {category}
      </span>
      <h1 className="pb-3 text-3xl font-bold dark:text-white">{name}</h1>
      <p className="text-md text-primary-foreground/80 dark:text-white/70">
        {!isShowMore ? overview?.split(" ").slice(0, 45).join(" ") : overview}{" "}
        <button
          className="text-backup"
          onClick={() => setIsShowMore((p) => !p)}
        >
          {!isShowMore
            ? t("iqqHOuI3_1nhifTxnK5l0")
            : t("uV-qPE-Qa79PU_qguUn3y")}
        </button>
      </p>
      <div>
        <div className="my-5 flex items-center font-semibold">
          <span className="me-4">
            <RatingStars rate={rating} size={25} />
          </span>
          <span className="mx-2"> {ratings}</span>
          <span>{t("flKadk1uiQBgrD9BptCEt")}</span>
        </div>
      </div>
      <span className="flex items-center gap-2">
        <span className="text-base text-primary-foreground/40 line-through dark:text-white">
          10000 {t("fU01whrYbLGxy6qtBGMEo")}
        </span>
        <span className="text-3xl font-bold text-primary-foreground dark:text-white">
          {price} {t("fU01whrYbLGxy6qtBGMEo")}
        </span>
      </span>

      {/* bottoms section */}
      <div className="my-4 flex gap-5 md:flex-col-reverse lg:flex-row">
        <div className="flex flex-row gap-4">
          <AddToCart productId={productId} />
        </div>
        <div className="flex gap-4">
          <button>
            <div className="rounded-full bg-primary-foreground/20 p-2 dark:bg-white">
              <LuHeart
                strokeWidth={1}
                size={18}
                className="dark:text-background"
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
