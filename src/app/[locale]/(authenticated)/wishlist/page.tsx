// Translations
import { getLocale, getTranslations } from "next-intl/server";

// Using client component to access token and delete it after server end the streaming and login again with new token
import ValidateResponse from "@/components/custom/validate-response";

// Cart action for geting the cart data

// UI

import { getWishlistAction } from "@/lib/actions/wishlist-actions";
import { AppError } from "@/lib/utils/catchAsync";
import { getServerSession } from "next-auth";
import EmptyWishlist from "./components/empty-wishlist";
import WishlistContent from "./components/wishlist-content";
import GuestWishlist from "./components/guest-wishlist";

export default async function Cart() {
  // Translation
  const t = await getTranslations();

  // get current locale to render the dir based on it
  const locale = await getLocale();
  const isEn = locale === "en";
  const session = await getServerSession();

  // Get cart data

  // Initialize cart data variable
  let wishlist;
  if (!session) {
    return <GuestWishlist />;
  } else {
    try {
      console.log(2);
      // Attempt to get cart data
      wishlist = await getWishlistAction();
    } catch (error) {
      // Handle specific errors based on their properties
      if (
        error instanceof AppError &&
        error.message ===
          "There is no wishlist for the currently logged in user!" &&
        error.statusCode === 500
      ) {
        return <EmptyWishlist isEn={isEn} />;
      }
      return (
        <ValidateResponse
          message={(error as AppError).message || "An error occurred"}
          callbackUrl="/wishlist"
        />
      );
    }

    if (wishlist?.wishlist.length === 0) {
      return <EmptyWishlist isEn={isEn} />;
    }

    return (
      <section
        className="container mt-7 flex flex-col md:flex-row"
        dir={isEn ? "ltr" : "rtl"}
      >
        <WishlistContent wishlist={wishlist} />
      </section>
    );
  }
}
