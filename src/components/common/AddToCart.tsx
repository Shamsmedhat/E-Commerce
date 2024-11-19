// "use client";

// import { useEffect, useState } from "react";
// import { cn } from "@/lib/utils";

// // Translations
// import { useTranslations } from "next-intl";

// // Icones
// import { LuShoppingCart } from "react-icons/lu";
// import { FcApproval } from "react-icons/fc";
// import { CgSpinnerAlt } from "react-icons/cg";
// import { TfiShoppingCartFull } from "react-icons/tfi";

// // Data hooks
// import { useAddToCart, useCart } from "@/lib/utils/data/cart-data";
// import { useSession } from "next-auth/react";

// type AddToCartProps = {
//   productId: string;
//   isSmall?: boolean;
// };

// export default function AddToCart({
//   productId,
//   isSmall = false,
// }: AddToCartProps) {
//   // Translations
//   const t = useTranslations();

//   // States
//   const [isProductAddedToCart, setIsProductAddedToCart] = useState(false);
//   const { addToCart, isAddingToCart } = useAddToCart();

//   // React query
//   const { cart, isFetching, isError: isCartError } = useCart();

//   // Get all product's ids that exist in the cart
//   const allProductsCartId = cart?.cart.items.map((i) => i.product._id);

//   // Is the current btn exist in the product already in the cart?
//   const isProductInCart = allProductsCartId?.includes(productId);

//   // Effect [change btn UI if the product is already in the cart]
//   useEffect(() => {
// if (isCartError) {
//   setIsProductAddedToCart(false);
// } else {
//   setIsProductAddedToCart(isProductInCart ?? false);
// }
//   }, [isProductInCart, isCartError]);

//   // Function to handle adding the product to the cart
//   function handleAddingToCart(productId: string) {
// const currentProduct = cart?.cart.items.find(
//   (p) => p.product._id === productId,
// );

// let quantity = 1;
// if (currentProduct) {
//   // Only increment the quantity if it's a new action
//   quantity = currentProduct.quantity + 1;
// }

// // Product data object with updated quantity
// const productData = {
//   product: productId,
//   quantity: quantity, // Ensure we set 1 or increment by 1
// };

// setIsProductAddedToCart(true);
// addToCart(productData);
//   }

//   return (
//     <div className="flex w-auto cursor-pointer flex-col justify-center">
//       {isProductAddedToCart && (
//         <div
//           className={cn(
//             "flex-row-reverse",
//             "my-2 flex w-full flex-row-reverse items-center justify-center gap-2 text-sm",
//           )}
//         >
//           <span className="font-bold text-green-600">
//             {t("sBwmG4Xwcsv2mcubWVteU")}
//           </span>
//           <FcApproval />
//         </div>
//       )}
//       <button
//         className={cn(
//           isAddingToCart && "cursor-not-allowed",
//           isSmall ? "mx-3 p-1" : "py-1 pe-4 ps-1",
//           "flex max-w-fit items-center justify-start gap-3 rounded-full bg-primary align-middle text-xs text-white shadow-md transition-colors hover:bg-primary/80 lg:text-sm",
//         )}
//         disabled={isAddingToCart}
//         onClick={() => handleAddingToCart(productId)}
//       >
//         <span
//           className={cn(
//             isProductAddedToCart ? "bg-green-600/40" : "bg-white",
//             "rounded-full p-2",
//           )}
//         >
//           {isProductAddedToCart ? (
//             <TfiShoppingCartFull className="text-white" size={15} />
//           ) : (
//             <LuShoppingCart className="text-primary-foreground" size={15} />
//           )}
//         </span>
//         {isAddingToCart ? (
//           <span>
//             <CgSpinnerAlt className="animate-spin" size={30} color="#fff" />
//           </span>
//         ) : isSmall ? null : (
//           <span>{t("-k0yk9GUHIDLWvq7B4mRs")}</span>
//         )}
//       </button>
//     </div>
//   );
// }

// "use client";

// import { useEffect, useState } from "react";
// import { cn } from "@/lib/utils";

// // Translations
// import { useTranslations } from "next-intl";

// // Icones
// import { LuShoppingCart } from "react-icons/lu";
// import { FcApproval } from "react-icons/fc";
// import { CgSpinnerAlt } from "react-icons/cg";
// import { TfiShoppingCartFull } from "react-icons/tfi";

