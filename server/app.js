import cors from "cors";
import express from "express";

import generateReview from "./review.js";

export function createApp() {
  const app = express();

  app.use(express.json({ limit: "200kb" }));
  app.use(cors());

  app.get("/health", (_req, res) => {
    res.send({
      ok: true,
      model: process.env.OLLAMA_MODEL || "llama3.2",
    });
  });

  app.post("/api/v1/reviews", async (req, res) => {
    const code = req.body?.code;

    if (!code || code.trim() === "") {
      return res.status(400).send({ message: "Code is required for review." });
    }

    try {
      const review = await generateReview(code);

      return res.send({
        review,
      });
    } catch (err) {
      console.error("Error generating review:", err.message);
      return res.status(500).send({
        message: "Something went wrong. Please try again later.",
      });
    }
  });

  return app;
}
