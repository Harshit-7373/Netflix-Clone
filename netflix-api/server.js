// server.js

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/UserRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect("mongodb://localhost:27017/netflix-clone", { // Update connection string here
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.error("Database connection error:", err); // Error handling
  });

// API Routes
app.use("/api/user", userRoutes);

// Start Server
app.listen(5000, () => {
  console.log("Server Started on port 5000...");
});
