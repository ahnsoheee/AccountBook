const express = require("express");
const router = express.Router();
const controller = require("../../controllers/category");

router.post("/", controller.getCategory);
router.post('/add', controller.createCategory)
router.post('/update', controller.updateCategory)
router.delete("/", controller.deleteCategory);

module.exports = router;
