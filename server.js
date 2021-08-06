const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
const knex = require("knex")(require("./knexfile").development); // import knex with db config
const PORT = process.env.PORT || 8080;
const warehouseRoutes = require("./routes/warehouseRoutes");
const inventoryRoutes = require("./routes/inventoryRoutes");

// middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json({ message: "hello world" });
});

// prefaced w/ API endpoint? Go to the appropriate route
app.use("/api/warehouses", warehouseRoutes);
app.use("/api/inventories", inventoryRoutes);

app.get("/*", (req, res) => {
  res.redirect("/");
});

app.listen(PORT, () => {
  console.log(`running at http://localhost:${PORT}`);
});
