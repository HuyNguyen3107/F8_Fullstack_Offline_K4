import { configureStore } from "@reduxjs/toolkit";
import { trelloSlice } from "./slice/trelloSlice";
export const store = configureStore({
  reducer: {
    trello: trelloSlice.reducer,
  },
});
