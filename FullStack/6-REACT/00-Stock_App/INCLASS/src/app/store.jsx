import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import stockReducer from "../features/StockSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persist//!
const store = configureStore({
  reducer: {
    auth: persist,
    stock: stockReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});
export default store;
