const { mongoose } = require("mongoose");
const Product = require("../models/Products");

module.exports = class ProductController {
  static async showProducts(req, res) {
    const products = await Product.find().lean(); // metodo lean e para fazer o loop e receber os dados

    res.render("products/all", { products });
  }

  static createProduct(req, res) {
    res.render("products/create");
  }

  static async createProductPost(req, res) {
    const { name, price, urlImage, description } = req.body;

    const product = new Product({ name, price, urlImage, description });

    await product.save();

    res.redirect("/products");
  }

  static async getProduct(req, res) {
    let { id } = req.params;
    id = id.toString(); // Garantir que é uma string

    // if (!mongoose.Types.ObjectId.isValid(id)) {
    //   return res.status(400).json({ message: "ID inválido" });
    // }
    console.log(typeof id);

    const product = await Product.findById(id).lean();

    res.render("products/product", { product });
    // try {

    // } catch (error) {
    //     console.error(error)
    // }
  }

  // static async removeProduct(req, res) {
  //     let { id } = req.params
  //     id = toString()

  //     await Product.removeProductById(id)

  //     res.redirect('/products')
  // }

  static async editProduct(req, res) {
    let { id } = req.params;
    id = id.toString();

    const product = await Product.findById(id).lean();

    res.render("products/edit", { product });
  }

  static async editProductPost(req, res) {
    let { id } = req.body;
    const { name, price, urlImage, description } = req.body;
    id = id.toString()
    const product = {name, price, urlImage, description}
    await Product.updateOne({_id: id }, product);

    res.redirect("/products");
  }
};
