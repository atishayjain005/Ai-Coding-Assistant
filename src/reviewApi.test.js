import { describe, expect, it } from "vitest";

import { createReview, getReviewApiUrl } from "./reviewApi";

describe("review API client", () => {
  it("uses the configured API base URL", async () => {
    const calls = [];
    const fetcher = async (url, options) => {
      calls.push({ url, options });
      return {
        ok: true,
        json: async () => ({ review: "Looks good." }),
      };
    };

    const review = await createReview("const value = 1;", {
      apiBaseUrl: "https://example.test",
      fetcher,
    });

    expect(review).toBe("Looks good.");
    expect(calls[0].url).toBe("https://example.test/api/v1/reviews");
  });

  it("surfaces API error messages", async () => {
    await expect(
      createReview("const value = 1;", {
        fetcher: async () => ({
          ok: false,
          json: async () => ({ message: "Model is offline." }),
        }),
      }),
    ).rejects.toThrow("Model is offline.");
  });

  it("defaults to the local backend in development", () => {
    expect(getReviewApiUrl()).toBe("http://localhost:3000/api/v1/reviews");
  });
});
