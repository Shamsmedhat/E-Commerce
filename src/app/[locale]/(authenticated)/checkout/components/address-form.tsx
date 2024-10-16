"use client";

import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { cn } from "@/lib/utils";
import { handleEnText } from "@/lib/utils/helpers";

// Session
import { useSession } from "next-auth/react";

// Translation
import { useLocale, useTranslations } from "next-intl";

// Validation
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Ui
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import LoadingSpinner from "@/components/common/LoadingSpinner";
import { MdVerified } from "react-icons/md";

// Validation address form schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  city: z
    .string()
    .max(20, { message: "City must be by max 20 characters" })
    .min(2, { message: "City must be at least 3 characters" }),
  street: z
    .string()
    .max(30, { message: "Street must be by max 30 characters" })
    .min(3, { message: "Street must be at least 3 characters" }),
  address: z
    .string()
    .max(30, { message: "Address must be by max 30 characters" })
    .min(8, { message: "Address must be at least 5 characters" }),
  phoneNumber: z
    .string()
    .regex(/^01/, { message: "Phone number must start with 01" })
    .min(11, { message: "Phone number must be at least 11 digits" }),
});

// Typs
type AddressFormProps = {
  cart: CartData;
  setIsFormValid: Dispatch<SetStateAction<boolean>>;
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

export function AddressForm({
  cart,
  setOrderData,
  setIsFormValid,
}: AddressFormProps) {
  // Translation
  const t = useTranslations();

  // Locale
  const locale = useLocale();

  // User session
  const session = useSession();

  // User name
  const userName = session.data?.user.name;

  // Use form configuration
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: userName,
      city: "",
      street: "",
      address: "",
      phoneNumber: "",
    },
  });

  // Get watch and reset function from use form
  const {
    watch,
    reset,
    formState: { isSubmitSuccessful, isSubmitting, isValid, dirtyFields },
  } = form;

  const [formData, setFormData] = useState({
    watchedName: "",
    watchedCity: "",
    watchedStreet: "",
    watchedAddress: "",
    watchedPhoneNumber: "",
  });

  // Use useEffect to update the default value after session data is loaded
  useEffect(() => {
    if (userName) {
      reset({
        name: userName,
        city: "",
        street: "",
        address: "",
        phoneNumber: "",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userName]);

  // Total Products
  const Products = cart.cart.items.map((p) => p.product.translations);

  // on submit function
  function onSubmit(values: z.infer<typeof formSchema>) {
    if (isValid) {
      // Set function to update the main place order object
      setOrderData((prevState) => ({
        ...prevState,
        shippingAddress: {
          ...prevState.shippingAddress, // Spread existing shippingAddress
          name: values.name, // Update name
          city: values.city, // Add city
          street: values.street, // Update street
          address: values.address, // Add address
          phone: values.phoneNumber, // Add phone number
        },
      }));
      setIsFormValid(true);
      setFormData({
        watchedName: values.name,
        watchedCity: values.city,
        watchedStreet: values.street,
        watchedAddress: values.address,
        watchedPhoneNumber: values.phoneNumber,
      });
      reset();
    }
    setIsFormValid(false);
  }
  return (
    <div className="mb-6 flex flex-row-reverse gap-6 text-right">
      {/* Editable form to write the delivery address */}
      <div
        className={cn(
          handleEnText(locale),
          "w-1/2 border border-primary-foreground/20 p-6 shadow-md",
        )}
      >
        {/* Form */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {/* Name field */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="flex flex-row-reverse items-center gap-2">
                  <FormLabel className="w-20 text-base font-bold text-primary-foreground before:ml-0.5 before:text-red-500 before:content-['*']">
                    {t("tlnNNAqRJ5eIhodZwFSR6")}
                  </FormLabel>
                  <div className="w-full">
                    <FormControl>
                      <Input
                        placeholder="Mohamed ahmed"
                        {...field}
                        className="text-left placeholder:text-left"
                      />
                    </FormControl>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />

            {/* City field */}
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem className="flex flex-row-reverse items-center gap-2">
                  <FormLabel className="w-20 text-base font-bold text-primary-foreground before:ml-0.5 before:text-red-500 before:content-['*']">
                    {t("rm_yPJhwo8iXo3-YwjlcI")}
                  </FormLabel>
                  <div className="w-full">
                    <FormControl>
                      <Input
                        placeholder="Cairo"
                        {...field}
                        className="text-left placeholder:text-left"
                      />
                    </FormControl>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />

            {/* Street field */}
            <FormField
              control={form.control}
              name="street"
              render={({ field }) => (
                <FormItem className="flex flex-row-reverse items-center gap-2">
                  <FormLabel className="w-20 text-base font-bold text-primary-foreground before:ml-0.5 before:text-red-500 before:content-['*']">
                    {t("IrsHp_zHBIWL320yKSASk")}
                  </FormLabel>
                  <div className="w-full">
                    <FormControl>
                      <Input
                        placeholder="Nile Street"
                        {...field}
                        className="text-left placeholder:text-left"
                      />
                    </FormControl>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />

            {/* Address field */}
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem className="flex flex-row-reverse items-center gap-2">
                  <FormLabel className="w-20 text-base font-bold text-primary-foreground before:ml-0.5 before:text-red-500 before:content-['*']">
                    Address
                  </FormLabel>
                  <div className="w-full">
                    <FormControl>
                      <Input
                        placeholder="15 Nile Street, Cairo, Egypt"
                        {...field}
                        className="text-left placeholder:text-left"
                      />
                    </FormControl>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />

            {/* Phone field */}
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem className="flex flex-row-reverse items-center gap-2">
                  <FormLabel className="w-20 text-base font-bold text-primary-foreground before:ml-0.5 before:text-red-500 before:content-['*']">
                    {t("bu6dQACtNKhPl5evXvAX7")}
                  </FormLabel>
                  <div className="w-full">
                    <FormControl>
                      <Input
                        placeholder="01234567899"
                        {...field}
                        className="text-left placeholder:text-left"
                      />
                    </FormControl>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />

            {/* Submit btn */}
            <Button
              type="submit"
              disabled={
                !isValid ||
                isSubmitting ||
                (isSubmitSuccessful && Object.keys(dirtyFields).length === 0)
              }
              className={cn(
                isSubmitSuccessful && Object.keys(dirtyFields).length === 0
                  ? "bg-green-500 hover:bg-green-400"
                  : "bg-primary",
                "w-full text-base font-semibold text-white",
              )}
            >
              {isSubmitSuccessful && Object.keys(dirtyFields).length === 0 ? (
                <span className="flex flex-row-reverse items-center gap-1">
                  {t("X-8PB1v1bWLLIgyu2e0RQ")} <MdVerified />
                </span>
              ) : (
                t("pPNXMDSqSll7X-gNP8Hyz")
              )}
              {isSubmitting && <LoadingSpinner />}
            </Button>
          </form>
        </Form>
      </div>

      {/* Display final address */}
      <div
        className={cn(
          handleEnText(locale),
          isSubmitSuccessful ? "border-green-500" : "border-primary",
          "w-1/2 space-y-4 border p-6 shadow-md",
        )}
      >
        {/* Name */}
        <div className="flex flex-row-reverse items-center justify-start gap-5">
          <label className="font-bold text-primary-foreground">
            {t("tlnNNAqRJ5eIhodZwFSR6")}
          </label>
          <input
            disabled
            readOnly
            value={formData.watchedName}
            className="bg-white text-left font-semibold text-primary-foreground/50 placeholder:text-left"
          />
        </div>

        {/* City */}
        <div className="flex flex-row-reverse items-center justify-start gap-5">
          <label className="font-bold text-primary-foreground">
            {t("rm_yPJhwo8iXo3-YwjlcI")}
          </label>
          <input
            disabled
            readOnly
            value={formData.watchedCity}
            className="bg-white text-left font-semibold text-primary-foreground/50 placeholder:text-left"
          />
        </div>

        {/* Street */}
        <div className="flex flex-row-reverse items-start justify-start gap-5">
          <label className="font-bold text-primary-foreground">
            {t("IrsHp_zHBIWL320yKSASk")}
          </label>
          <textarea
            disabled
            readOnly
            value={formData.watchedStreet}
            className="h-16 resize-none bg-white text-left font-semibold text-primary-foreground/50 placeholder:text-left"
          />
        </div>

        {/* Address */}
        <div className="flex flex-row-reverse items-start justify-start gap-5">
          <label className="font-bold text-primary-foreground">
            {t("X73uyJtHXlL_VOZZYWFyl")}
          </label>
          <textarea
            disabled
            readOnly
            value={formData.watchedAddress}
            className="h-16 resize-none bg-white text-left font-semibold text-primary-foreground/50 placeholder:text-left"
          />
        </div>

        {/* Phone */}
        <div className="flex flex-row-reverse items-center justify-start gap-5">
          <label className="font-bold text-primary-foreground">
            {t("bu6dQACtNKhPl5evXvAX7")}
          </label>
          <input
            disabled
            value={formData.watchedPhoneNumber}
            className="bg-white text-left font-semibold text-primary-foreground/50 placeholder:text-left"
            readOnly
          />
        </div>

        {/* Products */}
        <div className="flex flex-row-reverse items-center justify-start gap-5">
          <label className="font-bold text-primary-foreground">
            {t("Q53fzcL1aeya68ijr77LG")}
          </label>
          <div className="flex w-full flex-col">
            {" "}
            {Products.map((p) => (
              <input
                disabled
                key={p._id}
                className="w-full bg-white text-left font-semibold text-primary-foreground/50"
                value={p.data.name.split(" ").slice(0, 4).join(" ")}
                readOnly // To make it non-editable without using pointer-events
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
