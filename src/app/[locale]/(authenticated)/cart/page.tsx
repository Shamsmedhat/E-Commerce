// Translations
import { getLocale, getTranslations } from "next-intl/server";

// Using client component to access token and delete it after server end the streaming and login again with new token
import ValidateResponse from "@/components/custom/validate-response";

// Cart action for geting the cart data
import { getCartAction } from "@/lib/actions/cart-actions";

// UI
import ToggleStyleBtn from "@/components/common/ToggleStyleBtn";
import CartList from "./_components/cart-list";
import CartSummary from "./_components/cart-summary";
import Heading from "@/components/common/Heading";
import SubmitBtn from "./_components/submit-btn";
import EmptyCart from "./_components/empty-cart";

export default async function Cart() {
  // Translation
  const t = await getTranslations();

  // get current locale to render the dir based on it
  const locale = await getLocale();
  const isEn = locale === "en";

  // Get cart data

  const cart = await getCartAction();

  // If received cart and there is a status code in the cart that's signed for an error we check if this error is 401 in validate-session
  if (cart && "statusCode" in cart) {
    if (
      cart.message === "There is no cart for the currently logged in user!" &&
      cart.statusCode === 500
    ) {
      return <EmptyCart isEn={isEn} />;
    }
    return <ValidateResponse message={cart.message} callbackUrl="/cart" />;
  }

  return (
    <section
      className="container mt-7 flex flex-col md:flex-row"
      dir={isEn ? "ltr" : "rtl"}
    >
      {/* Cart content */}
      <div className="flex-grow">
        {/* Heading */}
        <div className="flex items-center justify-between">
          <Heading>{t("_Kg79lEkLCt2SxOaeQJZ2")}</Heading>
          <ToggleStyleBtn />
        </div>
        {/* List of Cart items */}
        <div>
          <CartList cart={cart} />
        </div>
        {/* checkout submit btn */}
        <div className="">
          <SubmitBtn />
        </div>
      </div>
      {/* Cart summary */}
      <div className="ms-[3rem] flex h-fit min-w-[20%] flex-col items-center rounded-lg bg-white pt-4 shadow-sm">
        <CartSummary cart={cart} />
      </div>
    </section>
  );
}
