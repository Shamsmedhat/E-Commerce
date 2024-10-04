"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import Heading from "@/components/common/Heading";
import { cn } from "@/lib/utils";
import { generateColors } from "@/lib/utils/generateCategoryColors";
import { handleEnText } from "@/lib/utils/helpers";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";

interface MainSliderProps {
  categoriesData: CategoriesData;
}

interface SectionProps {
  categoriesData: CategoriesData;
  locale?: string;
  t?: any;
}

export default function MainSlider({ categoriesData }: MainSliderProps) {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <section className="container mb-[1rem] hidden md:block">
      {/* h2 heading */}
      <Heading className={cn(handleEnText(locale))}>
        {t("eexZ2Z9kcPg_aoRy2DZ8N")}
      </Heading>

      {/* This will show only on medium screens */}
      <div className="md:block lg:hidden">
        <MainSectionForMediumScreen categoriesData={categoriesData} />
      </div>

      {/* This will show only on large screens */}
      <div className="hidden lg:block">
        <MainSectionForLargeScreen
          categoriesData={categoriesData}
          locale={locale}
          t={t}
        />
      </div>
    </section>
  );
}

export function MainSectionForMediumScreen({ categoriesData }: SectionProps) {
  return (
    <ul className="mt-8 grid grid-cols-6 grid-rows-1 gap-3">
      {/* Drinks ------------------------------------------------------------- */}
      {categoriesData.categories?.map((c) => (
        <li
          key={c._id} // Always add a unique key for each item in the map
          className="flex flex-col items-start overflow-hidden rounded-lg"
          style={{
            backgroundColor: generateColors(c.translations.data.name)
              .backgroundColor,
            color: generateColors(c.translations.data.name).color,
          }}
        >
          <span className="m-3 rounded-sm bg-white/20 px-3 py-1 text-sm font-semibold">
            {c.translations.data.name}
          </span>

          {/* Conditionally render the Image if the category is Electronics */}
          {(c.translations.data.name === "Electronics" ||
            c.translations.data.name === "الالكترونيات") && (
            <div className="relative h-[10rem] w-full flex-grow">
              <Image
                src="/assets/electronics.png"
                alt={c.translations.data.name}
                className="absolute inset-0 object-cover drop-shadow-2xl"
                fill
              />
            </div>
          )}
          {(c.translations.data.name === "Babies" ||
            c.translations.data.name === "الاطفال") && (
            <div className="relative h-[10rem] w-full flex-grow">
              <Image
                src="/assets/baby.png"
                alt={c.translations.data.name}
                className="absolute inset-0 object-cover drop-shadow-2xl"
                fill
              />
            </div>
          )}
          {(c.translations.data.name === "Home and Pet Care" ||
            c.translations.data.name ===
              "العناية بالمنزل والحيوانات الأليفة") && (
            <div className="relative h-[10rem] w-full flex-grow">
              <Image
                src="/assets/pet.png" // Ensure the correct image path
                alt={c.translations.data.name}
                className="absolute inset-0 object-cover drop-shadow-2xl"
                fill
              />
            </div>
          )}
          {(c.translations.data.name === "Beverages" ||
            c.translations.data.name === "المشروبات") && (
            <div className="relative h-[10rem] w-full flex-grow">
              <Image
                src="/assets/beverages.png " // Ensure the correct image path
                alt={c.translations.data.name}
                className="absolute inset-0 object-cover drop-shadow-2xl"
                fill
              />
            </div>
          )}
          {(c.translations.data.name === "Health and Personal Care" ||
            c.translations.data.name === "الصحة والعناية الشخصية") && (
            <div className="relative h-[10rem] w-full flex-grow">
              <Image
                src="/assets/personal-care-bg.png" // Ensure the correct image path
                alt={c.translations.data.name}
                className="absolute inset-0 object-cover object-left drop-shadow-2xl"
                fill
              />
            </div>
          )}
          {(c.translations.data.name === "Food" ||
            c.translations.data.name === "طعام") && (
            <div className="relative h-[10rem] w-full flex-grow">
              <Image
                src="/assets/food.png" // Ensure the correct image path
                alt={c.translations.data.name}
                className="absolute inset-0 object-cover drop-shadow-2xl"
                fill
              />
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

export function MainSectionForLargeScreen({
  categoriesData,
  locale,
  t,
}: SectionProps) {
  const isEn = locale === "en";
  return (
    <ul
      className="grid h-[80vh] grid-cols-6 grid-rows-3 gap-3"
      dir={isEn ? "ltr" : "rtl"}
    >
      {/* Slider ------------------------------------------------------------- */}

      <li className="col-span-4 row-span-2 overflow-hidden rounded-lg">
        <Swiper
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="h-full"
        >
          <SwiperSlide className="relative">
            <Image
              src="/assets/1.jpg"
              alt="مستلزمات"
              sizes="50vw"
              fill
              priority
              className="h-full w-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide className="relative">
            <Image
              src="/assets/2.jpg"
              alt="أجهزة منزلية"
              sizes="50vw"
              fill
              priority
              className="h-full w-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide className="relative">
            <Image
              src="/assets/3.jpg"
              alt="موبايلات وهواتف"
              sizes="50vw"
              fill
              priority
              className="h-full w-full object-cover"
            />
          </SwiperSlide>
        </Swiper>
      </li>

      {/* Beverages ------------------------------------------------------------- */}

      <li className="relative flex flex-col items-start overflow-hidden rounded-lg bg-categories-beverages p-6">
        <span className="rounded-sm bg-white/20 px-3 py-1 text-xs font-bold text-zinc-800">
          {t("eFqAbc2btxOYiag5xvK0l")}
        </span>
        <p className="z-[1] mt-3 max-w-[70%] text-2xl font-bold text-zinc-800">
          {t("WmE5jcPnkChTNkIEIDyJw")}
        </p>
        <Image
          src="/assets/beverages.png"
          alt={t("WmE5jcPnkChTNkIEIDyJw")}
          width={145}
          height={300}
          priority
          className={cn(
            isEn ? "right-[0.9rem]" : "right-[5.9rem]",
            "translate-y-22 absolute top-[3.4rem] translate-x-7",
          )}
        />
      </li>

      {/* Babies ------------------------------------------------------------- */}

      <li className="before relative flex flex-col items-start p-6 before:absolute before:inset-0 before:rounded-lg before:bg-categories-babyAndToddler">
        <span className="relative z-[1] rounded-sm bg-white/50 px-3 py-1 text-xs font-bold text-zinc-800">
          {t("tixmUuYDazffNOLtxblYK")}
        </span>
        <p className="relative z-[1] mt-3 max-w-[70%] text-2xl font-bold text-zinc-800">
          {t("VQF0thv8t1XezD2RfzKDF")}
        </p>
        <Image
          src="/assets/baby.png"
          alt={t("VQF0thv8t1XezD2RfzKDF")}
          width={180}
          height={200}
          priority
          className={cn(
            isEn
              ? "md:translate-x-5 2xl:translate-x-20"
              : "md:-translate-x-5 2xl:-translate-x-20",
            "absolute md:left-0 md:top-8 md:w-[8rem] 2xl:left-0 2xl:top-0 2xl:w-[10rem] 2xl:-translate-y-5",
          )}
        />
      </li>

      {/* Personal Care ------------------------------------------------------ */}

      <li className="relative col-span-2 flex flex-col items-start overflow-hidden rounded-lg p-6">
        <span className="relative z-[1] rounded-sm bg-white/20 px-3 py-1 text-xs font-bold text-white">
          {t("JM5A8Gye2wneaO3srCNVj")}
        </span>
        <p className="relative z-[1] mt-3 max-w-[200px] text-2xl font-bold text-white drop-shadow">
          {t("GX5N9yvTQKnDWIeiQj_TK")}
        </p>
        <Image
          src="/assets/personal-care.jpg"
          alt={t("GX5N9yvTQKnDWIeiQj_TK")}
          fill
          priority
          className={cn(
            isEn ? "rotate-180" : "rotate-0",
            "absolute bottom-0 right-0 object-cover",
          )}
        />
      </li>

      {/* Electronics ------------------------------------------------------------- */}

      <li
        className={cn(
          isEn ? "" : "flex flex-col",
          "before relative col-span-2 items-start p-6 before:absolute before:inset-0 before:rounded-lg before:bg-categories-electronics",
        )}
      >
        <span className="relative z-[1] self-end rounded-sm bg-white/20 px-3 py-1 text-xs font-bold uppercase text-white">
          {t("h7zZgeSqnQAYiS8z7r4Gb")}
        </span>
        <p className="relative z-[1] mt-3 max-w-[200px] self-end text-left text-2xl font-bold uppercase text-white">
          {t("_2LSqwzmnCu_goqHBbFev")}
        </p>
        <Image
          src="/assets/electronics.png"
          alt={t("_2LSqwzmnCu_goqHBbFev")}
          width={180}
          height={300}
          priority
          className={cn(
            isEn ? "right-7" : "right-0",
            "translate-y-22 absolute bottom-0 w-[20rem] translate-x-7",
          )}
        />
      </li>

      {/* Home & Pet ------------------------------------------------------------- */}

      <li className="before relative col-span-2 flex flex-col items-start overflow-hidden p-6 before:absolute before:inset-0 before:rounded-lg before:bg-categories-homeAndPetCare">
        <span className="relative z-[1] rounded-sm bg-white/20 px-3 py-1 text-xs font-bold uppercase text-white">
          {t("pncleFA5O1Wog0H03XCaQ")}
        </span>
        <p className="relative z-[1] mt-3 max-w-[200px] text-2xl font-bold uppercase text-white">
          {t("o8rXhfoukMsb5o7UsPdgh")}
        </p>
        <Image
          src="/assets/pet.png"
          alt={t("o8rXhfoukMsb5o7UsPdgh")}
          width={180}
          height={200}
          priority
          className={cn(
            isEn ? "right-0" : "left-10",
            "absolute top-0 w-[11rem] -translate-x-5 -translate-y-6",
          )}
        />
      </li>

      {/* Food ------------------------------------------------------------- */}

      <li className="before relative col-span-2 flex flex-col items-start p-6 before:absolute before:inset-0 before:rounded-lg before:bg-categories-food">
        <span className="relative z-[1] rounded-sm bg-primary-foreground/20 px-3 py-1 text-xs font-bold uppercase text-white">
          {t("cNlasXhCqRpxvH12DMjxm")}
        </span>
        <p className="relative z-[1] mt-3 max-w-[200px] text-2xl font-bold uppercase text-white">
          {t("MecmolA46g7Y3QGUkCNn7")}
        </p>
        <Image
          src="/assets/food.png"
          alt={t("MecmolA46g7Y3QGUkCNn7")}
          width={200}
          height={200}
          priority
          className={cn(
            isEn ? "right-0" : "left-0",
            "absolute top-0 w-[15rem] -translate-x-5 translate-y-10",
          )}
        />
      </li>
    </ul>
  );
}
