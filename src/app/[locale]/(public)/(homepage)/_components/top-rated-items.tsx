"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";

// function to return conditionaly text die based on locale
import { handleEnText } from "@/lib/utils/helpers";

// translations
import { useLocale, useTranslations } from "next-intl";

// hook for using media query
import { useMediaQuery } from "react-responsive";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// ui
// import TopSellingItem from "./top-selling-item";
import Heading from "@/components/common/Heading";

//TODO data
import TopRatingItem from "./top-rated-item";
import { useTopRatingProducts } from "@/lib/utils/data/products-data";
import { useEffect, useState } from "react";
import TopSellingItemsSkeleton from "@/components/skeletons/top-selling-items-skeleton";
import HorizontalProductsSlider from "./horizontal-products-slider";

export default function TopRatedItems() {
  const t = useTranslations();

  // get locale for text dir
  const locale = useLocale();

  // custom screen query for slider preview items
  const isLargeScreen = useMediaQuery({ query: "(min-width: 1150px)" });
  const isMediumScreen = useMediaQuery({ query: "(min-width: 930px)" });
  const isSmallScreen = useMediaQuery({ query: "(min-width: 590px)" });
  const isExtraSmallScreen = useMediaQuery({ query: "(min-width: 400px)" });

  const [topRatingDisplayedProducts, setTopRatingDisplayedProducts] =
    useState<Product[]>();

  const { topRatingProducts } = useTopRatingProducts();

  // Fetching products sorted by most rating stars
  useEffect(() => {
    // Get only top products raing from 3.5 star or above
    const filteredTopRatedProducts = topRatingProducts?.products.filter(
      (p) => p.ratings?.average! >= 3.5, // number of stars will be displayed
    );
    setTopRatingDisplayedProducts(filteredTopRatedProducts);
  }, [topRatingProducts?.products]);

  if (!topRatingDisplayedProducts) {
    return (
      <section className="container my-16 w-full">
        <TopSellingItemsSkeleton />
      </section>
    );
  }
  return (
    <section className="container my-16 w-full">
      {/* title h2 heading */}
      <div
        className={cn(
          (handleEnText(locale), locale === "en" && "flex-row-reverse"),
          "my-6 flex justify-between",
        )}
      >
        {/* title h2 heading */}
        <Heading className="flex items-center">
          {t("CrU60-woqGv72goIWJC_l")}
        </Heading>
      </div>
      {/* top rated products slider */}
      <div className="bg-white shadow-lg dark:bg-background">
        <Swiper
          // lg screen show 5 products md screen show 4 sm screen 3 extra sm screen show 2 less show 1.25
          slidesPerView={
            isLargeScreen
              ? 5
              : isMediumScreen
                ? 4
                : isSmallScreen
                  ? 3
                  : isExtraSmallScreen
                    ? 2
                    : 1.25
          }
          centeredSlides={false}
          spaceBetween={20}
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
            {/* top rated products data */}
            {topRatingDisplayedProducts.map((product, i) => (
              <SwiperSlide key={i}>
                <HorizontalProductsSlider
                  product={product}
                  key={i}
                  locale={locale}
                />
              </SwiperSlide>
            ))}
          </ul>
          {/* next button */}
          <div className="absolute left-0 top-0 z-[1] h-full w-[5rem] bg-gradient-to-r from-white to-transparent dark:from-background"></div>
          <div className="swiper-button-next dark:after:bg-black/30"></div>
        </Swiper>
      </div>
    </section>
  );
}
