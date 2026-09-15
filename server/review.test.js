import { describe, expect, it, vi } from "vitest";

const constructorCalls = [];
const invoke = vi.fn();

vi.mock("@langchain/ollama", () => ({
  ChatOllama: class {
    constructor(options) {
      constructorCalls.push(options);
    }

    invoke(messages) {
      return invoke(messages);
    }
  },
}));

describe("generateReview", () => {
  it("uses environment configuration for the local model", async () => {
    vi.stubEnv("OLLAMA_MODEL", "codellama");
    vi.stubEnv("OLLAMA_BASE_URL", "http://localhost:11434");
    vi.resetModules();

    await import("./review.js");

    expect(constructorCalls.at(-1)).toEqual({
      baseUrl: "http://localhost:11434",
      model: "codellama",
      temperature: 0,
    });
  });

  it("trims generated review content", async () => {
    vi.unstubAllEnvs();
    vi.resetModules();
    invoke.mockResolvedValueOnce({ content: "  Looks good.  " });
    const { default: generateReview } = await import("./review.js");

    await expect(generateReview("const value = 1;")).resolves.toBe(
      "Looks good.",
    );
  });

  it("fails quickly when the model stalls", async () => {
    vi.unstubAllEnvs();
    vi.resetModules();
    invoke.mockImplementationOnce(() => new Promise(() => {}));
    const { default: generateReview } = await import("./review.js");

    await expect(
      Promise.race([
        generateReview("const value = 1;", { timeoutMs: 10 }),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error("timed out waiting")), 50),
        ),
      ]),
    ).rejects.toThrow("review timed out");
  });
});
