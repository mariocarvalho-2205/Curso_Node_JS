const Product = require('../models/Product')

module.exports = class ProductController {
    static async showProducts (req, res) {
        const products = await Product.getProducts()
        res.render('products/all', {products})
    }

    static createProduct(req, res) {
        res.render('products/create')
    }
    
    static async createProductPost(req, res) {
        const { name, price, description } = req.body

        const product = new Product(name, price, description)

        product.save()
        console.log(name, price, description)

        res.redirect('/products')
    }


}