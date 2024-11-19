import { useEffect, useState } from "react";

export function useGuestCart() {
  const [guestCart, setGuestCart] = useState<any[]>([]);

  const loadCartFromLocalStorage = () => {
    if (typeof window !== "undefined") {
      const storedCart = JSON.parse(localStorage.getItem("guest-cart") || "[]");
      setGuestCart(storedCart);
    }
  };

  useEffect(() => {
    // Initial load
    loadCartFromLocalStorage();

    // Listen for localStorage changes
    const handleStorageChange = () => {
      loadCartFromLocalStorage();
    };

    window.addEventListener("storage", handleStorageChange);

    // Clean up event listener
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return guestCart;
}
