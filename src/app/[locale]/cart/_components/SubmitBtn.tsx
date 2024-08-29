"use client";
import MyButton from "@/components/common/MyButton";
import { useTranslations } from "next-intl";
import React from "react";
import { useMediaQuery } from "react-responsive";

export default function SubmitBtn() {
  const t = useTranslations();
  const isSmallScreen = useMediaQuery({ query: "(min-width: 767px)" });
  // Conditionally render based on the screen size
  // using this approach to make the element not even show inn in DOM
  if (!isSmallScreen) {
    //TODO  to return a separation line
    return null; // Don't render on larger screens
  }
  return (
    <MyButton
      onClick={() => console.log("")}
      className="mb-10 mt-5 text-lg font-bold uppercase text-white"
    >
      {t("uGXddxwBlKfC6WsNEeTG4")}
    </MyButton>
  );
}
