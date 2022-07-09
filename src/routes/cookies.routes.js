const express = require("express");
const router = express.Router();
const { home } = require("../controllers/cookies.controller");

router.get("/", home);


module.exports = router;
