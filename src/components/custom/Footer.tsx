import Image from "next/image";

import { getTranslations } from "next-intl/server";

import Logo from "./Logo";
// images
import footerImg from "@/../public/assets/footer.webp";
import visa from "@/../public/assets/visa.svg";
import masterCard from "@/../public/assets/mastercard.png";
import cib from "@/../public/assets/cib.svg";
import { products } from "@/_lib/data";
import { Link } from "@/navigarion";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram, FaYoutube } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import LangBtn from "./LangBtn";

export default async function Footer() {
  const t = await getTranslations();
  const data = products.map((p) => p.data.category);
  const categoreis = Array.from(new Set(data));

  return (
    <footer className="shadow-md">
      <div className="relative">
        <Image
          src={footerImg}
          alt="Store Name"
          className="w-full"
          quality={100}
          placeholder="blur"
        />
        <div className="container absolute inset-0 mt-8 flex flex-col justify-evenly text-[#969696]">
          <div className="flex gap-24">
            {/* content */}
            <div className="flex w-1/3 flex-col items-start justify-start gap-8 p-4">
              <div>
                <Logo height={100} width={100} />
              </div>
              <div>
                <p className="">{t("JIKYP2OtzXU6WSNZN_Yhh")}</p>
              </div>
            </div>

            {/*  Categories*/}
            <div className="ms-6 mt-8 flex w-1/3 flex-col items-start justify-start gap-3">
              <h5 className="text-3xl text-white">
                {t("xe7r7PEc2CpQZsK2CYHxZ")}
              </h5>
              <ul className="space-y-2">
                {categoreis.map((c) => (
                  <li key={c}>
                    {/* //TODO put categories ID */}
                    <Link href={`/${c}`}>{c}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* About us */}
            <div className="mt-8 flex w-1/3 flex-col items-start justify-start gap-8">
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
          <div className="container flex justify-between p-0">
            <div className="mt-2 flex space-x-4">
              <Image src={visa} alt="visa payment" height={40} width={80} />
              <Image
                src={masterCard}
                alt="master card payment"
                height={20}
                width={70}
              />
              <Image src={cib} alt="cib payment" height={40} width={80} />
            </div>
            <div className="flex w-[35%] items-center justify-center">
              <ul className="me-32 flex flex-row items-center justify-center gap-4 text-2xl text-white">
                <li>
                  <Link href={""}>
                    <FaFacebookF />
                  </Link>
                </li>
                <li>
                  <Link href={""}>
                    <FaInstagram />
                  </Link>
                </li>
                <li>
                  <Link href={""}>
                    <RiTwitterXFill />
                  </Link>
                </li>
                <li>
                  <Link href={""}>
                    <FaYoutube />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="flex h-[80px] items-center justify-around bg-[#1b1b1b] p-4 text-center text-white">
        <span className="ml-4">
          <LangBtn ar="العربية" en="English" />
        </span>
        <span className="">Copyright &copy; 2024, All Rights Reserved</span>
      </div>
    </footer>
  );
}
