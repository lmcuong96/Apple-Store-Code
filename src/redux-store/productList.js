// features/products/productSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  searchProducts: [],
  sortedProducts: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { addProduct } = productSlice.actions;

export default productSlice.reducer;
