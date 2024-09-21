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
import TopSellingItem from "./TopSellingItem";
import Heading from "@/components/common/Heading";

//TODO data
import { products } from "@/lib/utils/data";

export default function TopSellingItems() {
  const t = useTranslations();

  // get locale for text dir
  const locale = useLocale();

  // custom screen query for slider preview items
  const isLargeScreen = useMediaQuery({ query: "(min-width: 1150px)" });
  const isMediumScreen = useMediaQuery({ query: "(min-width: 930px)" });
  const isSmallScreen = useMediaQuery({ query: "(min-width: 590px)" });
  const isExtraSmallScreen = useMediaQuery({ query: "(min-width: 400px)" });

  // Fetching only 20 of products that rated by 5 stars only
  const allProducts = products
    .map((product) => product.data)
    .filter((product) => (product.rating = 5))
    .slice(0, 20);

  return (
    <section className="mt-16 w-full">
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
        <Link
          href=""
          className="my-5 w-auto rounded-md bg-white px-6 py-2 text-center text-sm font-bold uppercase text-primary-foreground sm:text-lg"
        >
          {t("K0t7CX8uPwXiTE8oJilMt")}
        </Link>
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
            {allProducts.map((product, i) => (
              <SwiperSlide key={i}>
                <TopSellingItem product={product} key={i} />
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
