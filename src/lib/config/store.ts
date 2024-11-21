import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "../features/cart/cartSlice";
import { shippingFeesSlice } from "../features/checkout/shipping-fees";
import { guestCartSlice } from "../features/cart/guest-cart-slice";
import { guestWishlistSlice } from "../features/wishlist/guest-wishlist-slice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      cart: cartSlice.reducer,
      shippingFees: shippingFeesSlice.reducer,
      guestCart: guestCartSlice.reducer,
      guestWishlist: guestWishlistSlice.reducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
