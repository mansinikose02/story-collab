const express = require("express");
const router = express.Router();
const Story = require("../models/Story");

// Home page - list all stories
router.get("/", async (req, res) => {
  try {
    const stories = await Story.find();
    res.render("index", { stories });
  } catch (err) {
    console.error("HOME ROUTE ERROR:", err);
    res.status(500).send("Something went wrong loading stories");
  }
});


// Form to create new story
router.get("/new", (req, res) => {
  res.render("newStory");
});

// Create a story
router.post("/stories", async (req, res) => {
  await Story.create({
    title: req.body.title,
    chapters: []   // ✅ start empty
  });

  res.redirect("/");
});

// Delete a story
router.post("/stories/:id/delete", async (req, res) => {
  await Story.findByIdAndDelete(req.params.id);
  res.redirect("/");
});


// View a single story
router.get("/stories/:id", async (req, res) => {
  const story = await Story.findById(req.params.id);
  res.render("story", { story });
});

// Add a chapter
router.post("/stories/:id/chapters", async (req, res) => {
  const story = await Story.findById(req.params.id);

  // 🔥 FIX: convert old string chapters to objects
  story.chapters = story.chapters.map(ch =>
    typeof ch === "string"
      ? { text: ch, createdAt: new Date() }
      : ch
  );

  // add new chapter correctly
  story.chapters.push({
    text: req.body.chapter
  });

  await story.save();
  res.redirect(`/stories/${req.params.id}`);
});



// Delete a chapter by index
router.post("/stories/:id/chapters/:index/delete", async (req, res) => {
  const story = await Story.findById(req.params.id);

  story.chapters.splice(req.params.index, 1);
  await story.save();

  res.redirect(`/stories/${req.params.id}`);
});


module.exports = router;
