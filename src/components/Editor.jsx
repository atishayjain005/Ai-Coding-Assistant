import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

export default function Editor() {
  return (
    <div className="h-full w-6/12 relative">
      <CodeMirror
        minHeight="100vh"
        value="HellWorld"
        onChange={() => {}}
        theme="dark"
        extensions={[javascript({ jsx: true })]}
        style={{fontSize:"16px"}}
      />
    </div>
  );
}
