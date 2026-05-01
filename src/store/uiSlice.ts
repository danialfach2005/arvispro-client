import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface UIState {
  isMenuOpen: boolean;
  activeSection: string;
  isScrolled: boolean;
  contactModalOpen: boolean;
}

const initialState: UIState = {
  isMenuOpen: false,
  activeSection: "home",
  isScrolled: false,
  contactModalOpen: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setMenuOpen(state, action: PayloadAction<boolean>) {
      state.isMenuOpen = action.payload;
    },
    toggleMenu(state) {
      state.isMenuOpen = !state.isMenuOpen;
    },
    setActiveSection(state, action: PayloadAction<string>) {
      state.activeSection = action.payload;
    },
    setScrolled(state, action: PayloadAction<boolean>) {
      state.isScrolled = action.payload;
    },
    setContactModalOpen(state, action: PayloadAction<boolean>) {
      state.contactModalOpen = action.payload;
    },
  },
});

export const {
  setMenuOpen,
  toggleMenu,
  setActiveSection,
  setScrolled,
  setContactModalOpen,
} = uiSlice.actions;

export default uiSlice.reducer;
