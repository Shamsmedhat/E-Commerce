"use client";

import React, {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
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
import {
  MdOutlineDoneOutline,
  MdOutlinePayment,
  MdVerified,
} from "react-icons/md";
import { FaRegAddressCard } from "react-icons/fa";

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

  // Validation address form schema
  const formSchema = z.object({
    name: z.string().min(2, { message: t("nkuzjsBa0sEDba1d-6QmI") }),
    city: z
      .string()
      .max(20, { message: t("KZFjUAMlQhugvtSkcmYbk") })
      .min(2, { message: t("RFbEH6qG91PIpg5yZoM7M") }),
    street: z
      .string()
      .max(60, { message: t("QxQW5bU51dpTtkI4dGrQ1") })
      .min(3, { message: t("vmNnxIXcgnVs2U_7nW6Iz") }),
    address: z
      .string()
      .max(60, { message: t("L3ZZzp1iMnM3Lc2kaaxWt") })
      .min(3, { message: t("vOcwsl_3OUOgX8CDIflDW") }),
    phoneNumber: z
      .string()
      .regex(/^01/, { message: t("4leZm1z7cxhKnjZBQL-pb") })
      .min(11, {
        message: t("Gz_z_GsLUtMCkEF4Rmy-8"),
      })
      .max(11, {
        message: t("t1_Bcabo_uFXvZX8gTqDA"),
      }),
  });

  // Locale
  const locale = useLocale();

  const isEn = locale === "en";

  // User session
  const session = useSession();

  // User name
  const userName = session.data?.user.name;

  // Use form configuration
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
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
    <div className="mb-6 flex flex-col gap-6 p-4 text-right xsm:p-8 md:flex-row-reverse">
      {/* Editable form to write the delivery address */}

      <div
        className={cn(
          handleEnText(locale),
          "border border-primary-foreground/20 p-6 shadow-md dark:bg-black/30 md:w-1/2",
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
                <FormItem
                  className={cn(
                    isEn ? "flex-row-reverse" : "flex-row",
                    "flex items-center gap-2",
                  )}
                >
                  <FormLabel className="w-28 text-base font-bold text-primary-foreground before:ml-0.5 before:text-red-500 before:content-['*'] dark:text-white/80">
                    {t("tlnNNAqRJ5eIhodZwFSR6")}
                  </FormLabel>
                  <div className="w-full">
                    <FormControl className="mb-2">
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
                <FormItem
                  className={cn(
                    isEn ? "flex-row-reverse" : "flex-row",
                    "flex items-center gap-2",
                  )}
                >
                  <FormLabel className="w-28 text-base font-bold text-primary-foreground before:ml-0.5 before:text-red-500 before:content-['*'] dark:text-white/80">
                    {t("rm_yPJhwo8iXo3-YwjlcI")}
                  </FormLabel>
                  <div className="w-full">
                    <FormControl className="mb-2">
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
                <FormItem
                  className={cn(
                    isEn ? "flex-row-reverse" : "flex-row",
                    "flex items-center gap-2",
                  )}
                >
                  <FormLabel className="w-28 text-base font-bold text-primary-foreground before:ml-0.5 before:text-red-500 before:content-['*'] dark:text-white/80">
                    {t("IrsHp_zHBIWL320yKSASk")}
                  </FormLabel>
                  <div className="w-full">
                    <FormControl className="mb-2">
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
                <FormItem
                  className={cn(
                    isEn ? "flex-row-reverse" : "flex-row",
                    "flex items-center gap-2",
                  )}
                >
                  <FormLabel className="w-28 text-base font-bold text-primary-foreground before:ml-0.5 before:text-red-500 before:content-['*'] dark:text-white/80">
                    {t("X73uyJtHXlL_VOZZYWFyl")}
                  </FormLabel>
                  <div className="w-full">
                    <FormControl className="mb-2">
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
                <FormItem
                  className={cn(
                    isEn ? "flex-row-reverse" : "flex-row",
                    "flex items-center gap-2",
                  )}
                >
                  <FormLabel className="w-28 text-[0.9rem] font-bold text-primary-foreground before:ml-0.5 before:text-red-500 before:content-['*'] dark:text-white/80">
                    {t("bu6dQACtNKhPl5evXvAX7")}
                  </FormLabel>
                  <div className="w-full">
                    <FormControl className="mb-2">
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
          "space-y-4 border p-6 shadow-md dark:bg-black/30 md:w-1/2",
        )}
      >
        {/* Name */}
        <div
          className={cn(
            isEn ? "flex-row-reverse" : "flex-row",
            "flex items-center justify-start gap-5",
          )}
        >
          <label className="font-bold text-primary-foreground dark:text-white/80">
            {t("tlnNNAqRJ5eIhodZwFSR6")}
          </label>
          <input
            disabled
            readOnly
            value={formData.watchedName}
            className="bg-white text-left font-semibold text-primary-foreground/50 placeholder:text-left dark:bg-transparent dark:text-white"
          />
        </div>

        {/* City */}
        <div
          className={cn(
            isEn ? "flex-row-reverse" : "flex-row",
            "flex items-center justify-start gap-5",
          )}
        >
          <label className="font-bold text-primary-foreground dark:text-white/80">
            {t("rm_yPJhwo8iXo3-YwjlcI")}
          </label>
          <input
            disabled
            readOnly
            value={formData.watchedCity}
            className="bg-white text-left font-semibold text-primary-foreground/50 placeholder:text-left dark:bg-transparent dark:text-white"
          />
        </div>

        {/* Street */}
        <div
          className={cn(
            isEn ? "flex-row-reverse" : "flex-row",
            "flex items-center justify-start gap-5",
          )}
        >
          <label className="font-bold text-primary-foreground dark:text-white/80">
            {t("IrsHp_zHBIWL320yKSASk")}
          </label>
          <textarea
            disabled
            readOnly
            value={formData.watchedStreet}
            className="h-16 resize-none bg-white text-left font-semibold text-primary-foreground/50 placeholder:text-left dark:bg-transparent dark:text-white"
          />
        </div>

        {/* Address */}
        <div
          className={cn(
            isEn ? "flex-row-reverse" : "flex-row",
            "flex items-center justify-start gap-5",
          )}
        >
          <label className="font-bold text-primary-foreground dark:text-white/80">
            {t("X73uyJtHXlL_VOZZYWFyl")}
          </label>
          <textarea
            disabled
            readOnly
            value={formData.watchedAddress}
            className="h-16 resize-none bg-white text-left font-semibold text-primary-foreground/50 placeholder:text-left dark:bg-transparent dark:text-white"
          />
        </div>

        {/* Phone */}
        <div
          className={cn(
            isEn ? "flex-row-reverse" : "flex-row",
            "flex items-center justify-start gap-5",
          )}
        >
          <label className="font-bold text-primary-foreground dark:text-white/80">
            {t("bu6dQACtNKhPl5evXvAX7")}
          </label>
          <input
            disabled
            value={formData.watchedPhoneNumber}
            className="bg-white text-left font-semibold text-primary-foreground/50 placeholder:text-left dark:bg-transparent dark:text-white"
            readOnly
          />
        </div>

        {/* Products */}
        <div
          className={cn(
            isEn ? "flex-row-reverse" : "flex-row",
            "flex items-center justify-start gap-5",
          )}
        >
          <label className="font-bold text-primary-foreground dark:text-white/80">
            {t("Q53fzcL1aeya68ijr77LG")}
          </label>
          <div className="flex w-full flex-col">
            {" "}
            {Products.map((p) => (
              <input
                disabled
                key={p._id}
                className="w-full bg-white text-left font-semibold text-primary-foreground/50 dark:bg-transparent dark:text-white"
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
