import express from "express";
import cors from "cors";
import categories from "./routes/categories.js";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/categories", categories);

// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});