import { useState } from "react";

import Editor from "./components/Editor";
import Review from "./components/Review";
import { createReview } from "./reviewApi";

function App() {
  const [review, setReview] = useState("");
  const [state, setState] = useState("idle");
  const [error, setError] = useState("");
  const isGenerating = state === "generating";

  const handleGenerateReview = async (code) => {
    if (!code || code.trim() === "") {
      setError("Please enter some code before generating a review.");
      return;
    }

    try {
      setError("");
      setState("generating");
      const nextReview = await createReview(code);
      setReview(nextReview);
      setState("generated");
    } catch (err) {
      console.error("Error generating review:", err.message);
      setError(err.message || "Something went wrong. Please try again.");
      setState("idle");
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-gray-950 md:flex-row">
      <Editor
        isGenerating={isGenerating}
        error={error}
        onGenerateReview={handleGenerateReview}
      />
      <Review isGenerating={isGenerating} review={review} />
    </div>
  );
}

export default App;
