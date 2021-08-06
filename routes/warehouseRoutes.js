const express = require("express");
const warehouseController = require("../controllers/warehouseControllers");
const router = express.Router();

// Warehouse Routes
router.route("/").get(warehouseController.getAll);
router.route("/:id").get(warehouseController.getOne);
router.route("/").post(warehouseController.addOne);

module.exports = router;
