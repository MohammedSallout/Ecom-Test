const sequelize = require("./connection");
const { DataTypes } = require("sequelize");

const Products = sequelize.define("products", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

sequelize
  .sync() // Pass { force: true } to drop existing tables and recreate them
  .then(() => {
    console.log("Tables created successfully");
  })
  .catch((error) => {
    console.error("Error creating tables:", error);
  });

module.exports = Products;
