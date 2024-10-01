"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import Heading from "@/components/common/Heading";
import { useLocale, useTranslations } from "next-intl";
import { generateColors } from "@/lib/utils/generateCategoryColors";
import { cn } from "@/lib/utils";
import { handleEnText } from "@/lib/utils/helpers";

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

export async function MainSectionForMediumScreen({
  categoriesData,
}: SectionProps) {
  const electronics = generateColors("Electronics");
  const babies = generateColors("Babies");
  const HomeAndPetCare = generateColors("HomeandPetCare");
  const beverages = generateColors("Beverages");
  const healthAndPersonalCare = generateColors("HealthandPersonalCare");
  const food = generateColors("Food");

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
  return (
    <ul
      className="grid h-[80vh] grid-cols-6 grid-rows-3 gap-3"
      dir={locale === "en" ? "ltr" : "rtl"}
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

      {/* Drinks ------------------------------------------------------------- */}

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
          className="translate-y-22 absolute right-[5.9rem] top-[3.4rem] translate-x-7"
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
          className="absolute md:left-0 md:top-8 md:w-[8rem] md:-translate-x-5 2xl:left-0 2xl:top-0 2xl:w-[10rem] 2xl:-translate-x-20 2xl:-translate-y-5"
        />
      </li>

      {/* Personal Care ------------------------------------------------------ */}

      <li className="relative col-span-2 flex flex-col items-start overflow-hidden rounded-lg p-6">
        <span className="relative z-[1] rounded-sm bg-white/20 px-3 py-1 text-xs font-bold text-white">
          عناية الشخصية
        </span>
        <p className="relative z-[1] mt-3 max-w-[200px] text-2xl font-bold text-white drop-shadow">
          منتجات العناية الشخصية
        </p>
        <Image
          src="/assets/personal-care.jpg"
          alt="عناية الشخصية"
          fill
          priority
          className="absolute bottom-0 right-0 object-cover"
        />
      </li>

      {/* Electronics ------------------------------------------------------------- */}

      <li className="before relative col-span-2 flex flex-col items-start p-6 before:absolute before:inset-0 before:rounded-lg before:bg-categories-electronics">
        <span className="relative z-[1] self-end rounded-sm bg-white/20 px-3 py-1 text-xs font-bold uppercase text-zinc-800">
          الكترونيات
        </span>
        <p className="relative z-[1] mt-3 max-w-[200px] self-end text-left text-2xl font-bold uppercase text-zinc-800">
          لابتوب وموبايل وكمبيوتر
        </p>
        <Image
          src="/assets/electronics.png"
          alt="لابتوب وموبايل وكمبيوتر"
          width={180}
          height={300}
          priority
          className="translate-y-22 absolute bottom-0 right-0 w-[20rem] translate-x-7"
        />
      </li>

      {/* Home & Pet ------------------------------------------------------------- */}

      <li className="before relative col-span-2 flex flex-col items-start overflow-hidden p-6 before:absolute before:inset-0 before:rounded-lg before:bg-categories-homeAndPetCare">
        <span className="relative z-[1] rounded-sm bg-white/20 px-3 py-1 text-xs font-bold uppercase text-white">
          رعـاية الحيوانات أليفة
        </span>
        <p className="relative z-[1] mt-3 max-w-[200px] text-2xl font-bold uppercase text-white">
          طعام ومستلزمات الحيوانات الأليفة
        </p>
        <Image
          src="/assets/pet.png"
          alt="رعـاية الحيوانات أليفة"
          width={180}
          height={200}
          priority
          className="absolute left-10 top-0 w-[11rem] -translate-x-5 -translate-y-8"
        />
      </li>

      {/* Food ------------------------------------------------------------- */}

      <li className="before relative col-span-2 flex flex-col items-start p-6 before:absolute before:inset-0 before:rounded-lg before:bg-categories-food">
        <span className="relative z-[1] rounded-sm bg-primary-foreground/20 px-3 py-1 text-xs font-bold uppercase text-white">
          طعـام
        </span>
        <p className="relative z-[1] mt-3 max-w-[200px] text-2xl font-bold uppercase text-white">
          رقائق البطاطس والوجبات الخفيفة والمكسرات
        </p>
        <Image
          src="/assets/food.png"
          alt="منظفات"
          width={200}
          height={200}
          priority
          className="absolute left-0 top-0 w-[15rem] -translate-x-5 translate-y-10"
        />
      </li>
    </ul>
  );
}
