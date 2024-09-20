import { withAuth } from "next-auth/middleware";
import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { locales, redirect, routing } from "./navigarion";
import { getToken } from "next-auth/jwt";
import { ROLE } from "./lib/constants/roles";

// accessible pages for any authors, no authentication is required for these paths
const publicPages = [
  "/",
  "/auth/login",
  "/auth/signup",
  "/categories",
  "/categories/[categoryId]",
  "/product/[product/Id]",
];

// accessible for only admins & owners
const adminPages = ["/dashboard"];

// accessible for only users
const userPages = ["/cart", "/profile"];

// handling translations
const handleI18nRouting = createMiddleware(routing);

// handling authentication
const authMiddleware = withAuth(
  // Note that this callback is only invoked if the `authorized` callback has returned `true`and not for pages listed in `pages`.
  function onSuccess(req) {
    return handleI18nRouting(req);
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        if (token) return true;
        else return false;
      },
    },
    pages: {
      signIn: "/login",
    },
  },
);

export default async function middleware(req: NextRequest) {
  // get user token if exist to customize protected routes
  const token = await getToken({ req });

  // checking publice pages with locale
  const publicPathnameRegex = RegExp(
    `^(/(${locales.join("|")}))?(${publicPages
      .flatMap((p) => (p === "/" ? ["", "/"] : p))
      .join("|")})/?$`,
    "i",
  );
  const isPublicPage = publicPathnameRegex.test(req.nextUrl.pathname);

  // checking admin pages with locale
  const adminPathnameRegex = RegExp(
    `^(/(${locales.join("|")}))?(${adminPages
      .flatMap((p) => (p === "/" ? ["", "/"] : p))
      .join("|")})/?$`,
    "i",
  );
  const isAdminPage = adminPathnameRegex.test(req.nextUrl.pathname);

  // checking users pages with locale
  const userPathnameRegex = RegExp(
    `^(/(${locales.join("|")}))?(${userPages
      .flatMap((p) => (p === "/" ? ["", "/"] : p))
      .join("|")})/?$`,
    "i",
  );
  const isUserPage = userPathnameRegex.test(req.nextUrl.pathname);

  // if navigating to the admin page only the admin or owner can path visit it
  if (isAdminPage) {
    if (token?.role === ROLE.ADMIN || token?.role === ROLE.OWNER) {
      return (authMiddleware as any)(req);
    } else if (token?.role === ROLE.USER) {
      return NextResponse.redirect(new URL("/", req.url));
    } else {
      return NextResponse.redirect(new URL("/auth/login", req.url));
    }
  }

  // if navigating to the users page only the admin or owner or user can path visit it
  if (isUserPage) {
    if (
      token?.role === ROLE.ADMIN ||
      token?.role === ROLE.OWNER ||
      token?.role === ROLE.USER
    ) {
      return (authMiddleware as any)(req);
    } else {
      return NextResponse.redirect(new URL("/auth/login", req.url));
    }
  }

  // if navigating to any public page any one can visit it
  if (isPublicPage) {
    return handleI18nRouting(req);
  } else {
    return (authMiddleware as any)(req);
  }
}

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
