import { createApp } from "./app.js";

const port = process.env.PORT || 3000; // Use environment variable for port
const app = createApp();

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
