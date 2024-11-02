const conn = require("../db/conn");
const { ObjectId } = require("mongodb");

class Product {
  constructor(name, price, urlImage, description) {
    this.name = name;
    this.price = price;
    this.urlImage = urlImage;
    this.description = description;
  }

  async save() {
    const product = await conn.db().collection("products").insertOne({
      name: this.name,
      price: this.price,
      urlImage: this.urlImage,
      description: this.description,
    });

    return product;
  }

  static getProducts() {
    const products = conn.db().collection("products").find().toArray();

    return products;
  }

  static async getProductById(id) {
    const product = await conn
      .db()
      .collection("products")
      .findOne({ _id: new ObjectId(id) });
    return product;

    /* Solução alternativa
        try {
        const objectId = new ObjectId(id.toString()); // Converte explicitamente para string
        console.log(objectId, 'getProductById');
        
        const product = await conn.db().collection('products').findOne({ _id: objectId });
        console.log(product);
        return product;
    } catch (error) {
        console.error('Erro ao buscar produto:', error);
        return null;
    }
        */
  }
}

module.exports = Product;
