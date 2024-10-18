"use client";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

// function to return conditionaly text die based on locale
import { handleEnText } from "@/lib/utils/helpers";

// translation
import { getLocale, getTranslations } from "next-intl/server";

// ui
import { badgeVariants } from "@/components/ui/badge";
import Heading from "@/components/common/Heading";

// images
import petFood from "@/../public/assets/pet-food.png";
import snacks from "@/../public/assets/snacks.png";
import phone from "@/../public/assets/iphone.png";
import { useLocale, useTranslations } from "next-intl";

export default function TopCategories({
  categoriesData,
}: {
  categoriesData: CategoriesData;
}) {
  const t = useTranslations();
  // get locale for text dir
  const locale = useLocale();

  const homeAndPetCarecategory = categoriesData.categories?.filter(
    (c) => c.translations.data.name === "Home and Pet Care",
  )[0];
  const foodCategory = categoriesData.categories?.filter(
    (c) => c.translations.data.name === "Food",
  )[0];

  return (
    <section className="container mb-10 flex flex-col gap-8 px-5">
      <div className="flex flex-row-reverse items-center justify-between">
        {/* title h2 heading */}
        <Heading className={handleEnText(locale)}>
          {t("4iTgMO7i9qAUoe4dCjRtT")}
        </Heading>
        <div>
          <Link
            href="/categories"
            className="my-5 w-auto rounded-md bg-white px-6 py-2 text-center text-sm font-bold uppercase text-primary-foreground sm:text-lg"
          >
            {t("5v5B8O5ENR2qoShuRPbjg")}
          </Link>
        </div>
      </div>

      {/* content  */}
      <div className="flex flex-col gap-6 sm:flex-row">
        {/* Electronics card */}
        <div
          className={cn(
            handleEnText(locale),
            "flex flex-col-reverse items-center justify-between overflow-hidden bg-categories-electronics px-4 pt-2 shadow-xl sm:w-1/3 lg:flex-row lg:items-start",
          )}
        >
          {/* image */}
          <Image
            src={phone}
            alt="best phones"
            className="h-[15rem] w-[10rem] translate-y-10 object-cover sm:translate-x-9 lg:translate-y-20 xl:h-[17rem] xl:w-[15rem] xl:translate-y-16"
          />
          {/* title */}
          <div className="mt-[2rem]">
            <Link
              href="/electronics"
              className={`${badgeVariants({ variant: "outline" })} rounded-none border-none bg-white/20 !text-base !text-white`}
            >
              {t("61E446UcW_k3JTaJe9C4A")}
            </Link>

            <p className="mt-2 text-2xl text-white">
              {t("urTi3Z6bEM-5_FJPBdh9t")}
            </p>
          </div>
        </div>

        {/* Home & pet care card */}
        <div
          className={cn(
            handleEnText(locale),
            "flex flex-col-reverse justify-between overflow-hidden bg-categories-homeAndPetCare px-4 pt-2 shadow-xl sm:w-1/3",
          )}
        >
          {/* image */}
          <Image
            src={petFood}
            alt="pet care pet food"
            className="mt-2 h-[10rem] w-[18rem] flex-1 translate-x-[-30%] object-cover"
          />
          {/* title */}
          <div className="mt-[2rem]">
            <Link
              href={`categories/${homeAndPetCarecategory?._id}`}
              className={`${badgeVariants({ variant: "outline" })} rounded-none border-none bg-white/20 !text-base !text-white`}
            >
              {t("F8hMVdXN9r53Pzxc5iMlN")}
            </Link>

            <p className="mt-2 text-xl text-white">
              {t("XUVRkEjpUa7kjc4Y1AJQU")}
            </p>
          </div>
        </div>

        {/* Food card */}
        <div
          className={cn(
            handleEnText(locale),
            "flex flex-col-reverse justify-between overflow-hidden bg-categories-food px-4 pt-2 shadow-xl sm:w-1/3",
          )}
        >
          {/* image */}
          <Image
            src={snacks}
            alt="food snacks"
            className="h-full object-scale-down"
          />
          {/* title */}
          <div className="mt-[2rem] flex-col justify-start">
            <Link
              href={`categories/${foodCategory?._id}`}
              className={`${badgeVariants({ variant: "outline" })} rounded-none border-none bg-white/20 !text-base !text-white`}
            >
              {t("cNlasXhCqRpxvH12DMjxm")}
            </Link>
            <br />
            <p className="mt-2 text-xl text-white">
              {t("rFDZutcIoH5QkfrNW6nv3")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
