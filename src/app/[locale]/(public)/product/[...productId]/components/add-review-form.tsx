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
import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";
import RatingStars from "@/components/common/RatingStars";
import SelectStarRating from "@/components/common/select-star-rating";
import { useState } from "react";
import { useAddReview } from "@/lib/utils/data/reviews-data";

const formSchema = z.object({
  review: z.string().min(2, {
    message: "review must be at least 3 characters.",
  }),
});

export function AddReviewForm({ productId }: { productId: string }) {
  const t = useTranslations();

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      review: "",
    },
  });

  const [userRating, setUserRating] = useState("");
  const { addReview, isAddingReview } = useAddReview();
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(userRating);
    console.log(values);

    const addReviewData = {
      product: productId,
      rating: Number(userRating),
      comment: values.review,
    };
    addReview(addReviewData);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="my-5 space-y-8 px-1 md:px-0"
      >
        <FormField
          control={form.control}
          name="review"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xl font-semibold text-primary">
                {t("A2V9rEPwUi-_-0z4YRXvF")}
              </FormLabel>
              <SelectStarRating
                maxRating={5}
                size={18}
                onSetRating={setUserRating}
                defaultValue={0}
              />
              <FormControl>
                <Input placeholder={t("DTIqKyyNRZFz1pdke2zXF")} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">{t("CYiH98HNvPJdysR9V_zru")}</Button>
      </form>
    </Form>
  );
}
