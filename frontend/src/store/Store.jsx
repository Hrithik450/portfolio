import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/AuthSlice";

const Store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default Store;
