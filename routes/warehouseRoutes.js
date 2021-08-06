const express = require("express");
const warehouseController = require("../controllers/warehouseControllers");
const router = express.Router();

// Warehouse Routes
router.route("/warehouses").get(warehouseController.sampleControllerMethod);
// router.route("/warehouses/:id").get(warehouseController.getAuthorById);
// router.route("/warehouses").post(warehouseController.newAuthor);

module.exports = router;
