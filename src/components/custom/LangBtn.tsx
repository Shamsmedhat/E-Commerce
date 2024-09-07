"use client";

import { usePathname } from "../../navigarion";
import { useRouter } from "../../navigarion";
import { useLocale } from "next-intl";
type Locale = "ar" | "en";

export default function LangBtn({
  ar = "ع",
  en = "EN",
}: {
  ar?: string;
  en?: string;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale() as Locale;
  return (
    <button
      className="flex items-center text-xl font-semibold rtl:text-base"
      onClick={() =>
        router.replace(pathname, {
          locale: locale === "ar" ? "en" : "ar",
        })
      }
    >
      {locale === "en" ? ar : en}
    </button>
  );
}
