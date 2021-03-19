const express = require("express");
const router = express.Router();
const controller = require("../../controllers/account");

router.post("/", controller.getAccount);
router.post("/add", controller.createAccount);
router.post("/update", controller.updateAccount);
router.delete("/", controller.deleteAccount);

module.exports = router;
