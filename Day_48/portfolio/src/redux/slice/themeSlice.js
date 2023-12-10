import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "light",
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
  },
});
