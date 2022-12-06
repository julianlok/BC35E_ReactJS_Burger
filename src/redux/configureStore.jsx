import { configureStore } from "@reduxjs/toolkit";
import { burgerReducer } from "../redux/reducers/burgerRducer.jsx";

export const store = configureStore({
  reducer: {
    burgerReducer,
  },
});
