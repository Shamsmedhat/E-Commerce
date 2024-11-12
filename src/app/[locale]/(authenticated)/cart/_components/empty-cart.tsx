import Image from "next/image";

// navigation
import { Link } from "@/navigarion";

// translation
import { getTranslations } from "next-intl/server";

// ui
import Heading from "@/components/common/Heading";
import ToggleStyleBtn from "@/components/common/ToggleStyleBtn";

// image
import emptyCartImg from "@/../public/assets/empty cart.webp";

// icone
import { GoArrowUpRight } from "react-icons/go";

export default async function EmptyCart({ isEn }: { isEn: boolean }) {
  // translation
  const t = await getTranslations();

  return (
    <section
      className="container mt-7 flex flex-col md:flex-row"
      dir={isEn ? "ltr" : "rtl"}
    >
      {/* Cart content */}
      <div className="flex-grow">
        {/* Heading */}
        <div className="flex items-center justify-between">
          <Heading className="dark:text-white">
            {t("_Kg79lEkLCt2SxOaeQJZ2")}
          </Heading>
          {/* toggle btn */}
        </div>
        {/* cart msg */}
        <div className="mt-3 rounded-lg bg-white p-6 dark:bg-background">
          {/* msg to user */}
          <p className="text-3xl text-primary-foreground dark:text-white/70">
            {t("ENSodfxOcBIJIy9uZxYTf")}
          </p>

          {/* navigate to home */}
          <div className="my-4 flex items-center justify-center text-2xl text-primary underline">
            <Link href={"/"}>{t("9G6dgsrT99qPLy5YgOMf5")}</Link>
            <GoArrowUpRight size={18} />
          </div>

          {/* page image */}
          <div className="flex w-full items-center justify-center">
            <Image
              src={emptyCartImg}
              alt="E commerce"
              height={500}
              width={500}
              className="rounded-full bg-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
