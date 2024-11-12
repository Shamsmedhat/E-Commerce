"use client";
import RatingStars from "@/components/common/RatingStars";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { usePathname, useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import React, { useCallback } from "react";

type RatingSortProps = {
  key: string;
  product: Product;
};

export default function RatingSort({ key, product }: RatingSortProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (values: string[]) => {
      const params = new URLSearchParams(searchParams.toString());

      values.forEach((id) => {
        // Check if the ID already exists in the params
        if (params.getAll("rating").includes(id)) {
          // Remove the ID if it exists
          const existingValues = params
            .getAll("rating")
            .filter((value) => value !== id);
          params.delete("rating");
          existingValues.forEach((value) => params.append("rating", value));
        } else {
          // Append the ID if it does not exist
          params.append("rating", id);
        }
      });

      return params.toString();
    },
    [searchParams],
  );

  function handleCheckboxChange(values: string[]) {
    const searchParam = createQueryString(values);
    router.push(`${pathname}?${searchParam}`);
  }

  const isChecked = searchParams
    .getAll("rating")
    .includes(String(product.ratings?.average));

  return (
    <li
      key={key}
      className="mb-3 flex flex-row-reverse items-center gap-2 lg:flex-row lg:gap-0"
    >
      <Checkbox
        id={String(product.ratings?.average!)}
        className="me-3 dark:border-white"
        checked={isChecked}
        onCheckedChange={() =>
          handleCheckboxChange([String(product.ratings?.average)])
        }
        // value={String(selectedRating)}
      />
      <Label
        htmlFor={String(product.ratings?.average)}
        className="cursor-pointer text-lg"
      >
        <RatingStars rate={product.ratings?.average} />
      </Label>

      <span className="mx-2 text-sm font-normal">
        ({product.ratings?.average})
      </span>
    </li>
  );
}
