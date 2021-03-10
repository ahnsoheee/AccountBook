const express = require("express");
const router = express.Router();
const userRouter = require("./api/user");
const logRouter = require("./api/log");
const inputRouter = require("./api/input");

router.use("/user", userRouter);
router.use("/log", logRouter);
router.use("/input", inputRouter);

module.exports = router;
