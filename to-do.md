Initial state. We already have:

- our `knexfile.js` from the Knex and Migrations lesson
- everything in `/seed_data`, `/seeds`, and `/migrations`

To observe:

- The DB schema; notice how it's slightly different from the day before
  - We refactored the data to not make it repeat itself; that meant adding a third table.
  - ONE inventory can have in stock inside MANY warehouses
  - ONE warehouse can have many types of inventory
- My existing structure (concepts we've previously taught):
  - We created directories: `/routes`, `/models`, `/controllers`
    - Check out the way we separated our concerns.
    - Express is _unopinioned_: there's no mandated structure, so make it readable
  - This time, we renamed `index.js` to `server.js`.
    - If we're going to call a file explicitly it may as well make sense.
    - Don't forget to rename the `main` property in `package.json`
- We also set up express, port listening, middleware (including morgan, a logger)

We want to design the following routes:

- GET /api/warehouses
- GET /api/warehouses/:id
- POST /api/warehouses/
- POST /api/warehouses/:id/inventories
- PUT /api/warehouses/:id
- DELETE /api/warehouses/:id
- GET /api/inventories
- GET /api/inventories/:id

Steps

- Install `bookshelf` if we haven't already
- Create a brand new `bookshelf.js`
  - Configuration file that tells models what DB to look
  - How? It'll look at knex's configuration

```js
const knex = require("knex")(require("./knexfile").development);
const bookshelf = require("bookshelf")(knex);

module.exports = bookshelf;
```

Creating your models

Add a model folder and files

- Create folder `/models`
- We'll use two models: `Warehouse` and `Inventory`
  - `/models/Warehouse.js`, `/models/Inventory.js`
- Best practice for file naming: singular, uppercase
- We have two models, but three DB tables; that's okay

  - Because Bookshelf handles these relationships more gracefully
  - With relational DBs we need a lookup table

- Start with the given model syntax:

```js
const bookshelf = require("../bookshelf");

const Warehouse = bookshelf.model("Author", {
  tableName: "warehouses",
});

module.exports = Warehouse;
```

- Add associations. A warehouse can have many inventory items, so we'll add this:

```js
const bookshelf = require("../bookshelf");

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
```

Write the Route and the Controller

```js
// /routes/warehouseRoutes.js
router.route("/").get(warehouseController.getAll);
```

```js
// /controllers/warehouseControllers.js
router.route("/warehouses").get(warehouseController.getAll);
```

## Resources

- https://bookshelfjs.org/tutorial-associations.html - Associations
- https://devhints.io/bookshelf
