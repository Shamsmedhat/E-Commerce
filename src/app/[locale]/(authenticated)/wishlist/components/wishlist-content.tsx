"use client";

import Heading from "@/components/common/Heading";
import ToggleStyleBtn from "@/components/common/ToggleStyleBtn";
import React from "react";

import { useTranslations } from "next-intl";
import WishlistList from "./wishlist-list";

type CartContentProps = {
  wishlist: WishlistData;
};

export default function WishlistContent({ wishlist }: CartContentProps) {
  const t = useTranslations();

  return (
    <>
      {/* Cart content */}
      <div className="flex-grow">
        {/* Heading */}
        <div className="flex items-center justify-between">
          <Heading>{t("wFji2aefPiavlmp55mmjb")}</Heading>
          <ToggleStyleBtn />
        </div>
        {/* List of Cart items */}
        <div>
          <WishlistList wishlist={wishlist} />
        </div>
        {/* checkout submit btn */}
      </div>
    </>
  );
}
