import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { Header } from "./Header";
import uiReducer from "@/store/uiSlice";
import authReducer from "@/store/authSlice";

describe("Header", () => {
  const createTestStore = () =>
    configureStore({
      reducer: {
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
    expect(screen.getByAltText(/Arvispro Logo/i)).toBeInTheDocument();
  });


  it("toggles mobile menu when menu button is clicked", () => {
    const store = createTestStore();
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );

    const menuButton = screen.getByRole("button", { name: /Open menu|Close menu/i });
    expect(store.getState().ui.isMenuOpen).toBe(false);

    fireEvent.click(menuButton);
    expect(store.getState().ui.isMenuOpen).toBe(true);

    fireEvent.click(menuButton);
    expect(store.getState().ui.isMenuOpen).toBe(false);
  });
});
