const express = require("express");
const { getPosts, createPost } = require("../controllers/post");
const { requireSignin } = require("../controllers/auth");
const { userById } = require("../controllers/user");
const { createPostValidator } = require("../validator/index");

const router = express.Router();

router.get("/", getPosts);
router.post(
  "/post/new/:userId",
  requireSignin,
  createPost,
  createPostValidator
);

// any route containing :userId, app will first execute userById()
router.param("userId", userById);

module.exports = router;
