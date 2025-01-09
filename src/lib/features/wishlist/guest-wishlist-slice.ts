import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type GuestWishlistItem = {
  product: string;
};

type GuestWishlistInitialState = GuestWishlistItem[];

const guestWishlistInitialState: GuestWishlistInitialState = [];

export const guestWishlistSlice = createSlice({
  name: "guest-wishlist",
  initialState: guestWishlistInitialState,
  reducers: {
    addToGuestWishlist(state, action: PayloadAction<GuestWishlistItem>) {
      const existingProduct = state.find(
        (item) => item.product === action.payload.product,
      );

      if (existingProduct) {
        return;
      } else {
        state.push(action.payload);
      }
    },
    removeFromGuestWishlist(state, action: PayloadAction<GuestWishlistItem>) {
      const existingProduct = state.find(
        (item) => item.product === action.payload.product,
      );

      if (existingProduct) {
        return state.filter((item) => item.product !== action.payload.product);
      } else {
        return;
      }
    },
  },
});

export const { addToGuestWishlist, removeFromGuestWishlist } =
  guestWishlistSlice.actions;
export default guestWishlistSlice.reducer;
