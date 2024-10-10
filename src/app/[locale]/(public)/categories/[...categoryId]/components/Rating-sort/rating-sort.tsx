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
  selectedRating: number[]; // Passed from parent
  setSelectedRating: React.Dispatch<React.SetStateAction<number[]>>; // Passed from parent
};

export default function RatingSort({
  key,
  product,
  selectedRating,
  setSelectedRating,
}: RatingSortProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Create query string by merging current search params with key-value pairs
  const createQueryString = useCallback(
    (rating: number[]) => {
      const params = new URLSearchParams(searchParams.toString());

      // Clear previous subCategory params
      params.delete("rating");

      // Add selected subcategories one by one
      rating.forEach((r) => {
        params.append("rating", String(r)); // Use 'append' for multiple same keys
      });

      return params.toString();
    },
    [searchParams],
  );

  const rating = product.ratings?.average;

  const isChecked = rating ? selectedRating.includes(rating) : false;

  const handleCheckboxChange = () => {
    if (rating) {
      const updatedSubCategories = !isChecked
        ? [...selectedRating, rating] // Add subcategory
        : selectedRating.filter((item) => item !== rating); // Remove subcategory

      setSelectedRating(updatedSubCategories);

      // Update URL with the current state of selectedSubCategories
      const updatedQueryString = createQueryString(updatedSubCategories);
      router.push(`${pathname}?${updatedQueryString}`);
    }
  };

  if (Number(rating) === 0) return;

  return (
    <li key={key} className="mb-3 flex items-center">
      <Checkbox
        id={String(rating!)}
        className="me-3"
        checked={isChecked}
        onCheckedChange={handleCheckboxChange}
        value={String(selectedRating)}
      />
      <Label htmlFor={String(rating)} className="text-lg">
        <RatingStars rate={rating} />
      </Label>

      <span className="mx-2 text-sm font-normal">({rating})</span>
    </li>
  );
}
