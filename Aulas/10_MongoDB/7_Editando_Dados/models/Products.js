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
    const newProduct = {
      name: this.name,
      price: this.price,
      urlImage: this.urlImage,
      description: this.description,
    };

    const product = await conn
      .db()
      .collection("products")
      .insertOne(newProduct);

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
  }

  static async removeProductById(id) {
    function isValidObjectId(id) {
        return ObjectId.isValid(id) && new ObjectId(id).toString() === id;
    }
    
    // No método getProductById
    if (!isValidObjectId(id)) {
        throw new Error('ID inválido');
    }
    const objectId = new ObjectId(id);

    await conn
      .db()
      .collection("products")
      .deleteOne({ _id: objectId });
    return;
  }
}

module.exports = Product;
