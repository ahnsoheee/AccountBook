const express = require("express");
const router = express.Router();
const controller = require("../../controllers/input");

router.post("/category", controller.getCategory);
router.post("/account", controller.getAccount);
router.delete("/category", controller.deleteCategory);

module.exports = router;
