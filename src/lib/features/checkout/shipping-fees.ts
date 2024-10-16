import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction, Slice } from "@reduxjs/toolkit";

type ShippingFeesType = {
  shippingFees: number;
};

const shippingFeesInitialState: ShippingFeesType = {
  shippingFees: 0,
};

export const shippingFeesSlice: Slice<ShippingFeesType> = createSlice({
  name: "cart",
  initialState: shippingFeesInitialState,
  reducers: {
    addShippingFees(state, action: PayloadAction<number>) {
      state.shippingFees = action.payload;
    },
  },
});

export const { addShippingFees } = shippingFeesSlice.actions;
export default shippingFeesSlice.reducer;
