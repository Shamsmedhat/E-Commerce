"use client";
import { cn } from "@/lib/utils";
import { useLocale } from "next-intl";
import { LuStar } from "react-icons/lu";

type Rating = {
  starsNumber?: number;
  rate: number | undefined;
  size?: number;
  weight?: number;
  color?: string;
  className?: string;
};

export default function RatingStars({
  starsNumber = 5,
  rate = 5,
  size = 18,
  weight = 0.5,
  color = "#ffffff00",
  className = "",
}: Rating) {
  const locale = useLocale();
  const isEn = locale === "en";

  return (
    <span
      className={cn(isEn ? "justify-start" : "justify-end", "flex")}
      dir="ltr"
    >
      {Array.from({ length: starsNumber || 5 }, (_, i) => {
        const isHalfStar = rate > i && rate < i + 1;
        const fillColor = rate >= i + 1 ? "#FEBF31" : "rgb(60 64 59 / 0.3)";

        return (
          <span key={i} className={`relative ${className}`}>
            <LuStar
              fill={fillColor}
              size={size}
              strokeWidth={weight}
              color={color}
              className={cn(
                fillColor === "rgb(60 64 59 / 0.3)" && "dark:fill-white",
              )}
            />
            {isHalfStar && (
              <LuStar
                fill="#FEBF31"
                size={size}
                strokeWidth={weight}
                color={color}
                className="absolute left-0 top-0"
                style={{ clipPath: "inset(0 50% 0 0)" }} // Half-star effect
              />
            )}
          </span>
        );
      })}
    </span>
  );
}
