import React from "react";

export default function Loader() {
  return (
    <div className="loader">
      <div className="spinner"></div>
      <div className="loading-text">Generating Review...</div>
    </div>
  );
}
