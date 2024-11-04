const Product = require('../models/Products')

module.exports = class ProductController {
    static async showProducts(req, res) {
        const products = await Product.getProducts()

        res.render('products/all', { products })
    }

    static createProduct(req, res) {
        res.render('products/create')
    }

    static async createProductPost(req, res) {
        const {name, price, urlImage, description } = req.body

        const product =  new Product(name, price, urlImage, description)

        await product.save()

        res.redirect('/products')
    }

    static async getProduct(req, res) {
        const id = req.params.id

        const product = await Product.getProductById(id)

        res.render('products/product', { product })
    }

    static async removeProduct(req, res) {
        const id = req.params.id

        await Product.removeProductById(id)

        res.redirect('/products')
    }

    static async editProduct(req, res) {
        const id = req.params.id

        const product = await Product.getProductById(id)

        res.render('products/edit', { product })
    }


}