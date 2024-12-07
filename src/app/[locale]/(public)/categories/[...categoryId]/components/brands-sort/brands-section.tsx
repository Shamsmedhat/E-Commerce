"use client";
import React from "react";
import BrandsSort from "./brands-sort";

export default function BrandsSection({ products }: { products: Product[] }) {
  const uniqueBrands = Array.from(
    //todo
    new Set(products.map((p) => (p.brand as any)?.translations?.data?.name)),
  );

  return (
    <ul className="flex flex-col gap-2">
      {uniqueBrands.map((brandName) => {
        // Find a product with this subcategory to pass to SubCategorySort
        const product = products.find(
          (p) => (p.brand as any)?.translations?.data?.name === brandName,
        );
        return <BrandsSort key={product?._id!} product={product!} />;
      })}
    </ul>
  );
}
