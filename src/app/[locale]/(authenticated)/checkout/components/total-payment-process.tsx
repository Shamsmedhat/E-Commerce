"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

// Translation
import { useTranslations } from "next-intl";

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
import useEmblaCarousel from "embla-carousel-react";
import SuccefullyOrder from "./succefully-order";

export default function TotalPaymentProcess(cart: CartData) {
  // Translation
  const t = useTranslations();
  // State [isForm  valid to display the next btn if its not valid]
  const [isFormValid, setIsFormValid] = useState(true);

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

  const { isPlacingOrder, placeOrder } = usePlaceOrder();

  return (
    <Carousel className="w-full" opts={{ watchDrag: false }}>
      {/* Carousel content 3 pages [placing order process] */}
      <CarouselContent>
        {/* Address section first step */}
        <CarouselItem>
          <Heading className="text-left !text-2xl">
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
          <Heading className="text-left !text-2xl">
            {t("-aN40eBi4jXBqrH8rJM27")}
          </Heading>
          <PaymentSelect setOrderData={setOrderData} orderData={orderData} />
        </CarouselItem>

        {/* Message section last step */}
        {(orderData.paymentType === "cash" ||
          orderData.paymentType === "card") && (
          <CarouselItem>
            <SuccefullyOrder />
          </CarouselItem>
        )}
      </CarouselContent>

      {/* Next and previous btns */}
      <div className="flex items-center justify-between gap-4">
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
        <CarouselPrevious className={cn("px-6 text-lg font-semibold")} />
      </div>
    </Carousel>
  );
}
