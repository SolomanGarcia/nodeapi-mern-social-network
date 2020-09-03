const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  title: {
    type: String,
    required: "Title is required",
    minLength: 4,
    maxlength: 150
  },
  body: {
    type: String,
    required: "Body is required",
    minLength: 4,
    maxlength: 2000
  }
});

module.exports = mongoose.model("Post", postSchema);
