import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";
import authReducer, { setCredentials } from "./authSlice";

describe("apiSlice error handling and auth flows", () => {
  let store: any;
  const mockFetch = vi.fn();

  beforeEach(() => {
    store = configureStore({
      reducer: {
        auth: authReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
      },
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
    });
    global.fetch = mockFetch;
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("injects authorization header when token is present", async () => {
    store.dispatch(
      setCredentials({
        user: { id: "1", email: "test@test.com", role: "ADMIN" },
        token: "fake-token-123",
      })
    );

    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve([{ id: "1", name: "Lead 1" }]),
    });

    await store.dispatch(apiSlice.endpoints.getLeads.initiate(undefined));

    expect(mockFetch).toHaveBeenCalled();
    const request = mockFetch.mock.calls[0][0] as Request;
    expect(request.headers.get("authorization")).toBe("Bearer fake-token-123");
  });

  it("does not inject authorization header when token is absent", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve([{ id: "1", name: "Lead 1" }]),
    });

    await store.dispatch(apiSlice.endpoints.getLeads.initiate(undefined));

    expect(mockFetch).toHaveBeenCalled();
    const request = mockFetch.mock.calls[0][0] as Request;
    expect(request.headers.get("authorization")).toBeNull();
  });

  it("handles API errors gracefully", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: false,
      status: 401,
      json: () => Promise.resolve({ message: "Unauthorized" }),
    });

    const result = await store.dispatch(apiSlice.endpoints.getLeads.initiate(undefined));

    expect(result.isError).toBe(true);
    expect(result.error).toMatchObject({
      status: 401,
      data: { message: "Unauthorized" },
    });
  });

  it("handles network failures (edge case)", async () => {
    mockFetch.mockRejectedValueOnce(new Error("Network Error"));

    const result = await store.dispatch(apiSlice.endpoints.getLeads.initiate(undefined));

    expect(result.isError).toBe(true);
    expect(result.error).toMatchObject({
      status: "FETCH_ERROR",
      error: "Error: Network Error",
    });
  });
});
