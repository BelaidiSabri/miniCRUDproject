import React, { useEffect, useState } from "react";
import { getProducts } from "../api/products";
import Product from "./Product";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const productsData = await getProducts();
      if (productsData) {
        setProducts(productsData);
        setFilteredProducts(productsData);
      } else {
        setProducts([]);
        setFilteredProducts([]);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleSearch = (event) => {
    const searchQuery = event.target.value.toLowerCase();
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery)
    );
    setFilteredProducts(filtered);
  };

  return (
    <div>
      <div className="w-full flex justify-center">
        <input
          className="w-60 mt-10 p-2 rounded-full bg-gray-100 border border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
          type="text"
          placeholder="Search..."
          onChange={handleSearch}
        />
      </div>
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-4">Product List</h1>
        <div className="flex justify-start items-center gap-5">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Product key={product.id} product={product} />
            ))
          ) : (
            <h1>Pas de produit .</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
