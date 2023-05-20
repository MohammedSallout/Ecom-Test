const connection = require('../config/connection')

const addProductQuery = (productData) => {
  const { title, description, price } = productData

  const sql = {
    text: 'INSERT INTO products (title, description, price) VALUES ($1 , $2, $3)',
    values: [title, description, price]
  }

  return connection.query(sql)
}

const getProductsQuery = () => {
  const sql = {
    text: 'SELECT *FROM products;'
  }

  return connection.query(sql)
}

module.exports = { addProductQuery, getProductsQuery }