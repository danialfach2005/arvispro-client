import { describe, it, expect } from "vitest";
import authReducer, { setCredentials, logout } from "./authSlice";

describe("authSlice", () => {
  const initialState = {
    user: null,
    token: null,
    isAuthenticated: false,
  };

  it("should handle initial state", () => {
    expect(authReducer(undefined, { type: "unknown" })).toEqual(initialState);
  });

  it("should handle setCredentials", () => {
    const mockUser = { id: "1", email: "admin@arvispro.com", role: "ADMIN" as const };
    const mockToken = "mock.jwt.token";

    const actual = authReducer(
      initialState,
      setCredentials({ user: mockUser, token: mockToken })
    );

    expect(actual.user).toEqual(mockUser);
    expect(actual.token).toEqual(mockToken);
    expect(actual.isAuthenticated).toBe(true);
  });

  it("should handle logout", () => {
    const loggedInState = {
      user: { id: "1", email: "admin@arvispro.com", role: "ADMIN" as const },
      token: "mock.jwt.token",
      isAuthenticated: true,
    };

    const actual = authReducer(loggedInState, logout());

    expect(actual.user).toBeNull();
    expect(actual.token).toBeNull();
    expect(actual.isAuthenticated).toBe(false);
  });

  it("should cover edge case: login twice updates user", () => {
    const loggedInState = {
      user: { id: "1", email: "admin@arvispro.com", role: "ADMIN" as const },
      token: "mock.jwt.token",
      isAuthenticated: true,
    };

    const newUser = { id: "2", email: "editor@arvispro.com", role: "EDITOR" as const };
    const newToken = "new.jwt.token";

    const actual = authReducer(
      loggedInState,
      setCredentials({ user: newUser, token: newToken })
    );

    expect(actual.user).toEqual(newUser);
    expect(actual.token).toEqual(newToken);
  });
});
