require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const path = require("path");






const app = express();

// View engine
app.set("view engine", "ejs");

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));



// MongoDB connection
mongoose.connect(process.env.MONGO_URI)


  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));
const Story = require("./models/Story");
const storyRoutes = require("./routes/storyRoutes"); // ✅ THIS WAS MISSING

// Routes
/* ---------- TEMP TEST ROUTE (MOVE THIS UP) ---------- */


/* ---------- ROUTES ---------- */
app.use("/", storyRoutes);


// TEMP route to add one test story
app.get("/add-test-story", async (req, res) => {
  console.log("ADD TEST STORY ROUTE HIT");

  const story = await Story.create({
    title: "The Last Signal",
    chapters: ["Chapter 1: The Beginning"]
  });

  console.log("STORY SAVED:", story);

  res.send("Story added: " + story.title);
});



// Server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

