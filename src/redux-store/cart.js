import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cartItems: [],
};
const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    AddToCart: (state, action) => {
      state.cartItems = [...state.cartItems, action.payload];
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },

    updateCartbyIndex: (state, action) => {
      state.cartItems = JSON.parse(localStorage.getItem("cart"));
      const index = state.cartItems.findIndex(
        (item) => item._id.$oid === action.payload._id.$oid
      );
      state.cartItems[index].quantity = action.payload.quantity;
      state.cartItems[index].totalPrice = action.payload.totalPrice;
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    removeFromCart: (state, action) => {
      const index = state.cartItems.findIndex(
        (item) => item._id.$oid === action.payload._id.$oid
      );
      if (index !== -1) {
        state.cartItems.splice(index, 1);
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
  },
});
export const { AddToCart, removeFromCart, updateCartbyIndex } = cart.actions;
export default cart.reducer;
