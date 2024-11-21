import { useEffect, useState } from "react";

export function useGuestWishlist() {
  const [guestWishlist, setGuestWishlist] = useState<any[]>([]);

  const loadWishlistFromLocalStorage = () => {
    if (typeof window !== "undefined") {
      const storedWishlist = JSON.parse(
        localStorage.getItem("guest-wishlist") || "[]",
      );
      setGuestWishlist(storedWishlist);
    }
  };

  useEffect(() => {
    // Initial load
    loadWishlistFromLocalStorage();

    // Listen for localStorage changes
    const handleStorageChange = () => {
      loadWishlistFromLocalStorage();
    };

    window.addEventListener("storage", handleStorageChange);

    // Clean up event listener
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return guestWishlist;
}
