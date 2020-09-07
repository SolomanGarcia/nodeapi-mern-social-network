const jwt = require("jsonwebtoken");
require("dotenv").config();
const User = require("../models/user");

exports.signup = async (req, res) => {
  const userExists = await User.findOne({ email: req.body.email });
  if (userExists)
    return res.status(403).json({
      error: "Email is taken!"
    });
  const user = await new User(req.body);
  await user.save();
  res.status(200).json({ message: "Signup successful! Please login." });
};

exports.signin = (req, res) => {
  // find the user based on email
  const { email, password } = req.body;
  User.findOne({ email }, (err, user) => {
    // if err or no user
    if (err || !user) {
      return res.status(401).json({
        error: "User with that email does not exist. Please signin or signup."
      });
    }
    // if user is found make sure the email and password match
    // create authentication method in model and use here
  });
  // if error or no user
  // if user, authenticate
  // generate a token with user id and secret
  // persist the token as 't' in cookir with expiry date
  // return response with user and token to frontend client
};
