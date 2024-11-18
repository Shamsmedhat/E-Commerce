"use client";

import { useState, useEffect } from "react";
import LoadingSpinner from "@/components/common/LoadingSpinner";
import { useProductsByIds } from "@/lib/utils/data/products-data";
import CartContent from "./cart-content";

export default function GuestCart() {
  const [guestCart, setGuestCart] = useState([]); // Initialize state for guest cart

  useEffect(() => {
    // Function to handle loading cart data from localStorage
    const loadCartFromLocalStorage = () => {
      if (typeof window !== "undefined") {
        const storedCart = JSON.parse(
          localStorage.getItem("guest-cart") || "[]",
        );
        setGuestCart(storedCart);
      }
    };

    // Initial load
    loadCartFromLocalStorage();

    // Listen to storage changes
    const handleStorageChange = () => {
      loadCartFromLocalStorage();
    };

    // Add event listener for localStorage changes
    window.addEventListener("storage", handleStorageChange);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const productIds = guestCart.map(
    (item: { product: string; quantity: number }) => item.product,
  );

  const {
    data: productsData,
    isError,
    isLoading,
  } = useProductsByIds(productIds);

  // Show loading spinner if data is still loading
  if (isLoading) return <LoadingSpinner />;

  // Show error message if fetching fails
  if (isError)
    return <p>Error fetching cart products. Please try again later.</p>;

  const guestCartData = {
    cart: {
      user: "guest",
      totalPrice: guestCart.reduce(
        (total: number, item: { product: string; quantity: number }) => {
          const product = productsData.find(
            (p) => p?.product._id === item.product,
          );
          if (product) {
            return total + product.product.price * item.quantity;
          }
          return total;
        },
        0,
      ),
      items: guestCart.map((item: { product: string; quantity: number }) => {
        const product = productsData.find(
          (p) => p?.product._id === item.product,
        );
        return {
          product: product
            ? {
                _id: product.product._id,
                category: product.product.category,
                subCategory: product.product.subCategory,
                brand: product.product.brand,
                cover: product.product.cover,
                price: product.product.price,
                stock: product.product.stock,
                translations: {
                  language: product.product.translations.language,
                  data: {
                    name: product.product.translations.data.name,
                    slug: product.product.translations.data.slug,
                    overview: product.product.translations.data.overview,
                  },
                  _id: product.product.translations._id,
                },
              }
            : null,
          quantity: item.quantity,
          price: product?.product.price! * item.quantity,
        };
      }),
    },
  };

  return (
    <section className="container my-10 flex flex-col lg:flex-row">
      <CartContent cart={guestCartData} />
    </section>
  );
}
