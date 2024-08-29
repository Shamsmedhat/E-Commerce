"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";
import Link from "next/link";
import { products } from "@/_lib/data";
import TopSellingItem from "./TopSellingItem";
import Heading from "@/components/common/Heading";

export default function TopRatedItems() {
  // Fetching only 20 of products that rated by 5 stars only
  const allProducts = products
    .map((product) => product.data)
    .filter((product) => (product.rating = 5))
    .slice(0, 20);

  return (
    <section className="container my-16 w-full">
      <div className="my-6 flex justify-between">
        {/* h2 heading */}
        <Heading>المنتـجات الأعلى تقييمًا</Heading>
        <Link
          href=""
          className="my-5 w-auto rounded-md bg-white px-6 py-2 text-center font-bold uppercase text-primary-foreground"
        >
          عرض المزيد
        </Link>
      </div>
      <div className="bg-white shadow-lg">
        <Swiper
          // onSwiper={setSwiperRef}
          slidesPerView={5}
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
    </section>
  );
}
