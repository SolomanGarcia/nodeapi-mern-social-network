const express = require("express");
const {
  signup,
  signin,
  signout,
  forgotPassword,
  resetPassword
} = require("../controllers/auth");

const {
  userSignupValidator,
  userSigninValidator,
  passwordResetValidator
} = require("../validator/index");
const { userById } = require("../controllers/user");

const router = express.Router();

router.post("/signup", userSignupValidator, signup);
router.post("/signin", userSigninValidator, signin);
router.get("/signout", signout);

// password forgot and reset routes
router.put("/forgot-password", forgotPassword);
router.put("/reset-password", passwordResetValidator, resetPassword);

// any route containing :userId, app will first execute userById()
router.param("userId", userById);

module.exports = router;
