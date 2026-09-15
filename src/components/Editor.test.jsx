/* @vitest-environment jsdom */
import "@testing-library/jest-dom/vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import Editor from "./Editor";

vi.mock("@uiw/react-codemirror", () => ({
  default: ({ value, onChange }) => (
    <textarea
      aria-label="Code editor"
      value={value}
      onChange={(event) => onChange(event.target.value)}
    />
  ),
}));

describe("Editor", () => {
  it("loads starter code and submits it for review", () => {
    const onGenerateReview = vi.fn();

    render(
      <Editor
        error=""
        isGenerating={false}
        onGenerateReview={onGenerateReview}
      />,
    );

    expect(screen.getByLabelText("Code editor").value).toEqual(
      expect.stringContaining("function calculateTotal"),
    );

    fireEvent.click(screen.getByRole("button", { name: /generate review/i }));

    expect(onGenerateReview).toHaveBeenCalledWith(
      expect.stringContaining("function calculateTotal"),
    );
  });
});
