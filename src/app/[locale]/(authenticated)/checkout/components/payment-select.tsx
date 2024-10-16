"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { handleEnText } from "@/lib/utils/helpers";

// Translation
import { useLocale, useTranslations } from "next-intl";

// Form
import { useForm } from "react-hook-form";

// Validation
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Ui
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

// Place order function
import { usePlaceOrder } from "@/lib/utils/data/orders-data";

// Images
import masterCard from "@/../public/assets/mastercard.png";
import visa from "@/../public/assets/visa.png";
import { useAppDispatch } from "@/hooks/reduxHooks";
import { addShippingFees } from "@/lib/features/checkout/shipping-fees";
import { toast } from "react-toastify";

// Form schema
const FormSchema = z.object({
  type: z.enum(["card", "cash"], {
    required_error: "You need to select a payment method",
  }),
  delivery: z.enum(["free-delivery", "paid-delivery"], {
    required_error: "You need to select a delivery method",
  }),
});

// Types
type PaymentSelectProps = {
  orderData: PlaceOrder;
  setOrderData: React.Dispatch<
    React.SetStateAction<{
      paymentType: string;
      shippingAddress: {
        name: string;
        city: string;
        street: string;
        phone: string;
      };
      coupon: string;
    }>
  >;
};

export function PaymentSelect({ setOrderData, orderData }: PaymentSelectProps) {
  // Translation
  const t = useTranslations();
  const locale = useLocale();

  const dispatch = useAppDispatch();

  // Queries
  const { isPlacingOrder, placeOrder } = usePlaceOrder();

  // Use from
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  // Use watch to track form values
  const { getValues, watch } = form;

  // Watch for changes in the type field
  const paymentType = watch("type");

  // Delivery fees
  const deliveryFees = 500;

  // On submit function
  function onSubmit(values: z.infer<typeof FormSchema>) {
    // First update the main order data object
    setOrderData((prevState) => ({
      ...prevState,
      paymentType: values.type,
    }));

    values.delivery === "paid-delivery"
      ? dispatch(addShippingFees(500))
      : dispatch(addShippingFees(0));
    console.log("orderData", orderData);
    console.log("values", values);
    toast.success(
      `You payments is saved successfully: method ${values.type} and your delivery fees is ${values.delivery === "paid-delivery" ? "500" : "Free"}.`,
    );
  }

  function getDateTwoDaysLater() {
    const today = new Date();
    today.setDate(today.getDate() + 2);

    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      month: "short",
      day: "numeric",
    };
    return new Intl.DateTimeFormat("en-US", options).format(today);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mb-7 space-y-6">
        {/*  Payment methods [credit or debit or cash] */}
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            // Form item
            <FormItem className="space-y-3">
              <FormControl>
                <RadioGroup
                  value={paymentType}
                  // Update the field on change
                  onValueChange={field.onChange}
                  className="flex flex-col space-y-1"
                >
                  <div className="mb-6 flex flex-col-reverse gap-6 text-right">
                    {/* Cash option ======================================================================= */}
                    <div
                      className={cn(
                        handleEnText(locale),
                        paymentType === "cash"
                          ? "border-primary shadow-sm shadow-primary/40"
                          : "border-primary-foreground/20 shadow-sm shadow-primary-foreground/20",
                        "space-y-4 border p-6",
                      )}
                    >
                      <FormItem className="flex flex-col items-center justify-start space-x-3 space-y-0">
                        <div className="flex w-full items-center gap-2">
                          <FormControl>
                            <RadioGroupItem value="cash" />
                          </FormControl>
                          <FormLabel className="flex w-full cursor-pointer justify-start text-xl font-bold text-primary">
                            {t("8pb8ZehJHHgiZ2pZBxX1Z")}
                          </FormLabel>
                        </div>
                        <FormDescription className="flex w-full items-center justify-start py-4 text-lg">
                          {t("X8FqKWJglAt-DarJSU2xQ")}
                        </FormDescription>
                      </FormItem>
                    </div>

                    {/* Card option ======================================================================= */}
                    <div
                      className={cn(
                        handleEnText(locale),
                        paymentType === "card"
                          ? "border-primary shadow-sm shadow-primary/40"
                          : "border-primary-foreground/20 shadow-sm shadow-primary-foreground/20",
                        "border p-6",
                      )}
                    >
                      <FormItem className="flex flex-col items-start justify-center space-x-3 space-y-5">
                        {/* Visa select */}
                        <div className="flex w-full cursor-pointer items-center gap-2">
                          <FormControl>
                            <RadioGroupItem value="card" />
                          </FormControl>
                          <FormLabel className="flex w-full cursor-pointer justify-start text-xl font-bold text-primary">
                            {t("HCWg5doCb58mbrqTbimm1")}
                          </FormLabel>
                        </div>

                        {/* Card images section */}
                        <div className="flex w-full gap-6">
                          {/* Visa Card */}
                          <div className="h-full w-1/2 space-y-5 border border-primary bg-slate-50 p-4 shadow-sm">
                            <div className="flex gap-6">
                              <Image
                                src={visa}
                                alt="visa card payment"
                                className="max-h-20 w-14 min-w-9"
                              />
                            </div>
                            <div className="flex items-center justify-center">
                              <p className="flex gap-4 text-2xl font-extrabold">
                                <span>****</span>
                                <span>****</span>
                                <span>****</span>
                                <span>1234</span>
                              </p>
                            </div>
                            <div className="flex flex-col items-start">
                              <p className="text-base uppercase text-primary-foreground/70">
                                expires end
                              </p>
                              <span className="font-bold">12/27</span>
                            </div>
                          </div>

                          {/* MasterCard */}
                          <div className="h-full w-1/2 space-y-5 border border-primary bg-slate-50 p-4 shadow-sm">
                            <div className="flex gap-6">
                              <Image
                                src={masterCard}
                                alt="master card payment"
                                className="max-h-20 w-14 min-w-9"
                              />
                            </div>
                            <div className="flex items-center justify-center">
                              <p className="flex gap-4 text-2xl font-extrabold">
                                <span>****</span>
                                <span>****</span>
                                <span>****</span>
                                <span>1234</span>
                              </p>
                            </div>
                            <div className="flex flex-col items-start">
                              <p className="text-base uppercase text-primary-foreground/70">
                                expires end
                              </p>
                              <span className="font-bold">12/27</span>
                            </div>
                          </div>
                        </div>
                      </FormItem>
                    </div>
                  </div>
                </RadioGroup>
              </FormControl>

              {/* Show error message */}
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Delivery opts */}
        <FormField
          control={form.control}
          name="delivery"
          render={({ field }) => (
            // Form item
            <FormItem className="space-y-3">
              <FormControl>
                <RadioGroup onValueChange={field.onChange}>
                  <div className="flex border border-primary-foreground/20 p-6 shadow-sm">
                    {/* Free delivery */}
                    <div className="flex w-1/2 border-spacing-2 flex-col items-start justify-center gap-4 space-x-2 border-r-2 p-3">
                      <FormLabel
                        htmlFor="free-delivery"
                        className="flex w-full cursor-pointer items-center justify-start gap-2"
                      >
                        <RadioGroupItem
                          value="free-delivery"
                          id="free-delivery"
                        />
                        {t("vPSi_t8RLCFm61AEZ7bKd")}
                      </FormLabel>

                      <FormDescription className="text-base font-semibold text-primary-foreground/50">
                        {t("cwMUWzqHpZXZozdpScWVJ")}
                      </FormDescription>

                      <FormLabel className="border border-primary-foreground/20 p-2">
                        {t("d6uC0A3BRdI4TsUcKuch4")}
                      </FormLabel>
                    </div>

                    {/* Paid delivery */}
                    <div className="flex flex-grow border-spacing-2 flex-col items-start justify-center gap-4 space-x-2 p-3 ps-6">
                      <FormLabel
                        htmlFor="paid-delivery"
                        className="flex w-full cursor-pointer items-center justify-start gap-2"
                      >
                        <RadioGroupItem
                          value="paid-delivery"
                          id="paid-delivery"
                        />
                        {t("IgLKSbkOb6yVwR2bfItlz")} {getDateTwoDaysLater()}
                      </FormLabel>

                      <FormDescription className="text-base font-semibold text-primary-foreground/50">
                        {t("kCr5LyLTJALcWzF2E21i3")}
                      </FormDescription>

                      <FormLabel className="border border-primary-foreground/20 p-2">
                        {deliveryFees} {t("fU01whrYbLGxy6qtBGMEo")}
                      </FormLabel>
                    </div>
                  </div>
                </RadioGroup>
              </FormControl>

              {/* Show error message */}
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full text-base text-white">
          {t("gWCjy3bf4girdIO5BNTGU")}
        </Button>
      </form>
    </Form>
  );
}
