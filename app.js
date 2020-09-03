const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const dotenv = require("dotenv");
dotenv.config();

// db
mongoose
  .connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(() => {
    console.log("DB Connected");

    mongoose.connection.on("error", (err) => {
      console.log(`DB connection error: ${error.message}`);
    });
  });

// bring in routes
const postRoutes = require("./routes/post.js");

//middleware
app.use(morgan("dev"));
app.use("/", postRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
