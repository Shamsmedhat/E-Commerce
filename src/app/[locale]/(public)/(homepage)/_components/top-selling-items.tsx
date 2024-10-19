"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";

// function to return conditionaly text die based on locale
import { handleEnText } from "@/lib/utils/helpers";

// translations
import { useLocale, useTranslations } from "next-intl";

// hook for using media query
import { useMediaQuery } from "react-responsive";

// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// ui
import TopSellingItem from "./top-selling-item";
import Heading from "@/components/common/Heading";

import { useTopSellingProducts } from "@/lib/utils/data/products-data";
import { useEffect, useState } from "react";

export default function TopSellingItems() {
  const t = useTranslations();

  const [topSellingDisplayedProducts, setTopSellingDisplayedProducts] =
    useState<Product[]>();

  // get locale for text dir
  const locale = useLocale();

  // custom screen query for slider preview items
  const isLargeScreen = useMediaQuery({ query: "(min-width: 1150px)" });
  const isMediumScreen = useMediaQuery({ query: "(min-width: 930px)" });
  const isSmallScreen = useMediaQuery({ query: "(min-width: 590px)" });
  const isExtraSmallScreen = useMediaQuery({ query: "(min-width: 400px)" });

  const { topSellingProducts } = useTopSellingProducts();

  // Fetching products that got most sales
  useEffect(() => {
    setTopSellingDisplayedProducts(topSellingProducts?.products);
  }, [topSellingProducts?.products]);

  if (!topSellingDisplayedProducts) {
    return <p>no products to show</p>;
  }

  return (
    <section className="md:2 w-full md:mt-16">
      {/* title h2 heading */}
      <div
        className={cn(
          (handleEnText(locale),
          locale === "en" && "container flex-row-reverse"),
          "my-6 flex justify-between",
        )}
      >
        <Heading className="flex items-center">
          {t("uZZQUtSnWv_5AZL2Q5qi9")}
        </Heading>
      </div>
      {/* top selling products slider */}
      <div>
        <Swiper
          // lg screen show 6.25 products md screen show 4.25 sm screen 3.25 extra sm screen show 2.25 less show 1.25
          slidesPerView={
            isLargeScreen
              ? 6.25
              : isMediumScreen
                ? 4.25
                : isSmallScreen
                  ? 3.25
                  : isExtraSmallScreen
                    ? 2.25
                    : 1.25
          }
          centeredSlides={false}
          spaceBetween={0}
          loop={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: null,
          }}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
        >
          <ul>
            {/* top selling products data */}

            {topSellingDisplayedProducts.map((p) => (
              <SwiperSlide key={p._id}>
                <TopSellingItem product={p} locale={locale} />
              </SwiperSlide>
            ))}
          </ul>

          {/* next button */}
          <div className="absolute left-0 top-0 z-[1] h-full w-[5rem] bg-gradient-to-r from-white to-transparent"></div>
          <div className="swiper-button-next"></div>
        </Swiper>
      </div>
    </section>
  );
}
