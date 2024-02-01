import { configureStore } from "@reduxjs/toolkit";
import emailReducer from "./slice";
export const store = configureStore({
  reducer: {
    email: emailReducer,
  },
});
