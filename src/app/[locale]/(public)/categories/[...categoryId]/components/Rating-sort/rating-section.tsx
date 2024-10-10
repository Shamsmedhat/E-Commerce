"use client";
import React, { useState } from "react";
import RatingSort from "./rating-sort";

export default function RatingSection({ products }: { products: Product[] }) {
  const [selectedRating, setSelectedRating] = useState<number[]>([]);
  const uniqueRatings = Array.from(
    new Set(products.map((p) => p.ratings?.average)),
  );

  console.log("uniqueRatings", uniqueRatings);
  return (
    <ul className="flex flex-col">
      {uniqueRatings.map((rating) => {
        // Find a product with this rating to pass to RatingSort
        const product = products.find((p) => p.ratings?.average === rating);

        return (
          <RatingSort
            key={product?._id!}
            product={product!}
            selectedRating={selectedRating}
            setSelectedRating={setSelectedRating}
          />
        );
      })}
    </ul>
  );
}
