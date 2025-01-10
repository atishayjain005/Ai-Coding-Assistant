import React from "react";
import MarkdownPreview from "@uiw/react-markdown-preview";
import Loader from "./Loader";

export default function Review({ review, isGenerating }) {
  return (
    <div className="h-auto w-6/12 relative shadow-2xl">
      {isGenerating ? (
        <Loader />
      ) : review ? (
        <MarkdownPreview
          source={review}
          style={{
            fontSize: "16px",
            minHeight: "100vh",
            padding: "1rem",
            paddingBottom:"6rem",
            backgroundColor: "#030712",
          }}
        />
      ) : (
        <div
        className="bg-[#030712] h-full"
          style={{
            fontSize: "16px",
            color: "#f87171",
            padding: "1rem",
            paddingBottom:"3rem",
            textAlign: "center",
          }}
        >
          No review generated. Please try again.
        </div>
      )}
    </div>
  );
}
