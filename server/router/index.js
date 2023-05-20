const express = require("express");
const { createProducts, getProducts } = require("../controller");
const router = express.Router();

router.post("/products", createProducts);
router.get("/products", getProducts);

module.exports = router;
