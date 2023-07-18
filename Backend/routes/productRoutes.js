const express = require("express");
const Product = require("../controllers/productController");
const router = express.Router();

router.get("/products", Product.getProducts);
router.post("/product", Product.addProduct);
router.get("/product/:id", Product.getProductbyID);
router.put("/product/:id", Product.updateProductbyID);
router.delete("/product/:id", Product.deleteProductbyID);

module.exports = router;
