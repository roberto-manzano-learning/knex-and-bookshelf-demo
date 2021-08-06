Initial state. We already have:

- our `knexfile.js` from the Knex and Migrations lesson
- everything in `/seed_data`, `/seeds`, and `/migrations`

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

- `npm i morgan cors bookshelf`
- Create directories: `/routes`, `/models`, `/controllers`
- rename `index.js` to `server.js`.
  - If we're going to call a file explicitly it may as well make sense.
  - Don't forget to rename the `main` property in `package.json`
- Set up express, port listening, middleware (including morgan, a logger)

Create some routes in the routes directory

- create files:

  - `/routes`: `inventoryRoutes.js`, `warehouseRoutes.js`
  - `/controllers`: `inventoryControllers.js`, `warehouseControllers.js`

- In `server.js`:
  ```js
  const warehouseRoutes = require("./routes/warehouseRoutes");
  const inventoryRoutes = require("./routes/inventoryRoutes");
  ```
