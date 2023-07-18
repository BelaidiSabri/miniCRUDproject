const { v4: uuidv4 } = require("uuid");

let products = [];

const getProducts = async (req, res) => {
  try {
    res
      .status(200)
      .send(
        products.length > 0
          ? { products: products }
          : { message: "no product existed" }
      );
  } catch (error) {
    res.send({ error: "An error occurred" });
  }
};

const addProduct = (req, res) => {
  try {
    const product = req.body;
    const newProduct = { ...product, id: uuidv4() };
    products.push(newProduct);
    res.status(200).send({ "product added successfully": newProduct });
  } catch (error) {
    res.send({ error: "An error occurred" });
    console.log(error);
  }
};

const getProductbyID = (req, res) => {
  try {
    const { id } = req.params;
    const product = products.find((product) => product.id === id);
    if (product) {
      res.send({ product: product });
    } else {
      res.send({ message: "Product does not exist" });
    }
  } catch (error) {
    res.send({ error: "An error occurred" });
    console.log(error);
  }
};

const updateProductbyID = (req, res) => {
  try {
    const { id } = req.params;
    const productToUpdate = products.find((product) => product.id === id);
    if (productToUpdate) {
      Object.assign(productToUpdate, req.body);
      res.send({
        message: "Product updated successfully",
        updatedProduct: productToUpdate,
      });
    } else {
      res.send({ message: "Product does not exist" });
    }
  } catch (error) {
    res.send({ error: "An error occurred" });
    console.log(error);
  }
};

const deleteProductbyID = (req, res) => {
  try {
    const { id } = req.params;
    const productIndex = products.findIndex((product) => product.id === id);
    if (productIndex !== -1) {
      const deletedProduct = products.splice(productIndex, 1);
      res.send({
        message: "Product deleted successfully",
        deletedProduct: deletedProduct[0],
      });
    } else {
      res.send({ message: "Product does not exist" });
    }
  } catch (error) {
    res.send({ error: "An error occurred" });
    console.log(error);
  }
};

module.exports = {
  addProduct,
  getProducts,
  getProductbyID,
  updateProductbyID,
  deleteProductbyID,
};
