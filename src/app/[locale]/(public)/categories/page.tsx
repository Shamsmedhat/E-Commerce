import Image from "next/image";
import { cn } from "@/lib/utils";
import { handleEnText } from "@/lib/utils/helpers";

// Navigation
import { Link } from "@/navigarion";

// Ui
import Heading from "@/components/common/Heading";
import { Badge } from "@/components/ui/badge";

// Translation
import { getLocale, getTranslations } from "next-intl/server";

// Icons
import { FaLongArrowAltRight } from "react-icons/fa";
import { getCategoriesData } from "@/lib/utils/data/categories-data";

// Electronices brands logo
import ElectronicesLogo from "@/../public/assets/apple-logo.png";
import ElectronicesLogo2 from "@/../public/assets/lg-logo.png";
import ElectronicesLogo3 from "@/../public/assets/samsung-logo.jpg";
import ElectronicesLogo4 from "@/../public/assets/Sony-Logo.png";

// Food brands logo
import FoodLogo1 from "@/../public/assets/abd-logo.png";
import FoodLogo2 from "@/../public/assets/fern-logo.png";

// HealthAndPersonalCare brands logo
import HealthAndPersonalCareLogo1 from "@/../public/assets/nivea-logo.png";
import HealthAndPersonalCareLogo2 from "@/../public/assets/braun-logo.png";

// Beverages brands logo
import BeveragesLogo1 from "@/../public/assets/Beverages-logo.png";
import BeveragesLogo2 from "@/../public/assets/Beverages2-logo.png";

// Babies brands logo
import BabiesLogo1 from "@/../public/assets/Babieslogo1.png";
import BabiesLogo2 from "@/../public/assets/Babieslogo2.png";

// HomeAndPetCare brands logo
import HomeAndPetCareLogo1 from "@/../public/assets/HomeAndPetCare-logo.png";
import HomeAndPetCareLogo2 from "@/../public/assets/HomeAndPetCarelogo2.png";

// Electronics images
import headphone from "@/../public/assets/headphone-bg.png";
import iphone from "@/../public/assets/iphone-bg.png";
import labtop from "@/../public/assets/labtop.png";

// Food images
import alabd from "@/../public/assets/al abd.png";
import aldoha from "@/../public/assets/al doha.png";

// personalCare images
import personalCare from "@/../public/assets/care-1.png";
import personalCare2 from "@/../public/assets/nivia-1.png";

// HealthAndPersonalCare images
import HealthAndPersonalCare1 from "@/../public/assets/vcola.png";
import HealthAndPersonalCare2 from "@/../public/assets/healthy_drink.png";

// babyAndToddler images
import babyAndToddler1 from "@/../public/assets/babyAndToddler1.png";
import babyAndToddler2 from "@/../public/assets/babyAndToddler2.png";

// HomeAndPetCare images
import HomeAndPetCare1 from "@/../public/assets/HomeAndPetCare1.png";
import HomeAndPetCare2 from "@/../public/assets/HomeAndPetCare2.png";
import HomeAndPetCare3 from "@/../public/assets/HomeAndPetCare3.png";

