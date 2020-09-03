const express = require("express");
const app = express();
const morgan = require("morgan");

// bring in routes
const postRoutes = require("./routes/post.js");

//middleware
app.use(morgan("dev"));
app.use("/", postRoutes);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
