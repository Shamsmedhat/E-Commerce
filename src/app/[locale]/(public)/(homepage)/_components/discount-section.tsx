import Link from "next/link";
import Image from "next/image";

// images
import iphoneImg from "@/../public/assets/iphone.png";
import headphoneImg from "@/../public/assets/headphone.png";
import { getTranslations } from "next-intl/server";

export default async function DiscountSection() {
  const t = await getTranslations();

  return (
    <div className="relative mb-5 mt-24 flex h-[8.5rem] w-full items-center justify-center bg-categories-electronics drop-shadow-sm">
      <Image
        //clip top custom css in the globals css not from tailwind
        src={iphoneImg}
        alt="electronics offers"
        className="absolute left-0 hidden transition-all duration-300 ease-in-out sm:top-[-2rem] sm:flex sm:h-[10rem] sm:w-[12rem] md:h-[13rem] md:w-[17rem] xl:left-[10%] xl:top-[-6rem] xl:h-[17rem] xl:w-[27rem]"
      />
      <div className="flex-col text-center">
        <p className="text-xl font-bold text-white md:text-3xl">
          {t("BRvuMxplycq9TAjgzjPLO")}
        </p>
        <p className="mb-2 text-lg uppercase text-primary-foreground md:text-2xl">
          {t("55U9Vfm5jUosimK6mB2gl")}
        </p>
        <Link
          href="/categories"
          className="border border-white px-6 text-xs font-bold text-white transition-colors hover:bg-white hover:text-primary-foreground md:text-sm"
        >
          {t("hxORlugaycADhGY3aysLj")}
        </Link>
      </div>
      <Image
        // clip top custom css in the globals css not from tailwind
        src={headphoneImg}
        alt="electronics offers"
        //clip-top custom css set to 4rem to cut styling
        className="clip-top absolute right-5 hidden sm:top-[-4rem] sm:flex sm:h-[13rem] sm:w-[12rem] md:h-[13rem] md:w-[17rem] lg:left-[10%] lg:right-[10%] lg:top-[-4rem] lg:h-[17rem] lg:w-[20rem]"
      />
    </div>
  );
}
