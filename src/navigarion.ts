import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

// A list of all locales (languages supported)
export const locales = ["ar", "en"];

// alwayes show the locale in url
export const localePrefix = "always";

// The routing configuration that is shared between the middleware and the navigation apis
export const routing = defineRouting({
  locales: locales,

  // Used when no locale matches
  defaultLocale: "ar",
  localePrefix,
});

export const { Link, redirect, usePathname, useRouter } =
  // the pathname will still the same name even when change the locale
  createSharedPathnamesNavigation(routing);
