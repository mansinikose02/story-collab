const mongoose = require("mongoose");

const storySchema = new mongoose.Schema({
  title: String,
  chapters: [
  {
    text: String,
    createdAt: {
      type: Date,
      default: Date.now
    }
  }
]
,
});

module.exports = mongoose.model("Story", storySchema);
