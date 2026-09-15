import { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { AiOutlineComment } from "react-icons/ai";
import { starterCode } from "../sampleCode";

export default function Editor({ error, onGenerateReview, isGenerating }) {
  const [code, setCode] = useState(starterCode);

  return (
    <div className="relative flex min-h-[55vh] flex-col overflow-hidden border-b border-gray-800 md:min-h-screen md:w-6/12 md:border-b-0 md:border-r">
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
          style={{ fontSize: "14px", minHeight: "100%" }}
          placeholder="Write your code here..."
        />
      </div>

      <button
        disabled={isGenerating}
        onClick={() => {
          onGenerateReview(code);
        }}
        className="fixed bottom-3 right-3 z-50 flex items-center gap-2 rounded-full border border-gray-700 bg-gray-900 px-4 py-3 text-gray-300 shadow-xl duration-200 hover:border-gray-400 disabled:cursor-not-allowed disabled:opacity-70"
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
