const { addProductQuery, getProductsQuery } = require("../database/query");

const createProducts = (req, res) => {
  const { title, description, price } = req.body;

  addProductQuery({ title, description, price })
        .then(() => {
          res.status(201).json({
            error: false,
            data: {
              message: 'Product has been created successfully'
            }
          })
        })
        .catch((err) => {
          console.error(err)
          res.status(500).json({
            error: true,
            data: {
              message: 'An error occurred while creating Product'
            }
          })
        })
};

const getProducts = (req, res) => {
  getProductsQuery()
    .then((data) => res.status(200).json(data.rows))
    .catch((err) => console.log(err))
};

module.exports = { createProducts, getProducts };
