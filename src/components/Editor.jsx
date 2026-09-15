import { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { AiOutlineComment } from "react-icons/ai";
export default function Editor({ error, onGenerateReview, isGenerating }) {
  const [code, setCode] = useState("");

  return (
    <div className="h-full w-6/12 relative flex flex-col overflow-hidden">
      <div
        className="flex-1 overflow-auto custom-scrollbar"
        style={{
          height: "100%",
        }}
      >
        <CodeMirror
          value={code}
          onChange={(value) => setCode(value)}
          theme="dark"
          extensions={[javascript({ jsx: true })]}
          style={{ fontSize: "14px", minHeight: "100vh" }}
          placeholder="Write your code here..."
        />
      </div>

      <button
        disabled={isGenerating}
        onClick={() => {
          onGenerateReview(code);
        }}
        className="fixed bottom-3 right-3 z-50 bg-gray-900 border border-gray-900 hover:border-gray-400 text-gray-400 rounded-full px-4 py-3 shadow-xl duration-200 flex items-center gap-2"
      >
        {isGenerating ? (
          "Generating..."
        ) : (
          <>
            <AiOutlineComment size={20} /> Generate Review
          </>
        )}
      </button>
      {error ? (
        <p className="fixed bottom-20 left-3 right-3 z-50 rounded-md border border-red-400/40 bg-red-950 px-4 py-3 text-sm text-red-100 shadow-xl md:left-auto md:max-w-md">
          {error}
        </p>
      ) : null}
    </div>
  );
}
