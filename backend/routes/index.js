const express = require("express");
const router = express.Router();
const userRouter = require("./api/user");
const logRouter = require("./api/log");

router.use("/user", userRouter);
router.use("/log", logRouter);
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
