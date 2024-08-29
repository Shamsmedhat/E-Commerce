"use client";

import { usePathname } from "../../navigarion";
import { useRouter } from "../../navigarion";
import { useLocale } from "next-intl";
type Locale = "ar" | "en";

export default function LangBtn() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale() as Locale;
  return (
    <div>
      <li className="flex h-14 items-center justify-center border-e pe-6 font-semibold">
        <button
          className="flex items-center text-xl font-semibold rtl:text-base"
          onClick={() =>
            router.replace(pathname, {
              locale: locale === "ar" ? "en" : "ar",
            })
          }
        >
          {locale === "en" ? "ع" : "EN"}
        </button>
      </li>
    </div>
  );
}
