"use client";

import { cn } from "@/lib/utils";
import { usePathname } from "../../navigarion";
import { useRouter } from "../../navigarion";
import { useLocale } from "next-intl";
import { Button } from "../ui/button";
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
    <Button
      variant="outline"
      className={cn(
        locale === "en" && "self-baseline",
        "flex items-center px-3 text-xl font-semibold rtl:text-base",
      )}
      onClick={() =>
        router.replace(pathname, {
          locale: locale === "ar" ? "en" : "ar",
        })
      }
    >
      {locale === "en" ? ar : en}
    </Button>
  );
}
