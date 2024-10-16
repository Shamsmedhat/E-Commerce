import React from "react";

import TotalPaymentProcess from "./components/total-payment-process";
import EmptyCart from "../cart/_components/empty-cart";
import ValidateResponse from "@/components/custom/validate-response";
import { getCartAction } from "@/lib/actions/cart-actions";
import { getLocale } from "next-intl/server";

export default async function Page() {
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
  return <TotalPaymentProcess cart={cart.cart} />;
}
