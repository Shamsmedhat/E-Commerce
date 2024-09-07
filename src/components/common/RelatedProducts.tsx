"use client";
import Imge3 from "@/../public/assets/Dog_Food.webp";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";
import Link from "next/link";
import Heading from "@/components/common/Heading";
import { PRODUCT } from "@/models/products";
import TopSellingItem from "@/app/[locale]/(homepage)/_components/TopSellingItem";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function RelatedProducts({
  relatedProduct,
}: {
  relatedProduct: PRODUCT[];
}) {
  const t = useTranslations();
  // Fetching only 20 of products that rated by 5 stars only
  const allProducts = relatedProduct
    .map((product) => product.data)
    .slice(0, 20);

  console.log(relatedProduct);
  return (
    <>
      <div className="flex justify-between ps-[8rem]">
        {/* h2 heading */}
        <h3 className="text-2xl font-bold">{t("2hNgS0RU8-uD3Gwjgh_pM")}</h3>
        <Link
          href=""
          className="my-5 w-auto rounded-md bg-white px-6 py-2 text-center font-bold uppercase text-primary-foreground"
        >
          عرض المزيد
        </Link>
      </div>
      <div>
        <Swiper
          // onSwiper={setSwiperRef}
          slidesPerView={6.25}
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
            {allProducts.map((product, i) => (
              <SwiperSlide key={i}>
                <TopSellingItem product={product} key={i} />
              </SwiperSlide>
            ))}
          </ul>
          <div className="absolute left-0 top-0 z-[1] h-full w-[5rem] bg-gradient-to-r from-white to-transparent"></div>
          <div className="swiper-button-next"></div>
        </Swiper>
      </div>
    </>
  );
}
