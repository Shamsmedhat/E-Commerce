import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type GuestCartItem = {
  quantity: number;
  product: string;
};

type GuestCartInitialState = GuestCartItem[];

const guestCartInitialState: GuestCartInitialState = [];

export const guestCartSlice = createSlice({
  name: "guest-cart",
  initialState: guestCartInitialState,
  reducers: {
    addToGuestCart(state, action: PayloadAction<GuestCartItem>) {
      const existingProduct = state.find(
        (item) => item.product === action.payload.product,
      );

      if (existingProduct) {
        // If product already exists in cart, increase quantity
        existingProduct.quantity += action.payload.quantity;
      } else {
        // Otherwise, add new product to cart
        state.push(action.payload);
      }
    },
  },
});

export const { addToGuestCart } = guestCartSlice.actions;
export default guestCartSlice.reducer;
