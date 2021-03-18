const express = require("express");
const router = express.Router();
const controller = require("../../controllers/category");

router.post("/category", controller.getCategory);
router.delete("/category", controller.deleteCategory);

module.exports = router;
