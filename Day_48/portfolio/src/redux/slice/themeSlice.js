"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // theme: localStorage.getItem("theme")
  //   ? localStorage.getItem("theme")
  //   : "light",
  theme: "light",
  isLoading: true,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    light: (state, action) => {
      state.theme = "light";
      localStorage.setItem("theme", state.theme);
    },
    dark: (state, action) => {
      state.theme = "dark";
      localStorage.setItem("theme", state.theme);
    },
    setLoading: (state, action) => {
      state.isLoading = false;
    },
  },
});
