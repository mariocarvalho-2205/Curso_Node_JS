const conn = require('../db/conn')

class Product {
    constructor(name, price, description) {
        this.name= name
        this.price = price
        this.description = description
    }

    async save() {
        const product = await conn.db().collection('products').insertOne({
            name: this.name,
            price: this.price,
            description: this.description
        })

        return product
    }

    static getProducts() {
        const products = conn.db().collection('products').find().toArray()

        return products
    }
}

module.exports = Product
