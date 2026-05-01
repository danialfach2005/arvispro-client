import { describe, it, expect } from "vitest";
import uiReducer, {
  setMenuOpen,
  toggleMenu,
  setActiveSection,
  setScrolled,
  setContactModalOpen,
} from "./uiSlice";

describe("uiSlice edge cases and actions", () => {
  const initialState = {
    isMenuOpen: false,
    activeSection: "home",
    isScrolled: false,
    contactModalOpen: false,
  };

  it("should return the initial state", () => {
    expect(uiReducer(undefined, { type: "unknown" })).toEqual(initialState);
  });

  it("should handle setMenuOpen", () => {
    expect(uiReducer(initialState, setMenuOpen(true)).isMenuOpen).toBe(true);
    expect(uiReducer(initialState, setMenuOpen(false)).isMenuOpen).toBe(false);
  });

  it("should handle toggleMenu", () => {
    expect(uiReducer(initialState, toggleMenu()).isMenuOpen).toBe(true);
    expect(uiReducer({ ...initialState, isMenuOpen: true }, toggleMenu()).isMenuOpen).toBe(false);
  });

  it("should handle setActiveSection", () => {
    expect(uiReducer(initialState, setActiveSection("about")).activeSection).toBe("about");
  });

  it("should handle setScrolled edge case toggling", () => {
    expect(uiReducer(initialState, setScrolled(true)).isScrolled).toBe(true);
    expect(uiReducer({ ...initialState, isScrolled: true }, setScrolled(false)).isScrolled).toBe(false);
  });

  it("should handle setContactModalOpen", () => {
    expect(uiReducer(initialState, setContactModalOpen(true)).contactModalOpen).toBe(true);
  });
});