// // Data hooks
// import { useAddToCart, useCart } from "@/lib/utils/data/cart-data";
// import { useSession } from "next-auth/react";
// import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks"; // Assuming Redux is being used
// import { addToGuestCart } from "@/lib/features/cart/guest-cart-slice";

// // Redux action

// type AddToCartProps = {
//   productId: string;
//   isSmall?: boolean;
// };

// export default function AddToCart({
//   productId,
//   isSmall = false,
// }: AddToCartProps) {
//   // Translations
//   const t = useTranslations();

//   // States
//   const [isProductAddedToCart, setIsProductAddedToCart] = useState(false);
//   const { addToCart, isAddingToCart } = useAddToCart();

//   // Session hook to check if user is logged in
//   const { data: session } = useSession();

//   // Redux for guest cart
//   const dispatch = useAppDispatch();
//   const guestCart = useAppSelector((state) => state.guestCart);

//   // React query
//   const { cart, isFetching, isError: isCartError } = useCart();

//   // Get all product's ids that exist in the cart
//   const allProductsCartId = cart?.cart.items.map((i) => i.product._id);

//   // Is the current product in the cart?
//   const isProductInCart = allProductsCartId?.includes(productId);

//   // Effect to handle UI updates
//   useEffect(() => {
//     if (isCartError) {
//       setIsProductAddedToCart(false);
//     } else {
//       setIsProductAddedToCart(isProductInCart ?? false);
//     }
//   }, [isProductInCart, isCartError]);

//   // Function to handle adding product to the cart
//   function handleAddingToCart(productId: string) {
// const currentProduct = cart?.cart.items.find(
//   (p) => p.product._id === productId,
// );

// let quantity = 1;
// if (currentProduct) {
//   // Increment quantity if the product already exists
//   quantity = currentProduct.quantity + 1;
// }

// // Product data object with updated quantity
// const productData = {
//   product: productId,
//   quantity: quantity, // Ensure we set 1 or increment by 1
// };

// setIsProductAddedToCart(true);

// if (session) {
//   // For logged-in users, use the addToCart hook
//   addToCart(productData);
// } else {
//   // For guest users, dispatch to Redux or add to localStorage
//   dispatch(addToGuestCart(productData));
// }
//   }

//   useEffect(() => {
//     if (guestCart.length === 0) return;

//     // Retrieve existing guest cart from localStorage
//     const storedGuestCart = JSON.parse(
//       localStorage.getItem("stored-guest-cart") || "[]",
//     );
//     if (storedGuestCart.length === 0)
//       localStorage.setItem("stored-guest-cart", JSON.stringify(guestCart));

//     // Extract product IDs from both the stored cart and the new guestCart
//     const storedProductsIds = storedGuestCart.map(
//       (item: { product: string; quantity: number }) => item.product,
//     );

//     const newProductsIds = guestCart.map(
//       (item: { product: string; quantity: number }) => item.product,
//     );

//     // Check if any product in guestCart already exists in the stored cart
//     const isSelectedProductExist = storedProductsIds.includes(productId);

//     console.log(isSelectedProductExist);
//     // If new products are unique, add them to the stored cart
//     if (!isSelectedProductExist) {
//       const updatedGuestCart = [...storedGuestCart, ...guestCart];

//       // Save the updated guest cart back to localStorage
//       localStorage.setItem(
//         "stored-guest-cart",
//         JSON.stringify(updatedGuestCart),
//       );
//     }
//   }, [guestCart]);

//   return (
//     <div className="flex w-auto cursor-pointer flex-col justify-center">
//       {isProductAddedToCart && (
//         <div
//           className={cn(
//             "flex-row-reverse",
//             "my-2 flex w-full flex-row-reverse items-center justify-center gap-2 text-sm",
//           )}
//         >
//           <span className="font-bold text-green-600">
//             {t("sBwmG4Xwcsv2mcubWVteU")}
//           </span>
//           <FcApproval />
//         </div>
//       )}
//       <button
//         className={cn(
//           isAddingToCart && "cursor-not-allowed",
//           isSmall ? "mx-3 p-1" : "py-1 pe-4 ps-1",
//           "flex max-w-fit items-center justify-start gap-3 rounded-full bg-primary align-middle text-xs text-white shadow-md transition-colors hover:bg-primary/80 lg:text-sm",
//         )}
//         disabled={isAddingToCart}
//         onClick={() => handleAddingToCart(productId)}
//       >
//         <span
//           className={cn(
//             isProductAddedToCart ? "bg-green-600/40" : "bg-white",
//             "rounded-full p-2",
//           )}
//         >
//           {isProductAddedToCart ? (
//             <TfiShoppingCartFull className="text-white" size={15} />
//           ) : (
//             <LuShoppingCart className="text-primary-foreground" size={15} />
//           )}
//         </span>
//         {isAddingToCart ? (
//           <span>
//             <CgSpinnerAlt className="animate-spin" size={30} color="#fff" />
//           </span>
//         ) : isSmall ? null : (
//           <span>{t("-k0yk9GUHIDLWvq7B4mRs")}</span>
//         )}
//       </button>
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { LuShoppingCart } from "react-icons/lu";
import { FcApproval } from "react-icons/fc";
import { CgSpinnerAlt } from "react-icons/cg";
import { TfiShoppingCartFull } from "react-icons/tfi";

