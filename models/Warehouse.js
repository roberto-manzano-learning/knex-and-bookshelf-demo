const bookshelf = require("../bookshelf");

// needs this to work - otherwise bookshelf doesn't "know" about inventory.
// Ironically, if you put all of your models in one file, it works fine. Sigh
require("./Inventory");

const Warehouse = bookshelf.model("Warehouse", {
  tableName: "warehouses",
  inventories() {
    return this.belongsToMany("Inventory");
  },
  // belongsTo
  // hasOne
  // hasMany
  // hasMany().through()
});

module.exports = Warehouse;
