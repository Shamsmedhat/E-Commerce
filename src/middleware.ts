// import { withAuth } from "next-auth/middleware";
// import createMiddleware from "next-intl/middleware";
// import { locales, localePrefix } from "./navigarion";

// // First, define the next-intl middleware
// const intlMiddleware = createMiddleware({
//   defaultLocale: "ar",
//   locales,
//   localePrefix,
// });

// export default intlMiddleware;

// Configure the matcher for both middlewares
// export const config = {
//   matcher: ["/", "/(ar|en)/:path*"],
// };

import createMiddleware from "next-intl/middleware";
import { withAuth } from "next-auth/middleware";
import { NextRequest } from "next/server";

export const locales = ["en", "ar"] as const;

const intlMiddleware = createMiddleware({
  locales: locales,
  defaultLocale: "en",
  localeDetection: false,
});

const authMiddleware = withAuth(
  function onSuccess(req) {
    return intlMiddleware(req);
  },
  {
    callbacks: {
      authorized: ({ token }) => token != null,
    },
    pages: {
      signIn: "/auth/login",
    },
  },
);

export default function middleware(req: NextRequest) {
  const excludePattern = "^(/(" + locales.join("|") + "))?/admin/?.*?$";
  const publicPathnameRegex = RegExp(excludePattern, "i");
  const isPublicPage = !publicPathnameRegex.test(req.nextUrl.pathname);

  if (isPublicPage) {
    return intlMiddleware(req);
  } else {
    return (authMiddleware as any)(req);
  }
}

// Configure the matcher for both middlewares
export const config = {
  matcher: ["/", "/(ar|en)/:path*"],
};
