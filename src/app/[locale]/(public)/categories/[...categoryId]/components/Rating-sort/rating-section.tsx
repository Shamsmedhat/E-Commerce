"use client";
import React from "react";
import RatingSort from "./rating-sort";

export default function RatingSection({ products }: { products: Product[] }) {
  const uniqueRatings = Array.from(
    new Set(products.map((p) => p.ratings?.average)),
  );

  return (
    <ul className="flex flex-col">
      {uniqueRatings.map((rating) => {
        // Find a product with this rating to pass to RatingSort
        const product = products.find((p) => p.ratings?.average === rating);

        return <RatingSort key={product?._id!} product={product!} />;
      })}
    </ul>
  );
}
