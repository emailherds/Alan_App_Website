import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import { PORT, mongoDBURL } from "./config.js";
import reviewsRoute from "./routes/reviewsRoutes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware for parsing JSON
app.use(express.json());

// Enable CORS
app.use(cors()); 

app.use("/api/reviews", reviewsRoute);

// Serve static files from the React frontend
app.use(express.static(path.join(__dirname, "frontend", "build")));

// Catch-all route to serve React app (for React Router)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend", "build", "index.html"));
});


// Connect to MongoDB and start the server
mongoose
  .connect(mongoDBURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to database:", error.message);
  });
