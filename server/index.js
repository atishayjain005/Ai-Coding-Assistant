import express from "express";
import cors from "cors"

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors())

app.post("/api/v1/reviews", (req, res) => {
    const code = req.body;
    console.log(code);
  
    return res.send({
      review: "awesome code",
    });
  });
  
app.listen(port, () => {
  console.log("server is running on port 3000");
});
