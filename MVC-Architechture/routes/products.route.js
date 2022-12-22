const express = require('express');
const router = express.Router();
const { getProducts, saveProducts } = require('../controllers/products.controller');

router.get("/products",getProducts);

router.post("/products",saveProducts);

module.exports = router;