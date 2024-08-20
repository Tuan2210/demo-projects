/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";
import { fileURLToPath } from "url";

import pageVisitRoute from "./routes/pageVisit.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, "../.env.local") }); // root

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json({ limit: "20mb" }));
app.use(
  cors({
    credentials: true,
    origin:
      "http://localhost:5173" ||
      "https://portfolio-dinh-quang-tuan-server.onrender.com//api",
  })
);

// if (!mongoDbUrl) {
//   console.error("Error: VITE_MONGODB_URL is not defined in .env file.");
//   process.exit(1); // Exit the application
// }

app.use("/api/pageVisit", pageVisitRoute);

// Connect to MongoDB
mongoose
  .connect(process.env.VITE_MONGODB_URL)
  .then(() => {
    console.log("Connected to MongoDB");

    app.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
