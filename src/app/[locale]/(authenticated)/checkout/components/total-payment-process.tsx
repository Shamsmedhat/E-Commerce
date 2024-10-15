"use client";
import React, { useState } from "react";
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
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

export default function TotalPaymentProcess(cart: CartData) {
  const t = useTranslations();
  const [isFormValid, setIsFormValid] = useState(true);
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

  console.log("orderData", orderData);
  return (
    <Carousel className="w-full" opts={{ watchDrag: false }}>
      <CarouselContent>
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
        <CarouselItem>
          <Heading className="text-left !text-2xl">
            {t("-aN40eBi4jXBqrH8rJM27")}
          </Heading>
          <PaymentSelect setOrderData={setOrderData} orderData={orderData} />
        </CarouselItem>
        {/* Ensure all items are not draggable */}
        <CarouselItem>3</CarouselItem>
      </CarouselContent>
      <div className="flex items-center justify-between gap-4">
        <CarouselNext
          className={cn(
            "px-6 text-lg font-semibold text-white hover:bg-primary/80 hover:text-white",
          )}
          // disabled={isFormValid}
        />
        <CarouselPrevious className={cn("px-6 text-lg font-semibold")} />
      </div>
    </Carousel>
  );
}
