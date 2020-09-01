const express = require("express");
const app = express();

// routes
const { getPosts } = require("./routes/post.js");

app.get("/", getPosts);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
