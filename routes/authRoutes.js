const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/authController");

router.post("/login", authControllers.login);
router.post("/signup", authControllers.signup);

module.exports = router;