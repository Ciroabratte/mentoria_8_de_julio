const express = require("express");
const router = express.Router();
const { home, usuario } = require("../controllers/cookies.controller");



router.get("/", home);

router.get("/usuario", usuario);
module.exports = router;

