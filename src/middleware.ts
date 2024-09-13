import { NextRequest } from "next/server";
import { withAuth } from "next-auth/middleware";
import createMiddleware from "next-intl/middleware";
import { getRequiredRoles } from "./lib/utils/helpers";

// Define available locales for internationalization
export const locales = ["en", "ar"] as const;

// Create internationalization middleware with specified locales
const intlMiddleware = createMiddleware({
  locales: locales,
  defaultLocale: "ar",
  localeDetection: false,
});

// Create authentication middleware with authorization callback
const authMiddleware = withAuth((req) => intlMiddleware(req), {
  callbacks: {
    // Check if the user is authorized (i.e., token is not null)
    authorized: ({ token, req }: { token: any; req: any }) => {
      if (!token) return false;

      const userRoles = Array.isArray(token?.role) ? token.role : [token?.role];
      const requiredRoles = getRequiredRoles(req.nextUrl.pathname);

      // Check if user has at least one of the required roles
      return requiredRoles.some((role) => userRoles.includes(role));
    },
  },
  // Specify the sign-in page to redirect unauthorized users
  pages: {
    signIn: "/login",
  },
});

// Main middleware function to handle public and protected routes
export default function middleware(req: NextRequest) {
  // Create a regex to identify public paths
  const publicPathnameRegex = RegExp(
    `^(/(${locales.join("|")}))?(${["/login", "/"].join("|")})/?$`,
    "i",
  );

  // Check if the current request is for a public page
  const isPublicPage = publicPathnameRegex.test(req.nextUrl.pathname);

  // If the request is for a public page or doesn't require authentication, use intlMiddleware, otherwise use authMiddleware
  if (isPublicPage || getRequiredRoles(req.nextUrl.pathname).length === 0) {
    return intlMiddleware(req);
  } else {
    return (authMiddleware as any)(req);
  }
}

// Configuration to skip paths that should not be internationalized
export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};

// import createMiddleware from "next-intl/middleware";
// import { withAuth } from "next-auth/middleware";
// import { NextRequest, NextResponse } from "next/server";

// export const locales = ["en", "ar"] as const;

// const intlMiddleware = createMiddleware({
//   locales: locales,
//   defaultLocale: "ar",
//   localeDetection: false,
// });

// const authMiddleware = withAuth(
//   function onSuccess(req) {
//     return intlMiddleware(req);
//   },
//   {
//     callbacks: {
//       authorized: ({ token }) => token != null,
//     },
//     pages: {
//       signIn: "/[locale]/(client)/login",
//     },
//   },
// );

// export default function middleware(req: NextRequest) {
//   const excludePattern = "^(/(" + locales.join("|") + "))?/dashboard/?.*?$";
//   const publicPathnameRegex = RegExp(excludePattern, "i");
//   const isPublicPage = !publicPathnameRegex.test(req.nextUrl.pathname);

//   if (isPublicPage) {
//     return intlMiddleware(req);
//   } else {
//     // Redirects unauthorized users to the sign-in page with a callback URL
//     if (!req.cookies.get("next-auth.session-token")) {
//       // Extract the current locale from the path (if present)
//       const locale = req.nextUrl.pathname.split("/")[1];
//       const origin = req.nextUrl.origin; // Get the request origin (e.g., http://localhost:3000)
//       const signInUrl = `${origin}/${locale}/(client)/login`; // Construct absolute URL for the login page
//       const callbackUrl = req.nextUrl.href; // Use the current path the user tried to access as the callback URL

//       // Redirect to the sign-in page with the callback URL to return to after login
//       return NextResponse.redirect(`${origin}/${locale}/login`);
//     }
//   }
// }
// // Configure the matcher for both middlewares
// export const config = {
//   matcher: ["/", "/(ar|en)/:path*"],
// };
