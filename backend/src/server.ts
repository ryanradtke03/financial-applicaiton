import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import path from "path";

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from the frontend build
const frontendPath = path.join(__dirname, "../../frontend/dist");
app.use(express.static(frontendPath));

// API Route example
app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from the backend!" });
});

// Catch-all route to serve frontend for any route not handled by APIs
app.get("*", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
