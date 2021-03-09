const express = require("express");
const router = express.Router();
const controller = require("../../controllers/log");

router.post("/", controller.getLog);
// router.post("/add", controller.add);
// router.post("/update", controller.update);
// router.delete("/delete", constroller.delete);

module.exports = router;
