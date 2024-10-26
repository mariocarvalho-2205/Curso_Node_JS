const express = require('express')
const router = express.Router()
const ProductsController = require('../controllers/ProductController')

router.get('/', ProductsController.showProducts)

module.exports = router 