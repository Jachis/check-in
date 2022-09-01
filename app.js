const express = require("express");
const { Sequelize, DataTypes } = require("Sequelize");

const db = new Sequelize({});

db.authenticate()
  .then(() => console.log("Database authenticated"))
  .catch((err) => console.log(err));

db.sync()
  .then(() => console.log("Database synced"))
  .catch((err) => console.log(err));

const app = express();

app.use(express.json());

const PORT = 4000;

app.listen(PORT, () => {
  console.log("Express app running!");
});
