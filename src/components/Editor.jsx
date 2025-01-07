import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

export default function Editor({ onGenerateReview, isGenerating }) {
  const [code, setCode] = useState();

  return (
    <div className="h-full w-6/12 relative">
      <button
        onClick={() => onGenerateReview(code)}
        className="w-max absolute bottom-3 right-3 z-50 bg-gray-950 hover:bg-gray-900 text-gray-400 rounded-full px-4 py-3 shadow-xl duration-200"
      >
        Generate Review
      </button>
      <CodeMirror
        minHeight="100vh"
        value={code}
        onChange={setCode}
        theme="dark"
        extensions={[javascript({ jsx: true })]}
        style={{ fontSize: "16px" }}
      />
    </div>
  );
}
