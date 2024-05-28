const test = require("../controller/user.controller");

const express = require("express");
const router = express.Router();

router.get("/", test);

module.exports = router;
