// Translations
import { getLocale, getTranslations } from "next-intl/server";

// Using client component to access token and delete it after server end the streaming and login again with new token
import ValidateResponse from "@/components/custom/validate-response";

// Cart action for geting the cart data
import { getCartAction } from "@/lib/actions/cart-actions";

// UI
import EmptyCart from "./_components/empty-cart";
import CartContent from "./_components/cart-content";
import { AppError } from "@/lib/utils/catchAsync";
import { getSession } from "next-auth/react";
import GuestCart from "./_components/guest-cart";
import { getServerSession } from "next-auth";

export default async function Cart() {
  // Translation
  const t = await getTranslations();

  // get current locale to render the dir based on it
  const locale = await getLocale();
  const isEn = locale === "en";
  const session = await getServerSession();
  // Get cart data

  // Initialize cart data variable
  let cart;
  console.log(session);
  if (!session) {
    console.log(1);
    return <GuestCart />;
  } else {
    console.log(2);

    try {
      // Attempt to get cart data
      cart = await getCartAction();
    } catch (error) {
      // Handle specific errors based on their properties
      if (
        error instanceof AppError &&
        error.message ===
          "There is no cart for the currently logged in user!" &&
        error.statusCode === 404
      ) {
        return <EmptyCart isEn={isEn} />;
      }
      return (
        <ValidateResponse
          message={(error as AppError).message || "An error occurred"}
          callbackUrl="/cart"
        />
      );
    }

    return (
      <section
        className="container my-10 flex flex-col lg:flex-row"
        dir={isEn ? "ltr" : "rtl"}
      >
        <CartContent cart={cart} />
      </section>
    );
  }
}
