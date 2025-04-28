import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./userAuthSlice";
import { UserApi } from "./userApi";
const store = configureStore({
  reducer: {
    auth: authReducer,
    [UserApi.reducerPath]: UserApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([UserApi.middleware]),
  devTools: true,
});

export default store;
