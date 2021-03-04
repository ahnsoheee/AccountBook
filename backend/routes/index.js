const express = require("express");
const router = express.Router();
const userRouter = require("./api/user");

router.use("/user", userRouter);

router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
module.exports = router;
