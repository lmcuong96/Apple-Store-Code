import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./showModal";
import productList from "./productList";
import userLogin from "./auth-redux";
import cart from "./cart";
const store = configureStore({
  reducer: {
    modal: modalReducer,
    product: productList,
    auth: userLogin,
    cart: cart,
  },
});

export default store;
