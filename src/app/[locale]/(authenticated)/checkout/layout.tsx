import { getCartAction } from "@/lib/actions/cart-actions";
import CartSummary from "../cart/_components/cart-summary";
import EmptyCart from "../cart/_components/empty-cart";
import ValidateResponse from "@/components/custom/validate-response";
import { getLocale, getTranslations } from "next-intl/server";
import { FaRegAddressCard } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import { MdOutlineDoneOutline } from "react-icons/md";
import CheckoutCartSummary from "./components/checkout-cart-summary";

export default async function CheckoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const t = await getTranslations();
  const locale = await getLocale();
  const isEn = locale === "en";

  // Get cart data
  const cart = await getCartAction();

  // If received cart and there is a status code in the cart that's signed for an error we check if this error is 401 in validate-session
  if (cart && "statusCode" in cart) {
    if (
      cart.message === "There is no cart for the currently logged in user!" &&
      cart.statusCode === 404
    ) {
      return <EmptyCart isEn={isEn} />;
    }
    return <ValidateResponse message={cart.message} callbackUrl="/cart" />;
  }

  return (
    <section className="w-full">
      <main className="container my-10 grid grid-cols-3 gap-8">
        <div className="col-span-1">
          <CheckoutCartSummary
            cart={cart}
            className="mx-8 bg-white shadow-sm"
          />
        </div>
        <div className="col-span-2 rounded-lg bg-white shadow-sm">
          {children}
        </div>
      </main>
    </section>
  );
}
