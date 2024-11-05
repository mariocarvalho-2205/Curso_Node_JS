const mongoose = require('mongoose')
const { Schema } = mongoose

const Product = mongoose.model('Products', new Schema({
  name: { 
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  urlImage: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
}))


module.exports = Product;
