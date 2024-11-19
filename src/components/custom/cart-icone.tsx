"use client";

import { Link } from "@/navigarion";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { LuShoppingCart } from "react-icons/lu";

export default function CartIcone({
  numbersOfitemsInCart,
}: {
  numbersOfitemsInCart: number;
}) {
  const { data: session, status: sessionStatus } = useSession();
  const [guestCart, setGuestCart] = useState<number>(0);

  useEffect(() => {
    // Function to handle loading cart data from localStorage
    const loadCartFromLocalStorage = () => {
      if (typeof window !== "undefined") {
        const storedCart = JSON.parse(
          localStorage.getItem("guest-cart") || "[]",
        );
        setGuestCart(storedCart.length);
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

  // Determine the count to display
  const displayCount =
    sessionStatus === "authenticated" ? numbersOfitemsInCart : guestCart;

  return (
    <Link href="/cart" className="relative">
      {displayCount > 0 && (
        <span className="absolute right-0 top-1 flex aspect-square min-h-4 min-w-4 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full bg-primary p-1 text-xs text-white dark:text-background">
          {displayCount}
        </span>
      )}
      <LuShoppingCart
        size={25}
        strokeWidth={1.5}
        className="transition-colors hover:text-primary"
      />
    </Link>
  );
}
