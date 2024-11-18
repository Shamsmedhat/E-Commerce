"use client";
import { LuMinus, LuPlus } from "react-icons/lu";
import { Input } from "../ui/input";
import { useState } from "react";
import { cn } from "@/lib/utils";

/**
 * A Quantity Button component that allows users to increase, decrease, or directly input a quantity value.
 * The component updates the quantity in localStorage for a guest cart.
 *
 * @param {Object} props - The props for the QuantityBtn component.
 * @param {string} [props.className] - Optional additional class names for the main container.
 * @param {boolean} [props.isWithBorder=true] - Determines whether the input should have borders on the top and bottom. Defaults to `true`.
 * @param {string} [props.btnsClassName] - Optional additional class names for the increment and decrement buttons.
 * @param {number} [props.size=15] - Optional prop for icons size, default is `15`.
 * @param {number} [props.currentQty=1] - Initial quantity of the product.
 * @param {number} [props.productPrice] - The price of the product.
 * @param {function} [props.setProductPrice] - Function to set the total price of the product based on quantity.
 * @param {string} [props.productId] - The ID of the product.
 * @param {number} [props.stock] - The stock quantity for the product.
 * @returns {JSX.Element} The rendered component.
 */

type QuantityBtnProps = {
  className?: string;
  isWithBorder?: boolean;
  btnsClassName?: string;
  size?: number;
  currentQty?: number;
  productPrice: number;
  setProductPrice: (price: number) => void;
  productId: string;
  stock: number;
};

export default function QuantityGuestCartBtn({
  className,
  isWithBorder = true,
  btnsClassName,
  size = 15,
  currentQty = 1,
  productPrice,
  setProductPrice,
  productId,
  stock,
}: QuantityBtnProps) {
  const [qty, setQty] = useState(currentQty);
  // Store the fixed unit price
  const [unitPrice] = useState(productPrice);

  // Load the guest cart from localStorage, if it exists
  const loadCartFromLocalStorage = () => {
    const cart = localStorage.getItem("guest-cart");
    return cart ? JSON.parse(cart) : [];
  };

  // Save the updated cart to localStorage
  const saveCartToLocalStorage = (updatedCart: any) => {
    localStorage.setItem("guest-cart", JSON.stringify(updatedCart));
  };

  // Update the cart with the new quantity
  const updateCart = (newQty: number) => {
    const updatedCart = loadCartFromLocalStorage();
    const productIndex = updatedCart.findIndex(
      (item: any) => item.product === productId,
    );

    if (productIndex !== -1) {
      updatedCart[productIndex].quantity = newQty; // Update the quantity of the existing product
    } else {
      updatedCart.push({
        product: productId,
        quantity: newQty,
      }); // Add the product if it's not in the cart
    }

    saveCartToLocalStorage(updatedCart);

    // Trigger a change to ensure the GuestCart component re-renders
    window.dispatchEvent(new Event("storage")); // Manually trigger the storage event
    setProductPrice(unitPrice * newQty); // Update the price based on the new quantity
  };

  const handleIncrease = () => {
    if (qty >= stock) {
      return; // Don't allow quantity to exceed stock
    }

    const newQty = qty + 1;
    setQty(newQty);
    updateCart(newQty); // Update the cart with the new quantity
  };

  const handleDecrease = () => {
    if (qty <= 1) {
      return; // Prevent decreasing below 1
    }

    const newQty = qty - 1;
    setQty(newQty);
    updateCart(newQty); // Update the cart with the new quantity
  };

  return (
    <div
      className={cn(
        className,
        "flex h-fit w-fit flex-row border-[1px] dark:border-white/70",
      )}
    >
      {/* Decrease Button */}
      <button
        onClick={handleDecrease}
        className={cn(
          btnsClassName,
          qty > 1
            ? "hover:bg-red-200 hover:transition-colors hover:duration-200 dark:hover:text-background"
            : "cursor-not-allowed",
          "px-2",
        )}
        disabled={qty <= 1}
      >
        <LuMinus size={size} />
      </button>

      {/* Input Field */}
      <div>
        <Input
          type="number"
          className={cn(
            isWithBorder ? "border-y-0" : "border-0",
            "no-spinner w-[3.5rem] rounded-none p-0 text-center focus-visible:ring-primary dark:border-white/70",
          )}
          value={qty}
          onChange={(e) => {
            const inputQty = parseInt(e.target.value, 10);
            if (inputQty >= 1 && inputQty <= stock) {
              setQty(inputQty);
              updateCart(inputQty); // Update the cart with the new quantity from input
            }
          }}
          min={1}
          max={stock} // Prevent user from entering more than available stock
        />
      </div>

      {/* Increase Button */}
      <button
        onClick={handleIncrease}
        className={cn(
          btnsClassName,
          stock > qty
            ? "hover:bg-green-200 hover:transition-colors hover:duration-200 dark:hover:text-background"
            : "cursor-not-allowed",
          "px-2",
        )}
        disabled={qty >= stock}
      >
        <LuPlus size={size} />
      </button>
    </div>
  );
}
