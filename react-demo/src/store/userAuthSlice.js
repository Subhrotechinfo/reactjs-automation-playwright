import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const userAuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    //set details in local storage
    setToken: (state, action) => {
      state.provider = action.payload;
      if (action.payload.email)
        localStorage.setItem("provider", JSON.stringify({ login: "email" }));
    },
    // logout: (state, action) => {
    //   state.provider = undefined;
    //   localStorage.removeItem("provider");
    //   // state.tokenInfo = null;
    //   // localStorage.removeItem("provider");
    // },
  },
});

export const { setToken } = userAuthSlice.actions;
export default userAuthSlice.reducer;
