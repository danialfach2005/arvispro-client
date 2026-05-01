import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type Theme = "light" | "dark" | "system";

interface ThemeState {
  theme: Theme;
  resolved: "light" | "dark";
}

function getSystemTheme(): "light" | "dark" {
  if (typeof window !== "undefined") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }
  return "light";
}

function resolve(theme: Theme): "light" | "dark" {
  return theme === "system" ? getSystemTheme() : theme;
}

const stored = (typeof window !== "undefined" ? localStorage.getItem("arvispro-theme") : "system") as Theme || "system";

const initialState: ThemeState = {
  theme: stored,
  resolved: resolve(stored),
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<Theme>) {
      state.theme = action.payload;
      state.resolved = resolve(action.payload);
      if (typeof window !== "undefined") {
        localStorage.setItem("arvispro-theme", action.payload);
        document.documentElement.setAttribute("data-theme", state.resolved);
      }
    },
    toggleTheme(state) {
      const next = state.resolved === "light" ? "dark" : "light";
      state.theme = next;
      state.resolved = next;
      if (typeof window !== "undefined") {
        localStorage.setItem("arvispro-theme", next);
        document.documentElement.setAttribute("data-theme", next);
      }
    },
  },
});

export const { setTheme, toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
