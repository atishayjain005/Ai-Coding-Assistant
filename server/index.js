import express from "express";
import cors from "cors";

import generateReview from "./review.js";

const app = express();
const port = process.env.PORT || 3000; // Use environment variable for port

app.use(express.json());
app.use(cors());

app.post("/api/v1/reviews", async (req, res) => {
  const code = req.body.code;

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

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
