import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import cartReducer from "./cart/cartSlice";
import filters from "./filters/filtersSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    filters,
  },
  devTools: true,
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = typeof store.dispatch;

export const wrapper = createWrapper<AppStore>(() => store);
