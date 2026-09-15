import MarkdownPreview from "@uiw/react-markdown-preview";
import Loader from "./Loader";

export default function Review({ review, isGenerating }) {
  return (
    <div className="relative min-h-[45vh] bg-[#030712] shadow-2xl md:min-h-screen md:w-6/12">
      {isGenerating ? (
        <Loader />
      ) : review ? (
        <MarkdownPreview
          source={review}
          style={{
            fontSize: "16px",
            minHeight: "100vh",
            padding: "1rem",
            paddingBottom: "6rem",
            backgroundColor: "#030712",
          }}
        />
      ) : (
        <div className="flex min-h-[45vh] flex-col justify-center px-6 py-10 text-gray-300 md:min-h-screen md:px-10">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-cyan-300">
            Local AI review
          </p>
          <h1 className="mb-4 text-3xl font-semibold text-white">
            Ready for review
          </h1>
          <p className="max-w-xl text-base leading-7 text-gray-400">
            Submit the starter snippet or replace it with your own JavaScript to
            generate structured feedback from your local Ollama model.
          </p>
        </div>
      )}
    </div>
  );
}
