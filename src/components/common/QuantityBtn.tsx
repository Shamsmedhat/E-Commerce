import { LuMinus, LuPlus } from "react-icons/lu";

import { Input } from "../ui/input";
import { useState } from "react";
import { cn } from "@/lib/utils";

/**
 * A Quantity Button component that allows users to increase, decrease, or directly input a quantity value.
 * The component also ensures that the quantity is non-negative.
 *
 * @param {Object} props - The props for the QuantityBtn component.
 * @param {string} [props.className] - Optional additional class names for the main container.
 * @param {boolean} [props.isWithBorder=true] - Determines whether the input should have borders on the top and bottom. Defaults to `true`.
 * @param {string} [props.btnsClassName] - YOU MUST USE !important to ensure the sytle is applied, Optional additional class names for the increment and decrement buttons.
 * @param {size} [props.size=15] - Optinal prop for icons size the default value is "15" as a number.
 * @returns {JSX.Element} The rendered component.
 */
export default function QuantityBtn({
  className,
  isWithBorder = true,
  btnsClassName,
  size = 15,
}: {
  className?: string;
  isWithBorder?: boolean;
  btnsClassName?: string;
  size?: number;
}) {
  const [qty, setQty] = useState(0);

  /**
   * Handles the change event for the input, ensuring the quantity remains non-negative.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} e - The change event from the input element.
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Ensure non-negative numbers
    const value = Math.max(0, Number(e.target.value));
    setQty(value);
  };

  return (
    <div className={cn(className, "flex h-fit w-fit flex-row border-[1px]")}>
      <button
        onClick={() => setQty((qty) => qty + 1)}
        className={cn(
          btnsClassName,
          "px-2 hover:bg-green-200 hover:transition-colors hover:duration-200",
        )}
      >
        <LuPlus size={size} />
      </button>
      <div>
        <Input
          type="number"
          className={cn(
            isWithBorder ? "border-y-0" : "border-0",
            "no-spinner w-[3.5rem] rounded-none p-0 text-center focus-visible:ring-primary",
          )}
          value={qty}
          onChange={handleChange}
        />
      </div>
      <button
        onClick={() => setQty((qty) => Math.max(0, qty - 1))}
        className={cn(
          btnsClassName,
          "px-2 hover:bg-red-200 hover:transition-colors hover:duration-200",
        )}
      >
        <LuMinus size={size} />
      </button>
    </div>
  );
}
