"use client";
import AddToCart from "@/components/common/AddToCart";
import QuantityBtn from "@/components/common/QuantityBtn";
import RatingStars from "@/components/common/RatingStars";
// import { PRODUCT_DATA } from "@/models/products";
import { LuHeart, LuScale } from "react-icons/lu";

import { useTranslations } from "next-intl";
import { useState } from "react";

type ProductDetailsProps = {
  category: string;
  name: string;
  overview: string | undefined;
  rating: number;
  price: number;
  ratings: number;
  stock: number;
};

export default function ProductDetails({
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
      <span className="text-md font-bold text-primary-foreground/50">
        {category}
      </span>
      <h1 className="pb-3 text-3xl font-bold">{name}</h1>
      <p className="text-md text-primary-foreground/80">
        {!isShowMore ? overview?.split(" ").slice(0, 65).join(" ") : overview}{" "}
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
        <span className="text-base text-primary-foreground/40 line-through">
          10000 {t("fU01whrYbLGxy6qtBGMEo")}
        </span>
        <span className="text-3xl font-bold text-primary-foreground">
          {price} {t("fU01whrYbLGxy6qtBGMEo")}
        </span>
      </span>

      {/* bottoms section */}
      <div className="my-4 flex gap-5 md:flex-col-reverse lg:flex-row">
        <div className="flex flex-row gap-4">
          <QuantityBtn
            className="overflow-hidden rounded-3xl border-0"
            isWithBorder={false}
            btnsClassName="!px-4"
            size={10}
          />
          <AddToCart />
        </div>
        <div className="flex gap-4">
          <button>
            <div className="rounded-full bg-primary-foreground/20 p-2">
              <LuHeart strokeWidth={1} size={18} />
            </div>
          </button>
          <button>
            <div className="rounded-full bg-primary-foreground/20 p-2">
              <LuScale strokeWidth={1} size={18} />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
