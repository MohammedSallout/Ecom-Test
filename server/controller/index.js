const Products = require("../database/build");

const createProducts = (req, res) => {
  const { title, description, price } = req.body;
  Products.create({
    title: title,
    description: description,
    price: price,
  })
    .then((product) => {
      res.status(201).json(product);
    })
    .catch(() => {
      res.status(500).json({ error: "Error creating product" });
    });
};

const getProducts = (req, res) => {
  Products.findAll()
    .then((product) => {
      res.json(product);
    })
    .catch((err) => {
      console.error("Error retrieving products:", err);
    });
};

module.exports = { createProducts, getProducts };
