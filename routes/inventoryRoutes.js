const express = require("express");
const inventoryController = require("../controllers/inventoryControllers");
const router = express.Router();

// Inventory Routes
router.get("/inventories", inventoryController.sampleControllerMethod);
// router.route("/inventories/:id").get(inventoryController.getAuthorById);
// router.route("/inventories").post(inventoryController.newAuthor);

module.exports = router;
