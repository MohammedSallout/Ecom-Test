const Sequelize = require("sequelize");
require("dotenv").config();

if (!process.env.DB_URL) {
  console.error("Please set the DB_URL environment variable.");
  process.exit(1);
}

const sequelize = new Sequelize(process.env.DB_URL, {
  host: "localhost",
  dialect: "postgres",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been successfully.");
  })
  .catch((err) => {
    console.error("Can not connect to the database:", err);
  });

module.exports = sequelize;
