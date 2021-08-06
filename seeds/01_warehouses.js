// import seed data files, arrays of objects
const inventoryData = require("../seed_data/original_inventories");
const warehouseData = require("../seed_data/original_warehouses");
const lookupTableData = require("../seed_data/inventories_warehouses");

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("warehouses_inventories")
    .del()
    .then(function () {
      return knex("inventories").del();
    })
    .then(function () {
      return knex("warehouses").del();
    })
    .then(function () {
      return knex("warehouses").insert(warehouseData);
    })
    .then(function () {
      return knex("inventories").insert(inventoryData);
    })
    .then(function () {
      return knex("warehouses_inventories").insert(lookupTableData);
    });
};
