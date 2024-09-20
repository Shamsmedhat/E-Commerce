import { match } from "path-to-regexp";
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
      signIn: "/auth/login",
    },
  },
);

export default async function middleware(req: NextRequest) {
  // Get user token if it exists to customize protected routes
  const token = await getToken({ req });

  // Helper function for page regex creation
  const createPageRegex = (pages: string[]) => {
    return RegExp(
      `^(/(${locales.join("|")}))?(${pages
        .flatMap((p) => (p === "/" ? ["", "/"] : p))
        .join("|")})/?$`,
      "i",
    );
  };

  // creating regex pages for public & admin & user to check on
  const publicPathnameRegex = createPageRegex(publicPages);
  const adminPathnameRegex = createPageRegex(adminPages);
  const userPathnameRegex = createPageRegex(userPages);

  // Check public pages
  const isPublicPage = publicPathnameRegex.test(req.nextUrl.pathname);

  // Check admin pages
  const isAdminPage = adminPathnameRegex.test(req.nextUrl.pathname);

  // Check user pages
  const isUserPage = userPathnameRegex.test(req.nextUrl.pathname);

  // helper function take the roles and see if this includes the user role (token role)
  const isAuthorized = (allowedRoles: string[]) =>
    allowedRoles.includes(token?.role as string);

  // Handle public pages first for early exit
  if (isPublicPage) {
    return handleI18nRouting(req);
  }

  // Handle admin pages
  if (isAdminPage) {
    if (isAuthorized([ROLE.ADMIN, ROLE.OWNER])) {
      return (authMiddleware as any)(req);
    } else if (token?.role === ROLE.USER) {
      return NextResponse.redirect(new URL("/", req.url));
    } else {
      return NextResponse.redirect(new URL("/auth/login", req.url));
    }
  }

  // Handle user pages
  if (isUserPage) {
    if (isAuthorized([ROLE.ADMIN, ROLE.OWNER, ROLE.USER])) {
      return (authMiddleware as any)(req);
    } else {
      return NextResponse.redirect(new URL("/auth/login", req.url));
    }
  }

  // Default to authMiddleware for other cases like wrong paths
  return handleI18nRouting(req);
}

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
