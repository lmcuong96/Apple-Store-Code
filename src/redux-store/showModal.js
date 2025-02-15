import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  products: [],
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.products = action.payload;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.products = [];
    },
  },
});
export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
