const express = require("express");
const product = express.Router();
const controller = require("../controllers/product");

product.route("/").get(controller.getAllProducts);
product.route("/search").get(controller.getProductByDescription);
product.route("/create").post(controller.createProduct);

module.exports = product;