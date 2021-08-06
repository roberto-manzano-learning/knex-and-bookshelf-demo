const bookshelf = require("../bookshelf");
require("./Warehouse");

const Inventory = bookshelf.model("Inventory", {
  tableName: "inventories",
  warehouses() {
    return this.belongsToMany("Warehouses");
  },
});

module.exports = Inventory;
