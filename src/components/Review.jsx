import React from "react";
import MarkdownPreview from "@uiw/react-markdown-preview";
import Loader from "./Loader";

export default function Review({ review, isGenerating }) {
  return (
    <div className="h-full w-6/12 relative shadow-2xl">
      {isGenerating ? (
        <Loader />
      ) : (
        <MarkdownPreview
          source={review}
          style={{
            fontSize: "16px",
            minHeight: "100vh",
            padding: "1rem",
            backgroundColor: "#030712",
          }}
        />
      )}
    </div>
  );
}
