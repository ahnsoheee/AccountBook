const express = require("express");
const router = express.Router();
const controller = require("../../controllers/log");

router.post("/", controller.getLog);
router.post("/add", controller.addLog);
router.post("/update", controller.updateLog);
router.delete("/delete", controller.deleteLog);

module.exports = router;
