import { useState } from "react";

import Editor from "./components/Editor";
import Review from "./components/Review";

function App() {
  const [review, setReview] = useState("");
  const [state, setState] = useState("idle");
  const isGenerating = state === "generating";

  const handleGenerateReview = async (code) => {
    if (!code || code.trim() === "") {
      alert("Please enter some code before generating a review.");
      return;
    }

    try {
      setState("generating");
      const response = await fetch("http://localhost:3000/api/v1/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        alert(errorData.message || "Failed to generate review.");
        throw new Error(errorData.message || "Failed to generate review.");
      }

      const data = await response.json();
      setReview(data.review);
      setState("generated");
    } catch (err) {
      console.error("Error generating review:", err.message);
      alert("Something went wrong. Please try again.");
      setState("idle");
    }
  };

  return (
    <div className="flex">
      <Editor
        isGenerating={isGenerating}
        onGenerateReview={handleGenerateReview}
      />
      <Review isGenerating={isGenerating} review={review} />
    </div>
  );
}

export default App;
