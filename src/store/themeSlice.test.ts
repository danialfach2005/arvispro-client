import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import themeReducer, { setTheme, toggleTheme } from "./themeSlice";

describe("themeSlice edge cases", () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.removeAttribute("data-theme");
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should return the initial state", () => {
    const state = themeReducer(undefined, { type: "unknown" });
    expect(state.theme).toBeDefined();
    expect(state.resolved).toBeDefined();
  });

  it("should handle setTheme to dark and persist to localStorage", () => {
    const initialState = { theme: "light" as const, resolved: "light" as const };
    const actual = themeReducer(initialState, setTheme("dark"));
    expect(actual.theme).toBe("dark");
    expect(actual.resolved).toBe("dark");
    expect(localStorage.getItem("arvispro-theme")).toBe("dark");
    expect(document.documentElement.getAttribute("data-theme")).toBe("dark");
  });

  it("should handle setTheme to system (edge case: system dark mode)", () => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: vi.fn().mockImplementation((query) => ({
        matches: query === "(prefers-color-scheme: dark)",
      })),
    });

    const initialState = { theme: "light" as const, resolved: "light" as const };
    const actual = themeReducer(initialState, setTheme("system"));
    
    expect(actual.theme).toBe("system");
    expect(actual.resolved).toBe("dark");
    expect(localStorage.getItem("arvispro-theme")).toBe("system");
  });

  it("should handle setTheme to system (edge case: system light mode)", () => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: vi.fn().mockImplementation(() => ({
        matches: false,
      })),
    });

    const initialState = { theme: "dark" as const, resolved: "dark" as const };
    const actual = themeReducer(initialState, setTheme("system"));
    
    expect(actual.theme).toBe("system");
    expect(actual.resolved).toBe("light");
    expect(localStorage.getItem("arvispro-theme")).toBe("system");
  });

  it("should handle toggleTheme correctly", () => {
    const initialState = { theme: "light" as const, resolved: "light" as const };
    const actual = themeReducer(initialState, toggleTheme());
    expect(actual.theme).toBe("dark");
    expect(actual.resolved).toBe("dark");
    expect(localStorage.getItem("arvispro-theme")).toBe("dark");

    const actual2 = themeReducer(actual, toggleTheme());
    expect(actual2.theme).toBe("light");
    expect(actual2.resolved).toBe("light");
    expect(localStorage.getItem("arvispro-theme")).toBe("light");
  });
});
