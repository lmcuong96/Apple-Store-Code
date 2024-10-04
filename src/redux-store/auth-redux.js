import { createSlice } from "@reduxjs/toolkit";

const userLogin = createSlice({
  name: "userLogin",
  initialState: {
    isLogin: false,
    user: {},
  },
  reducers: {
    login: (state, action) => {
      state.isLogin = true;
      state.user = action.payload;
    },
    logout: (state, action) => {
      state.isLogin = false;
      state.user = {};
    },
  },
});
export const loginAction = userLogin.actions;
export default userLogin;
