const express = require('express')
const router = express.Router()
const ProductController = require('../controllers/ProductController')

router.get('/create', ProductController.createProduct)
router.post('/remove/:id', ProductController.removeProduct)
router.get('/:id', ProductController.getProduct)
router.post('/create', ProductController.createProductPost)
router.get('/', ProductController.showProducts)

module.exports = router