export default async function Page() {
  // Translations
  const t = await getTranslations();

  // Categories data
  const data: CategoriesData = await getCategoriesData();

  // Locale
  const locale = await getLocale();

  // If no data //TODO ui
  if (!data) {
    return (
      <section className="container mb-10">
        <h2>Categories</h2>
        <p>No categories to show</p>
      </section>
    );
  }

  // Electronics category data
  const Electronics = data.categories?.filter(
    (c) =>
      c.translations.data.name === "Electronics" ||
      c.translations.data.name === "الالكترونيات",
  )[0];

  // Babies category data
  const Babies = data.categories?.filter(
    (c) =>
      c.translations.data.name === "Babies" ||
      c.translations.data.name === "الاطفال",
  )[0];

  // HomeAndPetCare category data
  const HomeAndPetCare = data.categories?.filter(
    (c) =>
      c.translations.data.name === "Home and Pet Care" ||
      c.translations.data.name === "العناية بالمنزل والحيوانات الأليفة",
  )[0];

  // Beverages category data
  const Beverages = data.categories?.filter(
    (c) =>
      c.translations.data.name === "Beverages" ||
      c.translations.data.name === "المشروبات",
  )[0];

  // HealthAndPersonalCare category data
  const HealthAndPersonalCare = data.categories?.filter(
    (c) =>
      c.translations.data.name === "Health and Personal Care" ||
      c.translations.data.name === "الصحة والعناية الشخصية",
  )[0];

  // Food category data
  const Food = data.categories?.filter(
    (c) =>
      c.translations.data.name === "Food" ||
      c.translations.data.name === "طعام",
  )[0];

  return (
    <section className="container mb-10">
      {/* Page title */}
      <Heading className={cn(handleEnText(locale))}>
        {t("1jlVZjp6n-h8arU7z4VEx")}
      </Heading>

      <div className="my-10 grid w-full grid-cols-1 grid-rows-2 gap-12 lg:grid-cols-2 xl:grid-cols-3">
        {/* electronics card */}
        <div className="relative col-span-1 row-span-1 h-[20rem] bg-categories-electronics shadow-lg md:mx-28 lg:mx-0">
          {/* category name and all sub categories */}
          <div className="p-6 font-bold" dir="ltr">
            {/* category name */}
            <p className="text-3xl text-white">
              {Electronics?.translations.data.name}
            </p>

            {/* sub category name */}
            <div className="mb-6 mr-auto mt-3 flex w-[70%] flex-wrap gap-2">
              {Electronics?.subCategories.map((c) => {
                return (
                  <Badge
                    variant="secondary"
                    key={c._id}
                    className="select-none"
                  >
                    {c.translations.data.name}
                  </Badge>
                );
              })}
            </div>

            {/* best brands */}
            <div dir="ltr" className="w-[70%] text-white 2xl:text-2xl">
              <p>{t("RM4g-vYv6Fv9HBlvdJq4a")}</p>
              <div className="flex flex-wrap gap-4 py-3">
                <Image
                  src={ElectronicesLogo}
                  height={25}
                  width={25}
                  alt=""
                  className="pointer-events-none select-none drop-shadow-md"
                />
                <Image
                  src={ElectronicesLogo2}
                  height={10}
                  width={50}
                  alt=""
                  className="pointer-events-none select-none drop-shadow-md"
                />
                <Image
                  src={ElectronicesLogo4}
                  height={25}
                  width={50}
                  alt=""
                  className="pointer-events-none select-none drop-shadow-md"
                />
                <Image
                  src={ElectronicesLogo3}
                  height={25}
                  width={50}
                  className="pointer-events-none select-none rounded-lg drop-shadow-md"
                  alt=""
                />
              </div>
            </div>

            {/* category button */}
            <div className="mt-6">
              <Link href={`/categories/${Electronics?._id}`}>
                <button className="group relative items-center gap-1 overflow-hidden border border-white p-1 px-[6px] text-white shadow-md transition-all hover:text-categories-electronics">
                  <span className="relative z-10 flex items-center gap-1">
                    {t("EP20JBrzdd-XOrQxzYM0s")} <FaLongArrowAltRight />
                  </span>
                  <span className="absolute inset-0 origin-left scale-x-0 transform bg-white transition-all duration-300 group-hover:scale-x-100"></span>
                </button>
              </Link>
            </div>
          </div>

          {/* all category images */}
          <Image
            src={iphone}
            height={250}
            width={150}
            className="pointer-events-none absolute -top-9 rotate-12 animate-bounce-rotate drop-shadow-lg"
            alt=""
          />
          <Image
            src={labtop}
            height={320}
            width={220}
            className="pointer-events-none absolute -bottom-2 rotate-12 animate-bounce-rotate drop-shadow-lg"
            alt=""
          />
          <Image
            src={headphone}
            height={150}
            width={100}
            className="pointer-events-none absolute -right-6 top-12 rotate-12 animate-bounce-rotate drop-shadow-lg"
            alt=""
          />
        </div>

        {/*  Food card */}
        <div className="relative col-span-1 row-span-1 h-[20rem] bg-categories-food shadow-lg md:mx-28 lg:mx-0">
          {/* category name and all sub categories */}
          <div className="p-6 font-bold" dir="ltr">
            {/* category name */}
            <p className="text-3xl text-white">
              {Food?.translations.data.name}
            </p>
            {/* sub category name */}
            <div className="mb-6 mr-auto mt-3 flex w-[70%] flex-wrap gap-2">
              {Food?.subCategories.map((c) => {
                return (
                  <Badge
                    variant="secondary"
                    key={c._id}
                    className="select-none"
                  >
                    {c.translations.data.name}
                  </Badge>
                );
              })}
            </div>
            {/* best brands */}
            <div dir="ltr" className="w-[70%] text-white 2xl:text-2xl">
              <p>{t("RM4g-vYv6Fv9HBlvdJq4a")}</p>
              <div className="flex flex-wrap gap-4 py-3">
                <Image
                  src={FoodLogo1}
                  height={50}
                  width={50}
                  alt=""
                  className="pointer-events-none select-none drop-shadow-md grayscale"
                />
                <Image
                  src={FoodLogo2}
                  height={25}
                  width={50}
                  alt=""
                  className="pointer-events-none select-none drop-shadow-md grayscale"
                />
              </div>
            </div>
            {/* category button */}
            <div className="mt-6">
              <Link href={`/categories/${Food?._id}`}>
                <button className="group relative items-center gap-1 overflow-hidden border border-white p-1 px-[6px] text-white shadow-md transition-all hover:text-categories-food">
                  <span className="relative z-10 flex items-center gap-1">
                    {t("EP20JBrzdd-XOrQxzYM0s")} <FaLongArrowAltRight />
                  </span>
                  <span className="absolute inset-0 origin-left scale-x-0 transform bg-white transition-all duration-300 group-hover:scale-x-100"></span>
                </button>
              </Link>
            </div>
          </div>

          {/* all category images */}
          <Image
            src={alabd}
            height={300}
            width={200}
            className="pointer-events-none absolute -top-9 rotate-12 animate-bounce-rotate drop-shadow-lg"
            alt=""
          />
          <Image
            src={aldoha}
            height={300}
            width={200}
            className="pointer-events-none absolute bottom-4 rotate-12 animate-bounce-stand drop-shadow-lg"
            alt=""
          />
        </div>

        {/*  healthAndPersonalCare card*/}
        <div className="relative col-span-1 row-span-1 h-[20rem] bg-categories-healthAndPersonalCare shadow-lg md:mx-28 lg:mx-0">
          {/* category name and all sub categories */}
          <div className="mr-auto w-[70%] p-6 font-bold" dir="ltr">
            {/* category name */}
            <p className="text-3xl text-white">
              {HealthAndPersonalCare?.translations.data.name}
            </p>
            {/* sub category name */}
            <div className="mb-6 mr-auto mt-3 flex w-[70%] flex-wrap gap-2">
              {HealthAndPersonalCare?.subCategories.map((c) => {
                return (
                  <Badge
                    variant="secondary"
                    key={c._id}
                    className="select-none"
                  >
                    {c.translations.data.name}
                  </Badge>
                );
              })}
            </div>
            {/* best brands */}
            <div dir="ltr" className="w-[70%] text-white 2xl:text-2xl">
              <p>{t("RM4g-vYv6Fv9HBlvdJq4a")}</p>
              <div className="flex flex-wrap gap-4 py-3">
                <Image
                  src={HealthAndPersonalCareLogo1}
                  height={50}
                  width={50}
                  alt=""
                  className="pointer-events-none select-none drop-shadow-md"
                />
                <Image
                  src={HealthAndPersonalCareLogo2}
                  height={25}
                  width={50}
                  alt=""
                  className="pointer-events-none select-none drop-shadow-md"
                />
              </div>
            </div>
            {/* category button */}
            <div className="mt-6">
              <Link href={`/categories/${HealthAndPersonalCare?._id}`}>
                <button className="group relative items-center gap-1 overflow-hidden border border-white p-1 px-[6px] text-white shadow-md transition-all hover:text-categories-healthAndPersonalCare">
                  <span className="relative z-10 flex items-center gap-1">
                    {t("EP20JBrzdd-XOrQxzYM0s")} <FaLongArrowAltRight />
                  </span>
                  <span className="absolute inset-0 origin-left scale-x-0 transform bg-white transition-all duration-300 group-hover:scale-x-100"></span>
                </button>
              </Link>
            </div>
          </div>

          {/* all category images */}
          <Image
            src={personalCare}
            height={250}
            width={150}
            className="pointer-events-none absolute -top-9 rotate-12 animate-bounce-stand drop-shadow-lg"
            alt=""
          />
          <Image
            src={personalCare2}
            height={240}
            width={140}
            className="pointer-events-none absolute -bottom-2 rotate-12 animate-bounce-rotate drop-shadow-lg"
            alt=""
          />
        </div>

        {/*  Beverages card*/}
        <div className="relative col-span-1 row-span-1 h-[20rem] bg-categories-beverages shadow-lg md:mx-28 lg:mx-0">
          {/* category name and all sub categories */}
          <div className="p-6 font-bold" dir="ltr">
            {/* category name */}
            <p className="text-3xl text-white">
              {Beverages?.translations.data.name}
            </p>
            {/* sub category name */}
            <div className="mb-6 mr-auto mt-3 flex w-[70%] flex-wrap">
              {Beverages?.subCategories.map((c) => {
                return (
                  <Badge
                    variant="secondary"
                    key={c._id}
                    className="mx-1 select-none"
                  >
                    {c.translations.data.name}
                  </Badge>
                );
              })}
            </div>
            {/* best brands */}
            <div dir="ltr" className="w-[70%] text-white 2xl:text-2xl">
              <p>{t("RM4g-vYv6Fv9HBlvdJq4a")}</p>
              <div className="flex flex-wrap gap-4 py-3">
                <Image
                  src={BeveragesLogo1}
                  height={30}
                  width={30}
                  alt=""
                  className="pointer-events-none select-none drop-shadow-md grayscale"
                />
                <Image
                  src={BeveragesLogo2}
                  height={30}
                  width={50}
                  alt=""
                  className="pointer-events-none select-none drop-shadow-md grayscale"
                />
              </div>
            </div>
            {/* category button */}
            <div className="mt-6">
              <Link href={`/categories/${Beverages?._id}`}>
                <button className="group relative items-center gap-1 overflow-hidden border border-white p-1 px-[6px] text-white shadow-md transition-all hover:text-categories-beverages">
                  <span className="relative z-10 flex items-center gap-1">
                    {t("EP20JBrzdd-XOrQxzYM0s")} <FaLongArrowAltRight />
                  </span>
                  <span className="absolute inset-0 origin-left scale-x-0 transform bg-white transition-all duration-300 group-hover:scale-x-100"></span>
                </button>
              </Link>
            </div>
          </div>

          {/* all category images */}
          <Image
            src={HealthAndPersonalCare1}
            height={270}
            width={170}
            className="pointer-events-none absolute -top-2 rotate-12 animate-bounce-rotate drop-shadow-lg"
            alt=""
          />
          <Image
            src={HealthAndPersonalCare2}
            height={320}
            width={220}
            className="pointer-events-none absolute bottom-2 rotate-12 animate-bounce-stand drop-shadow-lg"
            alt=""
          />
        </div>

        {/*  babyAndToddler card*/}
        <div className="relative col-span-1 row-span-1 h-[20rem] bg-categories-babyAndToddler shadow-lg md:mx-28 lg:mx-0">
          {/* category name and all sub categories */}
          <div className="p-6 font-bold" dir="ltr">
            {/* category name */}
            <p className="text-3xl text-primary-foreground">
              {Babies?.translations.data.name}
            </p>
            {/* sub category name */}
            <div className="mb-6 mr-auto mt-3 flex w-[70%] flex-wrap">
              {Babies?.subCategories.map((c) => {
                return (
                  <Badge
                    variant="secondary"
                    key={c._id}
                    className="mx-1 select-none"
                  >
                    {c.translations.data.name}
                  </Badge>
                );
              })}
            </div>
            {/* best brands */}
            <div
              dir="ltr"
              className="w-[70%] text-primary-foreground 2xl:text-2xl"
            >
              <p>{t("RM4g-vYv6Fv9HBlvdJq4a")}</p>
              <div className="flex flex-wrap gap-4 py-3">
                <Image
                  src={BabiesLogo1}
                  height={30}
                  width={55}
                  alt=""
                  className="pointer-events-none select-none drop-shadow-md"
                />
                <Image
                  src={BabiesLogo2}
                  height={25}
                  width={50}
                  alt=""
                  className="pointer-events-none select-none drop-shadow-md grayscale"
                />
              </div>
            </div>
            {/* category button */}
            <div className="mt-6">
              <Link href={`/categories/${Babies?._id}`}>
                <button className="text-prborder-primary-foreground group relative items-center gap-1 overflow-hidden border border-primary-foreground p-1 px-[6px] shadow-md transition-all hover:text-categories-babyAndToddler">
                  <span className="relative z-10 flex items-center gap-1">
                    {t("EP20JBrzdd-XOrQxzYM0s")} <FaLongArrowAltRight />
                  </span>
                  <span className="absolute inset-0 origin-left scale-x-0 transform bg-primary-foreground transition-all duration-300 group-hover:scale-x-100"></span>
                </button>
              </Link>
            </div>
          </div>

          {/* all category images */}
          <Image
            src={babyAndToddler2}
            height={250}
            width={150}
            className="pointer-events-none absolute -top-5 rotate-12 animate-bounce-rotate drop-shadow-lg"
            alt=""
          />
          <Image
            src={babyAndToddler1}
            height={320}
            width={220}
            className="pointer-events-none absolute -bottom-2 rotate-12 animate-bounce-stand drop-shadow-lg"
            alt=""
          />
        </div>

        {/*  HomeAndPetCare card*/}
        <div className="relative col-span-1 row-span-1 h-[20rem] bg-categories-homeAndPetCare shadow-lg md:mx-28 lg:mx-0">
          {/* category name and all sub categories */}
          <div className="mr-auto w-[70%] p-6 font-bold" dir="ltr">
            {/* category name */}
            <p className="text-2xl text-white">
              {HomeAndPetCare?.translations.data.name}
            </p>
            {/* sub category name */}
            <div className="mb-6 mr-auto mt-3 flex w-[70%] flex-wrap">
              {HomeAndPetCare?.subCategories.map((c) => {
                return (
                  <Badge
                    variant="secondary"
                    key={c._id}
                    className="mx-1 select-none"
                  >
                    {c.translations.data.name}
                  </Badge>
                );
              })}
            </div>
            {/* best brands */}
            <div dir="ltr" className="w-[70%] text-white 2xl:text-2xl">
              <p>{t("RM4g-vYv6Fv9HBlvdJq4a")}</p>
              <div className="flex flex-wrap gap-4 py-3">
                <Image
                  src={HomeAndPetCareLogo1}
                  height={35}
                  width={50}
                  alt=""
                  className="pointer-events-none select-none drop-shadow-md"
                />
                <Image
                  src={HomeAndPetCareLogo2}
                  height={20}
                  width={50}
                  alt=""
                  className="pointer-events-none select-none"
                />
              </div>
            </div>
            {/* category button */}
            <div className="mt-6">
              <Link href={`/categories/${HomeAndPetCare?._id}`}>
                <button className="group relative items-center gap-1 overflow-hidden border border-white p-1 px-[6px] text-white shadow-md transition-all hover:text-categories-homeAndPetCare">
                  <span className="relative z-10 flex items-center gap-1">
                    {t("EP20JBrzdd-XOrQxzYM0s")} <FaLongArrowAltRight />
                  </span>
                  <span className="absolute inset-0 origin-left scale-x-0 transform bg-white transition-all duration-300 group-hover:scale-x-100"></span>
                </button>
              </Link>
            </div>
          </div>

          {/* all category images */}

          <Image
            src={HomeAndPetCare3}
            height={200}
            width={150}
            className="pointer-events-none absolute -right-6 top-12 rotate-12 animate-bounce-rotate drop-shadow-lg"
            alt=""
          />
          <Image
            src={HomeAndPetCare2}
            height={200}
            width={75}
            className="pointer-events-none absolute -bottom-2 rotate-12 animate-bounce-stand drop-shadow-lg"
            alt=""
          />
          <Image
            src={HomeAndPetCare1}
            height={250}
            width={150}
            className="pointer-events-none absolute -top-9 rotate-12 animate-bounce-rotate drop-shadow-lg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
