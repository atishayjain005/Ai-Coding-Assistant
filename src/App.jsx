import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Editor from "./components/Editor";
import Review from "./components/Review";

function App() {
  const [review, setReview] = useState("");
  const [state, setState] = useState("idle");

  const isGenerating = state === "generating"

  const handleGenerateReview = async (code) => {
    try {
      const response = await fetch("http://localhost:3000/api/v1/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code }),
      });

      const data = await response.json();
      setReview(data.review);
    } catch (err) {
      alert("Something went wrong. Please try again later.");
      console.log(err);
    }
  };

  return (
    <div className="flex">
      <Editor onGenerateReview={handleGenerateReview} isGenerating={isGenerating} />
      <Review review={review} isGenerating={isGenerating} />
    </div>
  );
}

export default App;
