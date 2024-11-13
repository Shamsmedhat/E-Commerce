"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

// Translation
import { useLocale, useTranslations } from "next-intl";

// Ui
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Heading from "@/components/common/Heading";
import { AddressForm } from "./address-form";
import { PaymentSelect } from "./payment-select";
import { usePlaceOrder } from "@/lib/utils/data/orders-data";
import SuccefullyOrder from "./succefully-order";
import { MdOutlineDoneOutline, MdOutlinePayment } from "react-icons/md";
import { FaRegAddressCard } from "react-icons/fa";
import CheckoutProgressUi from "./checkout-progress-ui";

export default function TotalPaymentProcess(cart: CartData) {
  // Translation
  const t = useTranslations();
  // State [isForm  valid to display the next btn if its not valid]
  const [isFormValid, setIsFormValid] = useState(true);

  const locale = useLocale();
  const isEn = locale === "en";
  // Collect order data in the parent
  const [orderData, setOrderData] = useState({
    paymentType: "",
    shippingAddress: {
      name: "",
      city: "",
      street: "",
      phone: "",
    },
    coupon: "NEW_PERCENTAGE",
  });

  const { isPlacingOrder, placeOrder, isOrderSuccess } = usePlaceOrder();

  return (
    <Carousel className="w-full dark:bg-background" opts={{ watchDrag: false }}>
      {/* Carousel content 3 pages [placing order process] */}
      <CarouselContent>
        {/* Address section first step */}
        <CarouselItem>
          <CheckoutProgressUi step={1} />

          <Heading
            className={cn(isEn ? "text-left" : "text-right", "mx-6 !text-2xl")}
          >
            {t("X73uyJtHXlL_VOZZYWFyl")}
          </Heading>
          <AddressForm
            cart={cart}
            setOrderData={setOrderData}
            setIsFormValid={setIsFormValid}
          />
        </CarouselItem>

        {/* Payment section second step */}
        <CarouselItem>
          <CheckoutProgressUi step={2} />

          <Heading
            className={cn(isEn ? "text-left" : "text-right", "mx-6 !text-2xl")}
          >
            {t("-aN40eBi4jXBqrH8rJM27")}
          </Heading>
          <PaymentSelect setOrderData={setOrderData} orderData={orderData} />
        </CarouselItem>

        {/* Message section last step */}
        {(orderData.paymentType === "cash" ||
          orderData.paymentType === "card") && (
          <CarouselItem>
            <CheckoutProgressUi step={3} />
            <SuccefullyOrder />
          </CarouselItem>
        )}
      </CarouselContent>

      {/* Next and previous btns */}
      <div className="flex items-center justify-between gap-4 p-8">
        {/* Next btn */}
        <CarouselNext
          className={cn(
            "px-6 text-lg font-semibold text-white hover:bg-primary/80 hover:text-white",
          )}
          disabled={isFormValid}
          placeOrder={placeOrder}
          orderData={orderData}
        />

        {/* Previous btn */}
        {(!isOrderSuccess || isPlacingOrder) && (
          <CarouselPrevious className={cn("px-6 text-lg font-semibold")} />
        )}
      </div>
    </Carousel>
  );
}
