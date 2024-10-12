"use client";
import { LuMinus, LuPlus } from "react-icons/lu";
import { Input } from "../ui/input";
import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  useAddToCart,
  useDeleteProductFromCart,
} from "@/lib/utils/data/cart-data";

/**
 * A Quantity Button component that allows users to increase, decrease, or directly input a quantity value.
 * The component ensures that the quantity is non-negative and calculates the price based on the unit price.
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
export default function QuantityBtn({
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
  const { addToCart, isAddingToCart } = useAddToCart();

  /**
   * Handles the change event for the input, ensuring the quantity remains non-negative.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} e - The change event from the input element.
   */
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = Math.max(1, Number(e.target.value));
    setQty(value);
    // Calculate the total price based on the unit price
    setProductPrice(unitPrice * value);
  }

  function handleIncrease() {
    // Check if the current qty is already equal to or greater than the stock
    if (qty >= stock) {
      // Exit the function and do nothing
      return;
    }

    const newQty = qty + 1;
    // Product data object with updated quantity
    const productData = {
      product: productId,
      // Ensure we set 1 or increment by 1
      quantity: newQty,
    };

    setQty(newQty);
    // Use the unit price to calculate the total price
    setProductPrice(unitPrice * newQty);
    addToCart(productData);
  }

  function handleDecrease() {
    if (qty <= 1) {
      // Exit the function and do nothing
      return;
    }
    const newQty = Math.max(1, qty - 1);
    // Product data object with updated quantity
    const productData = {
      product: productId,
      quantity: newQty, // Ensure we set 1 or increment by 1
    };
    setQty(newQty);

    // Use the unit price to calculate total price
    setProductPrice(unitPrice * newQty);
    addToCart(productData);
  }

  return (
    <div className={cn(className, "flex h-fit w-fit flex-row border-[1px]")}>
      {/* Decrease Button */}
      <button
        onClick={() => handleDecrease()}
        className={cn(
          btnsClassName,
          qty > 1
            ? "hover:bg-red-200 hover:transition-colors hover:duration-200"
            : "cursor-not-allowed",
          "px-2",
        )}
        disabled={qty <= 1} // Disable decrease button when qty is 1 or less
      >
        <LuMinus size={size} />
      </button>

      {/* Input Field */}
      <div>
        <Input
          type="number"
          className={cn(
            isWithBorder ? "border-y-0" : "border-0",
            "no-spinner w-[3.5rem] rounded-none p-0 text-center focus-visible:ring-primary",
          )}
          value={qty}
          onChange={(e) => {
            const inputQty = parseInt(e.target.value, 10);
            if (inputQty >= 1 && inputQty <= stock) {
              setQty(inputQty); // Set qty if it is within the valid range
              setProductPrice(unitPrice * inputQty); // Update product price
            }
          }}
          min={1}
          max={stock} // Prevent user from entering more than available stock
        />
      </div>

      {/* Increase Button */}
      <button
        onClick={() => handleIncrease()}
        className={cn(
          btnsClassName,
          stock > qty
            ? "hover:bg-green-200 hover:transition-colors hover:duration-200"
            : "cursor-not-allowed",
          "px-2",
        )}
        disabled={qty >= stock} // Disable increase button when qty reaches stock limit
      >
        <LuPlus size={size} />
      </button>
    </div>
  );
}
