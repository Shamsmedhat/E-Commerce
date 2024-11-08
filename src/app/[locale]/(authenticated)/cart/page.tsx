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

export default async function Cart() {
  // Translation
  const t = await getTranslations();

  // get current locale to render the dir based on it
  const locale = await getLocale();
  const isEn = locale === "en";

  // Get cart data

  // Initialize cart data variable
  let cart;
  try {
    // Attempt to get cart data
    cart = await getCartAction();
  } catch (error) {
    console.log(1, error);
    // Handle specific errors based on their properties
    if (
      error instanceof AppError &&
      error.message === "There is no cart for the currently logged in user!" &&
      error.statusCode === 500
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
