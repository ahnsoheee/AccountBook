const express = require("express");
const router = express.Router();
const userRouter = require("./api/user");
const logRouter = require("./api/log");
const categoryRouter = require("./api/category");
const accountRouter = require("./api/accunt");

router.use("/user", userRouter);
router.use("/log", logRouter);
router.use("/category", categoryRouter);
router.use("/account", accountRouter);

module.exports = router;
