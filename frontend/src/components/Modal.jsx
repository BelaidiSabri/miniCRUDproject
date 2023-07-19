import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { addProduct, updateProduct } from "../api/products";

const Modal = ({ handleCloseModal, isUpdate, id }) => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    quantity: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  const handleSave = async (e) => {
    e.preventDefault(); 
   

    try {
      if (isUpdate) {
        const response = await updateProduct(product, id);
        handleCloseModal();
        window.location.reload(false);
        if (response) {
          //console.log("Product updated successfully:", response);
        } else {
          console.log("Product update failed");
        }
      } else {
        const response = await addProduct(product);
        handleCloseModal();
        if (response) {
          //console.log("Product added successfully:", response);
        } else {
          console.log("Product addition failed");
        }
      }
    } catch (error) {
      console.error("Error saving the product:", error);
    }
  };

  return (
    <motion.div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-50 bg-black z-20">
      <motion.div
        className="w-1/4 bg-white rounded-lg shadow-lg"
        initial="hidden"
        animate={{
          scale: [0, 1],
        }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
          times: [0, 1],
        }}
      >
        <h2 className="text-2xl text-gray-800 font-semibold p-4">
          {isUpdate ? "Modifier un produit" : "Ajouter un produit"}
        </h2>
        <form onSubmit={handleSave}>
          <div className="p-6">
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-gray-700 font-semibold mb-1"
              >
                Nom
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={product.name}
                onChange={handleChange}
                className="w-full border text-black border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="price"
                className="block text-gray-700 font-semibold mb-1"
              >
                Prix
              </label>
              <input
                type="number"
                id="price"
                name="price"
                value={product.price}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="quantity"
                className="block text-gray-700 font-semibold mb-1"
              >
                Quantité
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                value={product.quantity}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="flex justify-end gap-2">
              <button
                onClick={handleCloseModal}
                className="font-semibold text-slate-500 hover:text-slate-900 hover:cursor-pointer"
              >
                Annuler
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              >
                {isUpdate ? "Modifier" : "Enregistrer"}
              </button>
            </div>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
