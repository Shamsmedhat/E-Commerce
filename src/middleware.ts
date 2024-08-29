import createMiddleware from "next-intl/middleware";
import { locales, localePrefix } from "./navigarion";

// First, define the next-intl middleware
const intlMiddleware = createMiddleware({
  defaultLocale: "ar",
  locales,
  localePrefix,
});

export default intlMiddleware;

// Configure the matcher for both middlewares
export const config = {
  matcher: ["/", "/(ar|en)/:path*"],
};
