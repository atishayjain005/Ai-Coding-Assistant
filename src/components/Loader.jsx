import React from "react";

export default function Loader() {
  return (
    <div className="bg-[#030712] h-full flex items-center justify-center flex-col">
      <div className="spinner border-t-4 border-gray-400 border-solid rounded-full w-16 h-16 animate-spin"></div>

      <div className="loading-text text-gray-400 mt-4 text-lg">
        Generating Review...
      </div>
    </div>
  );
}
