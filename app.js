const express = require("express");
const app = express();
const morgan = require("morgan");

// routes
const { getPosts } = require("./routes/post.js");

//middleware
app.use(morgan("dev"));

app.get("/", getPosts);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
