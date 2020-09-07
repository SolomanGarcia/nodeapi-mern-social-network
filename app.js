const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
const expressValidator = require("express-validator");
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
const authRoutes = require("./routes/auth.js");

//middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
app.use("/", postRoutes);
app.use("/", authRoutes);
app.use(function (err, req, res, next) {
  if (err.name === "UnauthorizedError") {
    res.status(401).json({ error: "Unauthorized, invalid token" });
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
