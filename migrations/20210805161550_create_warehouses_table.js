exports.up = function (knex) {
  // run this when we need to change our schemas!
  return knex.schema
    .createTable("warehouses", function (table) {
      table.uuid("id").primary();
      table.string("name").notNullable();
      table.string("address").notNullable();
      table.string("city").notNullable();
      table.string("country").notNullable();
      table.string("contact_name").notNullable();
      table.string("contact_position").notNullable();
      table.string("contact_phone").notNullable();
      table.string("contact_email").notNullable();
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table.timestamp("updated_at").defaultTo(knex.fn.now());
    })
    .createTable("inventories", function (table) {
      table.uuid("id").primary();
      table.string("item_name").notNullable();
      table.string("description").notNullable();
      table.string("category").notNullable();
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table.timestamp("updated_at").defaultTo(knex.fn.now());
    })
    .createTable("inventories_warehouses", function (table) {
      table
        .uuid("warehouse_id")
        .references("warehouses.id")
        .onDelete("CASCADE");
      table
        .uuid("inventory_id")
        .references("inventories.id")
        .onDelete("CASCADE");
      table.integer("quantity").notNullable();
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table.timestamp("updated_at").defaultTo(knex.fn.now());
    });
};

exports.down = function (knex) {
  // run this when we need to undo those changes!
  // note: the order is important here!
  return knex.schema
    .dropTable("inventories_warehouses")
    .dropTable("inventories")
    .dropTable("warehouses");
};