// Redux hooks
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { addToGuestCart } from "@/lib/features/cart/guest-cart-slice";
import { useSession } from "next-auth/react";
import { useAddToCart, useCart } from "@/lib/utils/data/cart-data";
import { updateLocalStorageCart } from "@/lib/utils/helpers";

// Types
type AddToCartProps = {
  productId: string;
  isSmall?: boolean;
};

export default function AddToCart({
  productId,
  isSmall = false,
}: AddToCartProps) {
  const t = useTranslations();
  const [isProductAddedToCart, setIsProductAddedToCart] = useState(false);
  const { addToCart, isAddingToCart } = useAddToCart();
  const session = useSession();
  const guestCart = useAppSelector((state) => state.guestCart);

  // const { cart, isError: isCartError } = useCart();
  // Redux for guest cart
  const dispatch = useAppDispatch();

  const allProductsCartId = guestCart?.map((i) => i.product);

  // Is the current btn exist in the product already in the cart?
  const isProductInCart = allProductsCartId?.includes(productId);

  // Check if product is in localStorage cart
  useEffect(() => {
    if (!session.data) {
      const storedCart = JSON.parse(localStorage.getItem("guest-cart") || "[]");
      const isProductInCart = storedCart.some(
        (item: { product: string; quantity: number }) =>
          item.product === productId,
      );
      setIsProductAddedToCart(isProductInCart);
    }
    // if (isCartError) {
    //   setIsProductAddedToCart(false);
    // }
    else {
      setIsProductAddedToCart(isProductInCart ?? false);
    }
  }, [productId, session, isProductInCart]);

  // Handle adding product to the cart
  let quantity = 1;
  function handleAddingToCart() {
    // const currentProduct = guestCart.find((p) => p.product === productId);

    // if (currentProduct) {
    //   // Increment quantity if the product already exists
    //   quantity = currentProduct.quantity + 1;
    // }

    // Product data object with updated quantity
    const productData = {
      product: productId,
      quantity: quantity, // Ensure we set 1 or increment by 1
    };

    // If there is a logged in user
    if (session.data) {
      // For logged-in users, use the addToCart hook
      setIsProductAddedToCart(true);
      addToCart(productData);
    } else {
      // Update localStorage
      updateLocalStorageCart(productId, quantity);

      // Update Redux state for guest cart
      dispatch(addToGuestCart({ product: productId, quantity }));

      setIsProductAddedToCart(true);
      window.dispatchEvent(new Event("storage"));
    }
  }

  return (
    <div className="flex w-auto cursor-pointer flex-col justify-center">
      {isProductAddedToCart && (
        <div className="my-2 flex w-full flex-row-reverse items-center justify-center gap-2 text-sm">
          <span className="font-bold text-green-600">
            {t("sBwmG4Xwcsv2mcubWVteU")}
          </span>
          <FcApproval />
        </div>
      )}
      <button
        className={cn(
          isSmall ? "mx-3 p-1" : "py-1 pe-4 ps-1",
          "flex max-w-fit items-center justify-start gap-3 rounded-full bg-primary align-middle text-xs text-white shadow-md transition-colors hover:bg-primary/80 lg:text-sm",
        )}
        onClick={handleAddingToCart}
      >
        <span
          className={cn(
            isProductAddedToCart ? "bg-green-600/40" : "bg-white",
            "rounded-full p-2",
          )}
        >
          {isProductAddedToCart ? (
            <TfiShoppingCartFull className="text-white" size={15} />
          ) : (
            <LuShoppingCart className="text-primary-foreground" size={15} />
          )}
        </span>
        {!isSmall && <span>{t("-k0yk9GUHIDLWvq7B4mRs")}</span>}
      </button>
    </div>
  );
}
