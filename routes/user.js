const express = require("express");
const { userById, allUsers } = require("../controllers/user");

const router = express.Router();

router.get("/users", allUsers);

// any route containing :userId, app will first execute userById()
router.param("userId", userById);

module.exports = router;
