const express = require("express");
const {
  getProducts,
  getproduct,
  updateProduct,
  deleteProduct,
  createProduct,
} = require("../controllers/product.controllers");

const router = express.Router();

router.get("/", getProducts);

router.post("/", createProduct);

router.get("/:id", getproduct);

router.put("/:id", updateProduct);

router.delete("/:id", deleteProduct);

module.exports = router;
