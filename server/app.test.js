import request from "supertest";
import { describe, expect, it, vi } from "vitest";

vi.mock("./review.js", () => ({
  default: vi.fn(async (code) => `Reviewed: ${code}`),
}));

const { default: generateReview } = await import("./review.js");
const { createApp } = await import("./app.js");

describe("review API", () => {
  it("rejects empty code before calling the model", async () => {
    const app = createApp();

    const response = await request(app)
      .post("/api/v1/reviews")
      .send({ code: "   " })
      .expect(400);

    expect(response.body).toEqual({
      message: "Code is required for review.",
    });
    expect(generateReview).not.toHaveBeenCalled();
  });

  it("returns generated review content for valid code", async () => {
    const app = createApp();

    const response = await request(app)
      .post("/api/v1/reviews")
      .send({ code: "const value = 1;" })
      .expect(200);

    expect(response.body).toEqual({
      review: "Reviewed: const value = 1;",
    });
  });
});
