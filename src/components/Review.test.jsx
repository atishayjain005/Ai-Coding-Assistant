/* @vitest-environment jsdom */
import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import Review from "./Review";

vi.mock("@uiw/react-markdown-preview", () => ({
  default: ({ source }) => <article>{source}</article>,
}));

describe("Review", () => {
  it("shows a ready state before a review is generated", () => {
    render(<Review isGenerating={false} review="" />);

    expect(
      screen.getByRole("heading", { name: /ready for review/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/submit the starter snippet/i)).toBeInTheDocument();
  });
});
