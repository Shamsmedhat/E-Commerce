import Image from "next/image";
import { Link } from "@/navigarion";

// translation
import { getTranslations } from "next-intl/server";

// web logo
import Logo from "./Logo";

//TODO data

// payment methods
import cib from "@/../public/assets/cib.png";
import LangBtn from "./LangBtn";
import masterCard from "@/../public/assets/mastercard.png";
import visa from "@/../public/assets/visa.png";

// social images
import facebook from "@/../public/assets/facebook.png";
import instgram from "@/../public/assets/instagram.png";
import twitter from "@/../public/assets/twitter.png";
import youtube from "@/../public/assets/youtube.png";
import { getCategoriesAction } from "@/lib/actions/categories-actions";

export default async function Footer() {
  const t = await getTranslations();
  //TODO data

  const data = await getCategoriesAction();

  const categories = data.data.categories;
  console.log("data", data);

  return (
    <footer className="shadow-md">
      {/* footer-img is custom class for footer img in globle css */}
      <div className="footer-img bg-slate-500 py-8">
        <div className="bg-footer-img container inset-0 flex flex-col justify-evenly pt-4 text-[#969696]">
          {/* content */}
          <div className="grid grid-cols-1 flex-wrap items-start justify-between gap-x-6 gap-y-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-3">
            {/* web info breif */}
            <div>
              <div>
                <Logo height={100} width={100} />
              </div>
              <p className="">{t("JIKYP2OtzXU6WSNZN_Yhh")}</p>
            </div>

            {/*  Categories*/}
            <div>
              <h5 className="mb-3 text-3xl text-white">
                {t("xe7r7PEc2CpQZsK2CYHxZ")}
              </h5>
              <ul className="space-y-2">
                {categories?.map((c) => (
                  <li key={c._id}>
                    <Link href={`/categories/${c._id}`}>
                      {c.translations.data.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* About us */}
            <div>
              <h5 className="text-3xl text-white">
                {t("FsKZugZFYo57NK1-LDMky")}
              </h5>
              <ul className="space-y-2">
                <li>{t("7HpIwQ6qDsBju_qUxOLmT")}</li>
                <li>{t("fQRmL535LSx6YPnJKbdIl")}</li>
                <li>{t("aDyrPs3pwIoRg7hC5uIo0")}</li>
              </ul>
            </div>
          </div>

          {/* social & payment */}
          <div className="flex flex-col justify-between gap-2 p-0 align-middle sm:flex-row">
            {/* payments list */}
            <ul className="mt-2 flex items-center justify-around gap-1 space-x-4 sm:w-[325px] sm:justify-center">
              {/* visa */}
              <li className="me-4">
                <Link href="">
                  <Image
                    src={visa}
                    alt="visa payment"
                    className="max-h-20 w-16 min-w-9 grayscale transition-all duration-150 hover:grayscale-0"
                  />
                </Link>
              </li>

              {/* master card */}
              <li>
                <Link href="">
                  <Image
                    src={masterCard}
                    alt="master card payment"
                    className="max-h-20 w-16 min-w-9 grayscale transition-all duration-150 hover:grayscale-0"
                  />
                </Link>
              </li>

              {/* cib bank */}
              <li>
                <Link href="">
                  <Image
                    src={cib}
                    alt="cib payment"
                    className="max-h-20 w-20 min-w-9 grayscale transition-all duration-150 hover:grayscale-0"
                  />
                </Link>
              </li>
            </ul>

            {/* social list */}
            <ul className="flex flex-row items-center justify-around gap-4 text-2xl text-white sm:justify-center sm:p-0">
              {/* facebook */}
              <li>
                <Link href="">
                  <Image
                    src={facebook}
                    alt="facebook"
                    className="max-h-20 w-7 min-w-5 grayscale transition-all duration-150 hover:grayscale-0"
                  />
                </Link>
              </li>
              {/* instgram */}
              <li>
                <Link href="">
                  <Image
                    src={instgram}
                    alt="instgram"
                    className="max-h-20 w-7 min-w-5 grayscale transition-all duration-150 hover:grayscale-0"
                  />
                </Link>
              </li>
              {/* twitter (X)*/}
              <li>
                <Link href="">
                  <Image
                    src={twitter}
                    alt="twitter"
                    className="max-h-20 w-7 min-w-5 grayscale transition-all duration-150 hover:grayscale-0"
                  />
                </Link>
              </li>
              {/* youtube */}
              <li>
                <Link href="">
                  <Image
                    src={youtube}
                    alt="youtube"
                    className="max-h-20 w-7 min-w-5 grayscale transition-all duration-150 hover:grayscale-0"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* lang & copyright */}
      <div className="flex h-[80px] items-center justify-around bg-[#1b1b1b] p-4 text-center text-white">
        {/* lang */}
        <span className="ml-4 text-primary-foreground">
          <LangBtn ar="العربية" en="English" />
        </span>
        {/* copyright */}
        <span className="">Copyright &copy; 2024, All Rights Reserved</span>
      </div>
    </footer>
  );
}
