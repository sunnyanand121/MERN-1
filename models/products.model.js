const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  name: {
    type: String,
    require: [true, "Please enter product name"],
  },

  quantity: {
    type: Number,
    required: [true, "Please enter product quantity"],
  },
  price: {
    type: Number,
    required: true,
    default: 0,
  },
  image: {
    type: String,
    required: false,
  },
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
