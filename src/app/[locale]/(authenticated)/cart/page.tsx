import Heading from "@/components/common/Heading";
import { products } from "@/lib/utils/data-v1";
import { getTranslations } from "next-intl/server";
import ToggleStyleBtn from "@/components/common/ToggleStyleBtn";
import CartList from "./_components/CartList";
import CartSummary from "./_components/CartSummary";
import MyButton from "@/components/common/MyButton";
import SubmitBtn from "./_components/SubmitBtn";
import { getCartData } from "@/lib/utils/cart-data";
import { signOut } from "next-auth/react";
import { redirect } from "@/navigarion";
import catchAsync, { AppError } from "@/lib/utils/catchAsync";
import { getCartAction } from "@/lib/actions/cart-actions";
import { cookies } from "next/headers";
import ValidateResponse from "@/components/custom/validate-response";

export default async function Cart() {
  const t = await getTranslations();

  const cart = await getCartAction();
  console.log("cart", cart);
  if (cart && "statusCode" in cart) {
    return <ValidateResponse message={cart.message} callbackUrl="/cart" />;
  }

  return (
    <section className="container mt-7 flex flex-col md:flex-row">
      {/* Cart content */}
      <div className="flex-grow-[1]">
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
        <CartSummary />
      </div>
    </section>
  );
}
