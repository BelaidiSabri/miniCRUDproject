import axios from "axios";

export const getProducts = async () => {
  try {
    const response = await axios.get("http://localhost:5000/api/products");
    return response.data.products;
  } catch (error) {
    console.error("Error getting products:", error);
    return [];
  }
};

export const deleteProduct = async (id) => {
  try {
    const response = await axios.delete(
      `http://localhost:5000/api/product/${id}`
    );
    return response.data;
  } catch (error) {
    console.error("Error deleting the product:", error);
    return [];
  }
};

export const addProduct = async (product) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/product",
      product
    );
    return response.data;
  } catch (error) {
    console.error("Error adding the product:", error);
    return null;
  }
};

export const updateProduct = async (product, id) => {
  try {
    const response = await axios.put(
      `http://localhost:5000/api/product/${id}`,
      product
    );
    return response.data;
  } catch (error) {
    console.error("Error updating the product:", error);
    return null;
  }
};
