const express = require("express");
const inventoryController = require("../controllers/inventoryControllers");
const router = express.Router();

// Inventory Routes
router.get("/inventories", inventoryController.sampleControllerMethod);

module.exports = router;
