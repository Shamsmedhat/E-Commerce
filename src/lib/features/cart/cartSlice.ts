import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction, Slice } from "@reduxjs/toolkit";

type toggleType = {
  rowStyle: Boolean;
  columnStyle: Boolean;
};

const toggleInitialState: toggleType = {
  rowStyle: true,
  columnStyle: false,
};

export const cartSlice: Slice<toggleType> = createSlice({
  name: "cart",
  initialState: toggleInitialState,
  reducers: {
    toggleToRow(state, action: PayloadAction<Boolean>) {
      state.rowStyle = action.payload;
      state.columnStyle = false;
    },
    toggleToColumn(state, action: PayloadAction<Boolean>) {
      state.columnStyle = action.payload;
      state.rowStyle = false;
    },
  },
});

export const { toggleToRow, toggleToColumn } = cartSlice.actions;
export default cartSlice.reducer;
