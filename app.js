const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config();

const app = express();

// ===== Middleware =====
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// ===== View engine =====
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// ===== MongoDB =====
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

  app.get("/health", (req, res) => {
  res.send("OK");
});

// ===== Routes =====
const storyRoutes = require("./routes/storyRoutes");
app.use("/", storyRoutes);

// ===== PORT (REQUIRED FOR RENDER) =====
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
