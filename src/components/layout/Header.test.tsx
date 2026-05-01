import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { Header } from "./Header";
import themeReducer from "@/store/themeSlice";
import uiReducer from "@/store/uiSlice";
import authReducer from "@/store/authSlice";

describe("Header", () => {
  const createTestStore = () =>
    configureStore({
      reducer: {
        theme: themeReducer,
        ui: uiReducer,
        auth: authReducer,
      },
    });

  it("renders correctly", () => {
    const store = createTestStore();
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );
    expect(screen.getByText(/Arvispro/i)).toBeInTheDocument();
  });

  it("toggles theme when theme button is clicked", () => {
    const store = createTestStore();
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );

    const themeButton = screen.getByRole("button", { name: /Switch to/i });
    expect(themeButton).toBeInTheDocument();

    const initialState = store.getState().theme.theme;
    
    fireEvent.click(themeButton);
    
    const newState = store.getState().theme.theme;
    expect(newState).not.toBe(initialState);
  });

  it("toggles mobile menu when menu button is clicked", () => {
    const store = createTestStore();
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );

    const menuButton = screen.getByRole("button", { name: /Buka menu|Tutup menu/i });
    expect(store.getState().ui.isMenuOpen).toBe(false);

    fireEvent.click(menuButton);
    expect(store.getState().ui.isMenuOpen).toBe(true);

    fireEvent.click(menuButton);
    expect(store.getState().ui.isMenuOpen).toBe(false);
  });
});
