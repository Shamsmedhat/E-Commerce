"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { usePlaceOrder } from "@/lib/utils/data/orders-data";
import { handleEnText } from "@/lib/utils/helpers";
import { cn } from "@/lib/utils";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import masterCard from "@/../public/assets/mastercard.png";
import visa from "@/../public/assets/visa.png";

const FormSchema = z.object({
  type: z.enum(["card", "cash"], {
    required_error: "You need to select a payment method.",
  }),
});

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
  const t = useTranslations();
  const locale = useLocale();
  const { isPlacingOrder, placeOrder } = usePlaceOrder();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const { getValues, watch } = form; // Use watch to track form values

  // Watch for changes in the "type" field
  const paymentType = watch("type");

  function onSubmit(values: z.infer<typeof FormSchema>) {
    setOrderData((prevState) => ({
      ...prevState,
      paymentType: values.type,
    }));

    console.log("orderData", orderData);
    placeOrder(orderData);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormControl>
                <RadioGroup
                  value={paymentType} // Set the value to the current payment type
                  onValueChange={field.onChange} // Update the field on change
                  className="flex flex-col space-y-1"
                >
                  <div className="mb-6 flex flex-col-reverse gap-6 text-right">
                    {/* Cash option */}
                    <div
                      className={cn(
                        handleEnText(locale),
                        paymentType === "cash"
                          ? "border-primary shadow-md shadow-primary/40"
                          : "border-primary-foreground/20 shadow-md shadow-primary-foreground/20",
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

                    {/* Card option */}
                    <div
                      className={cn(
                        handleEnText(locale),
                        paymentType === "card"
                          ? "border-primary shadow-md shadow-primary/40"
                          : "border-primary-foreground/20 shadow-md shadow-primary-foreground/20",
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
                          <div className="h-full w-1/2 space-y-5 border border-primary bg-slate-50 p-4 shadow-md">
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
                          <div className="h-full w-1/2 space-y-5 border border-primary bg-slate-50 p-4 shadow-md">
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
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
