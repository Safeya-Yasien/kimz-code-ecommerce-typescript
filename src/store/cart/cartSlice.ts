import { createSlice } from "@reduxjs/toolkit";
import { TProduct, TLoading } from "@/types";

interface ICartState {
  items: { [key: string]: number };
  productsFullInfo: TProduct[];
  loading: TLoading;
  error: null | string;
}

const initialState: ICartState = {
  items: {},
  productsFullInfo: [],
  loading: "idle",
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const id = action.payload;
      if (state.items[id]) {
        state.items[id]++;
      } else {
        state.items[id] = 1;
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
