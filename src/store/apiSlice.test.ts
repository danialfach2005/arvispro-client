import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";
import authReducer, { setCredentials } from "./authSlice";

// Mock Request to avoid undici AbortSignal conflict in JSDOM
class MockRequest {
  url: string;
  headers: Headers;
  constructor(url: string, init?: any) {
    this.url = url;
    this.headers = new Headers(init?.headers);
  }
}

describe("apiSlice error handling and auth flows", () => {
  let store: any;
  const mockFetch = vi.fn();
  const originalRequest = global.Request;

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
    global.Request = MockRequest as any;
  });

  afterEach(() => {
    vi.restoreAllMocks();
    global.Request = originalRequest;
  });

  it("injects authorization header when token is present", async () => {
    store.dispatch(
      setCredentials({
        user: { id: "1", email: "test@test.com", role: "ADMIN" },
        token: "fake-token-123",
      })
    );

    mockFetch.mockResolvedValueOnce(
      new Response(JSON.stringify([{ id: "1", name: "Lead 1" }]), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      })
    );

    await store.dispatch(apiSlice.endpoints.getLeads.initiate(undefined));

    expect(mockFetch).toHaveBeenCalled();
    const requestArgs = mockFetch.mock.calls[0];
    const requestObj = requestArgs[0] as MockRequest;
    expect(requestObj.headers.get("authorization")).toBe("Bearer fake-token-123");
  });

  it("does not inject authorization header when token is absent", async () => {
    mockFetch.mockResolvedValueOnce(
      new Response(JSON.stringify([{ id: "1", name: "Lead 1" }]), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      })
    );

    await store.dispatch(apiSlice.endpoints.getLeads.initiate(undefined));

    expect(mockFetch).toHaveBeenCalled();
    const requestArgs = mockFetch.mock.calls[0];
    const requestObj = requestArgs[0] as MockRequest;
    expect(requestObj.headers.get("authorization")).toBeNull();
  });

  it("handles API errors gracefully", async () => {
    mockFetch.mockResolvedValueOnce(
      new Response(JSON.stringify({ message: "Unauthorized" }), {
        status: 401,
        headers: { "Content-Type": "application/json" }
      })
    );

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
